-- All purchases made before this release were sandbox purchases. Preserve them
-- for testing while preventing them from granting ownership after launch.
alter table public.pp_purchases add column if not exists livemode boolean not null default false;
create index if not exists pp_purchases_user_mode on public.pp_purchases(user_id, livemode);

-- Replace the old signature to avoid ambiguous PostgREST RPC overloads. The
-- default keeps the previous sandbox function compatible during deployment.
drop function if exists public.pp_record_purchase(text, text, uuid, text, text, bigint);
create or replace function public.pp_record_purchase(
  p_provider text, p_reference text, p_user_id uuid, p_status text,
  p_token text default null, p_event_time bigint default 0,
  p_livemode boolean default false
) returns void language plpgsql security invoker set search_path = '' as $$
declare
  existing_user uuid;
  existing_mode boolean;
begin
  perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(p_provider || ':' || p_reference, 0));
  select user_id, livemode into existing_user, existing_mode from public.pp_purchases
    where provider = p_provider and reference = p_reference;
  if existing_user is not null and (existing_user <> p_user_id or existing_mode <> p_livemode) then
    raise exception 'Purchase already bound' using errcode = '23505';
  end if;
  insert into public.pp_purchases(provider, reference, user_id, status, provider_token, event_time, livemode)
    values(p_provider, p_reference, p_user_id, p_status, p_token, p_event_time, p_livemode)
  on conflict(provider, reference) do update set
    status = excluded.status,
    provider_token = coalesce(excluded.provider_token, public.pp_purchases.provider_token),
    event_time = excluded.event_time,
    updated_at = now()
  where excluded.event_time >= public.pp_purchases.event_time;
end;
$$;
revoke all on function public.pp_record_purchase(text, text, uuid, text, text, bigint, boolean) from public, anon, authenticated;
grant execute on function public.pp_record_purchase(text, text, uuid, text, text, bigint, boolean) to service_role;

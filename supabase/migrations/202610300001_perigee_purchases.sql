create table if not exists public.pp_purchases (
  provider text not null check (provider in ('stripe', 'google_play')),
  reference text not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id text not null default 'full_content_upgrade' check (product_id = 'full_content_upgrade'),
  status text not null check (status in ('active', 'revoked')),
  provider_token text,
  event_time bigint not null,
  updated_at timestamptz not null default now(),
  primary key (provider, reference)
);
create index if not exists pp_purchases_user on public.pp_purchases(user_id);
alter table public.pp_purchases enable row level security;
revoke all on public.pp_purchases from anon, authenticated;
grant all on public.pp_purchases to service_role;

-- Atomic, immutable receipt/account binding, including concurrent first claims.
-- Nothing accepts ownership or an account id from a browser payment return URL.
create or replace function public.pp_record_purchase(
  p_provider text, p_reference text, p_user_id uuid, p_status text,
  p_token text default null, p_event_time bigint default 0
) returns void language plpgsql security invoker set search_path = '' as $$
declare existing_user uuid;
begin
  perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(p_provider || ':' || p_reference, 0));
  select user_id into existing_user from public.pp_purchases where provider = p_provider and reference = p_reference;
  if existing_user is not null and existing_user <> p_user_id then
    raise exception 'Purchase already bound' using errcode = '23505';
  end if;
  insert into public.pp_purchases(provider, reference, user_id, status, provider_token, event_time)
    values(p_provider, p_reference, p_user_id, p_status, p_token, p_event_time)
  on conflict(provider, reference) do update set
    status = excluded.status,
    provider_token = coalesce(excluded.provider_token, public.pp_purchases.provider_token),
    event_time = excluded.event_time,
    updated_at = now()
  where excluded.event_time >= public.pp_purchases.event_time;
end;
$$;
revoke all on function public.pp_record_purchase(text, text, uuid, text, text, bigint) from public, anon, authenticated;
grant execute on function public.pp_record_purchase(text, text, uuid, text, text, bigint) to service_role;

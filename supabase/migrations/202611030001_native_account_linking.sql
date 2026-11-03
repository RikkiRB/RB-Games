-- Apple original transaction identifiers are immutable and account-bound by
-- pp_record_purchase, just like Play purchase-token hashes. Clients have no
-- direct access to the table. Existing Stripe and Google rows are unchanged.
alter table public.pp_purchases drop constraint if exists pp_purchases_provider_check;
alter table public.pp_purchases add constraint pp_purchases_provider_check
  check (provider in ('stripe', 'google_play', 'apple_appstore'));

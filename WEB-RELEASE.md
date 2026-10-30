# PERIGEE PANIC web release

The existing RB Games GitHub Pages website now includes `play/`: the exported
PERIGEE PANIC 1.0.18 game, Home Screen installation, an optional offline download,
and a browser adapter for the existing `full_content_upgrade` cosmetic pack.
The original GDevelop project and Android billing events have not been edited.

## Current release state

- Free browser play is functional without an account.
- The page and game work under `/RB-Games/play/` as well as `/play/`.
- Offline files download only after the player chooses to save them. The current
  release is about 113 MB. Browser storage can be evicted; it is not permanent.
- Leaderboards and buying/restoring require internet access.
- **Accounts and browser payments are not activated.** `play/config.js` is empty
  intentionally. The page does not offer a fake checkout or unlock for a payment
  return URL. No live charge has been tested.
- The Supabase backend and Stripe integration are supplied and tested with
  simulated providers. They must be deployed and connected to real accounts.
- Existing Google Play purchases need the Android linking helper below in a
  new Android release before players can link them. Signing into Google in a
  browser is insufficient.

## Activate accounts and test payments

Use an RB Games-owned Supabase project and Stripe account. Account creation,
business verification and accepting provider terms are owner actions.

1. Apply `supabase/migrations/202610300001_perigee_purchases.sql` to the Supabase
   database. The table has RLS enabled, no client write/read permissions, and an
   atomic receipt-to-account binding that cannot be reassigned by a player.
2. Enable email authentication. Set the Magic Link/OTP email template to include
   `{{ .Token }}` so players receive the code used by this UI. Configure a verified
   sender/SMTP for production; the default development email delivery is limited.
3. Create a **one-time EUR 2.99** Stripe price for the cosmetic Full Content
   Upgrade. Start in test mode. The backend rejects any different price, product,
   quantity, payment status or live/test mode. This pack has no gameplay effects.
4. Deploy the `perigee-api` Edge Function. `supabase/config.toml` disables the
   platform's gateway JWT check because Stripe cannot supply a Supabase JWT.
   Every account route instead verifies the Bearer token with `/auth/v1/user`;
   the webhook requires a valid Stripe signature over the raw request body.
5. Configure these **server-side secrets/settings**, never website files:

   | Name | Value |
   | --- | --- |
   | `SUPABASE_URL` | Your project's HTTPS URL; normally already available |
   | `SUPABASE_ANON_KEY` | Your project's public anon key |
   | `SUPABASE_SERVICE_ROLE_KEY` | Server-only service role key; normally supplied by Supabase |
   | `WEB_GAME_URL` | Exact deployed URL ending in `/play/` |
   | `STRIPE_SECRET_KEY` | Test secret first; live secret after verification |
   | `STRIPE_PRICE_ID` | The EUR 2.99 one-time price in the same mode |
   | `STRIPE_WEBHOOK_SECRET` | Signing secret for this endpoint |
   | `STRIPE_API_VERSION` | Optional API version matching your tested Stripe endpoint |
   | `PAYMENTS_LIVE` | `false` for tests; `true` for production |
   | `COMMERCE_ENABLED` | `false` during setup; `true` after configuration is ready |
   | `LICENSE_PRIVATE_JWK` | Private ES256 JWK for optional 72-hour offline licences |
   | `GOOGLE_SERVICE_ACCOUNT_JSON` | Optional: server-only Play Developer API service account |
   | `ALLOW_LEGACY_PLAY_LINKING` | `true` only to allow first-claim binding of existing Play receipts |
   | `ALLOW_TEST_PURCHASES` | `true` in an isolated test backend only; leave off in production |

6. Add a Stripe webhook endpoint:
   `https://YOUR_PROJECT.supabase.co/functions/v1/perigee-api/stripe-webhook`.
   Subscribe to `checkout.session.completed`, `checkout.session.async_payment_succeeded`,
   `charge.refunded`, `charge.dispute.created`, `charge.dispute.closed`.
   Full refunds revoke access. Partial refunds preserve it. Disputes suspend
   access pending support review. Duplicate and out-of-order events are safe.
7. Put only the public Supabase URL, public anon key, matching function URL and
   optional ES256 **public** JWK into `play/config.js`. The CSP intentionally
   permits only your own files and Supabase HTTPS APIs. Run `npm run build:web`
   after changing public configuration so the offline cache version changes.
8. In private setup, run `node scripts/generate-license-key.mjs` if offline paid
   cosmetics are needed. Store only its private JWK as a backend secret; put its
   public JWK in `play/config.js`. Without a signing key, online purchases work
   but paid ownership cannot be newly restored while offline. Signing out removes
   the local licence. Refunds are picked up online; an already-issued offline
   licence can remain valid for up to 72 hours.
9. Test the real sign-in email, test payment, cancelled checkout, delayed payment,
   restore on another device, duplicate webhook, refund, offline launch, and
   sign-out on an actual iPhone. Then connect the equivalent live Stripe settings
   and retest the complete flow. The automated tests do not replace this step.

GitHub Pages hosts the public frontend only. It cannot keep payment secrets or
execute this backend. The function and database run in Supabase.

## Link existing Android purchases

`integrations/android-purchase-link.js` exposes a helper that reads the Google
Play receipt from the existing Cordova purchase plugin and sends its purchase
token to the authenticated backend. It does not replace the Play purchase flow.

1. Include the helper as a local JavaScript source file in the GDevelop project
   (or paste its contents into a once-only JavaScript event). Set its public
   config to the same Supabase URL/key/function used by the website.
2. Add a **Link purchase to web account** button in the Add-ons scene. Its action
   calls `RBPlayLink.open()`. The player signs in with their email code, restores
   the Play receipt and links it. Use the same email account in the web version.
3. Configure a Play Developer API service account with access to this app and
   store its JSON only in the backend's secret settings. The backend fixes the
   Android package to `com.rbgames.perigeepanic` and product to
   `full_content_upgrade`; neither is accepted from the browser.
4. Existing receipts without an obfuscated game account can be linked once when
   `ALLOW_LEGACY_PLAY_LINKING=true`. The purchase token is proof and is obtained
   from the native store. Do not ask players to paste tokens into a website,
   publish tokens, or log them. One receipt cannot be assigned to two accounts.
5. Test on a Play testing track before releasing the Android update. This helper
   has not been installed into the current native project or tested on a phone.

The delivered native helper supports **Play → web** ownership linking. A future
Android UI that consumes web purchases can call authenticated `/me` too; that
is a separate native integration and is not silently enabled here.

## Updating the game

Export HTML5 from GDevelop into `play/game/`, then run:

```sh
npm run build:web
npm test
```

The build adds the web bridge to the exported HTML and regenerates the offline
asset list/cache version. Do not edit the source GDevelop JSON to maintain this
site. Keep `.nojekyll` in the publishing root: several original game files begin
with underscores and would otherwise be omitted by GitHub Pages' Jekyll step.

Seven stale resource paths in the source export were supplied from the project's
original cosmetic PNGs. `FrankenShip.png` is a compatibility copy of
`assets/Franken-Ship.png`; `Bolt-Rocket.png` is a compatibility copy of
`assets/Franken-Rocket.png`. The other five copies preserve their original names.
These are export-only compatibility files. Gameplay sprite animations are
unchanged. Keep them when replacing the export, or restore the matching original
artwork before the resource-existence test.

## Verification and constraints

The automated tests exercise real cryptographic signature checks with simulated
Stripe/Google/Supabase responses. They cover tampering, pending and wrong-product
payments, duplicate delivery, refunds, account binding, outages, and offline
licence expiry. There are no production credentials or real player data in tests.

The game export is from the local project opened in GDevelop on 30 October 2026,
version `1.0.18`, last saved on 25 October. Later cloud-only changes, if any, are
not included. The supplied third-party assets retain their original game usage
rights; this repository does not grant standalone asset resale rights.

## Primary implementation references

- https://support.apple.com/en-gb/guide/iphone/iphea86e5236/ios
- https://supabase.com/docs/guides/auth/auth-email-passwordless
- https://supabase.com/docs/guides/functions/function-configuration
- https://docs.stripe.com/checkout/fulfillment
- https://docs.stripe.com/webhooks
- https://developers.google.com/android-publisher/api-ref/rest/v3/purchases.productsv2/getproductpurchasev2
- https://www.iaptic.com/documentation/cordova-plugin-api/classes/CdvPurchase.GooglePlay.Receipt.html

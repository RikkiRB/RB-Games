# Indie Web Game Commerce Kit: MVP Brief

**Status:** Working proposal, 30 October 2026  
**First integration:** Perigee Panic, then a GDevelop HTML5 extension

## Product goal

Give solo and small-team developers a straightforward way to sell digital content in browser games they host themselves. The service handles checkout, purchase verification, ownership, restore, and content-unlock signals. Developers add a small engine adapter instead of building this infrastructure from scratch.

The initial promise is **commerce for web games**. It does not promise a way around App Store or Google Play requirements for native apps.

## MVP scope

- GDevelop HTML5 exports, first; the game may be hosted on the creator's own site or another compatible web host.
- One-time purchases for game content such as cosmetics, levels, or expansion packs.
- Stripe-hosted checkout, with payment confirmation coming from a verified server webhook.
- Guest-first use: no email is required to play or to create a purchase identity.
- A GDevelop extension with simple actions and conditions for checking ownership, opening checkout, restoring ownership, and receiving purchase results.
- Test mode and a clear status/version indicator so developers can verify which integration build is running.

Subscriptions, a creator marketplace, pooled payouts, native app-store billing, and adapters for other engines are later work.

## Player flow

1. The player can start the game without an account. When they first open the shop or start a purchase, the game creates a guest identity.
2. The game requests the available products and ownership state from the service.
3. When the player buys an item, the service creates a Stripe Checkout session tied to that guest identity and product.
4. Stripe notifies the service. The service verifies the webhook and current payment state before granting ownership; the browser return URL never grants an item by itself.
5. The game asks the service for ownership and unlocks the item after the server confirms it.
6. The same browser can restore ownership from its guest session. Cross-device recovery can later use an optional linked account or a random, one-time recovery code.

Stripe may separately collect details needed for payment processing or a receipt. That is distinct from requiring an email sign-in to activate content.

## GDevelop integration surface

The extension should expose a small, stable set of event-sheet actions and conditions:

- Initialize commerce and wait until ready.
- Get a product's price and availability.
- Check whether a product is owned.
- Open checkout for a product.
- Restore purchases for the current identity.
- Redeem a recovery or promotional code.
- Read the latest result or error and react to purchase verification.

The extension should not contain Stripe secret keys or make the game responsible for verifying payment receipts. A JavaScript adapter can be reused by other web engines later, with engine-specific wrappers around it.

## Service architecture and security rules

- **Game adapter:** calls a stable, documented HTTPS API and reports verified ownership to the game UI.
- **Commerce API:** authenticates the guest or linked user, creates checkout sessions, returns product status, and handles recovery-code redemption.
- **Payment provider:** Stripe Checkout and webhooks for the first web adapter.
- **Entitlement store:** records game, product, user, payment provider, payment reference, and active or revoked status.
- **Optional offline license:** signed by the server, bound to the user and game, and short-lived. It does not replace online payment verification.

Security rules:

- Verify signed user sessions on the server; allow guest identities deliberately and distinguish them from permanent accounts.
- Grant or revoke ownership only from verified server-side payment events and provider state.
- Keep provider secrets on the server. Never trust local storage, a checkout return URL, a client-supplied user ID, or a game event as proof of purchase.
- Generate codes with a cryptographically secure random source, store only a hash, make them product-scoped and single-use, and rate-limit redemption. Never derive codes from names, emails, birthdays, or other personal data.
- Add abuse controls for guest-account creation and recovery-code guessing.
- Keep web payments separate from native App Store and Google Play purchase adapters; each native adapter must follow its store's current rules.

## What Perigee Panic already contributes

Useful starting points in the current repository:

- play/app.js: browser account UI, checkout request, and ownership restore.
- play/game-bridge.js: communication between the web wrapper and the GDevelop game.
- supabase/functions/_shared/perigee-api.mjs: server-side Stripe checkout, webhook verification, purchase checks, and Google Play receipt verification.
- supabase/migrations/202610300001_perigee_purchases.sql: server-owned purchase records and atomic purchase binding.
- play/license.js: verification for short-lived signed offline licenses.

These pieces are a prototype, not a drop-in multi-game product. The current backend requires a verified email, the checkout sends a customer email, the product and Android package are hard-coded, the database restricts the product to one ID, and the price check is fixed at EUR 2.99. A generic service needs per-game and per-product configuration and guest-aware authorization. The existing Google Play verification should remain a separate native-store adapter.

## Build order

1. Stabilize Perigee's web release and confirm the active service-worker version before spending any more magic-link emails.
2. Refactor the current backend around games, products, and entitlements while preserving its verified-webhook ownership model.
3. Add a guest identity for web purchases and remove verified-email sign-in as a prerequisite. Decide and implement one recovery method before broad release.
4. Integrate the common browser adapter with a GDevelop extension and document test-mode setup.
5. Pilot with a few GDevelop creators. Measure setup time, successful test purchases, restore success, and support questions before adding engines or subscriptions.

## Product boundary and open decisions

- A self-hosted browser game can sell through its website without an Apple or Google developer account. Native store distribution and in-app digital sales remain subject to platform enrollment and billing rules.
- Decide how each creator connects their payment account before offering this as a hosted service. Do not route every creator's sales through the RB Games account.
- Decide whether recovery codes are needed in the first release or whether guest-on-device plus optional account linking is enough.
- Validate demand with web-game developers before investing in a broad multi-engine platform.

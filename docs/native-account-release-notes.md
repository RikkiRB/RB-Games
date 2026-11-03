# PERIGEE PANIC account linking — release record

Updated 3 November 2026. This record accompanies the GDevelop account-linking update and must be checked before the next Google Play release. Implementation and deployment status must be confirmed from the final checks below; this document is not evidence of a completed device test.

## Product behaviour

- The core game stays free, with no added advertising and no compulsory account.
- Optional RB Games email-code sign-in restores the same `full_content_upgrade` entitlement across supported platforms. Native purchases continue through Apple In-App Purchase / Google Play Billing. The native dialog contains no Stripe checkout or external-buy link.
- The account dialog supports sign-in, restore of a previously linked pack, linking an on-device store receipt, sign-out and permanent account deletion after typed confirmation.
- Gold, cosmic diamonds, unlocked trails, equipped trail and objective progress stay in the existing local save. No earned wallet is uploaded or silently reassigned to an account. There is no cloud progression sync in this release.
- Store receipt verification is performed by the backend. The game cannot grant valid account ownership with a local flag, currency balance or checkout return URL.
- A purchase reference can belong to one RB Games account. The prepared security fix rejects Apple sandbox/TestFlight receipts on the production backend, including for native apps. TestFlight linking requires a separate test-mode backend.
- Google Play linking still requires an app-scoped Developer API service account configured on the backend. Until configured, its linking button is disabled; normal Play purchase/restore is retained.
- Apple verification for the existing Cordova StoreKit 1 plugin uses Apple's legacy server receipt endpoint. It is isolated for migration to App Store Server API / StoreKit 2. No Apple private credential is embedded in the app. An optional app-specific receipt shared secret may be stored server-side.

## Data inventory for policy and Data Safety updates

| Data | Where / purpose | Required for core play? |
| --- | --- | --- |
| Email address and verified RB Games user ID | Supabase authentication and optional account management | No |
| Access / refresh session tokens | App-local account session; Supabase validates requests | No |
| Product, provider, purchase reference, active/revoked status, payment environment and update time | Private backend purchase database; restoration and fraud/refund checks | No |
| Google purchase token or Apple application receipt | Private backend; server-to-store verification and later rechecks; never public account output | No |
| Gold, diamonds, earned trails and objective progress | Existing local app/browser save only | Local gameplay feature |
| Submitted leaderboard name and score | Existing GDevelop leaderboard service; behaviour unchanged | No |
| Network / service security logs | Hosting and service providers; verify actual retention and SDK disclosures before submission | Service-dependent |

No card number or Google/Apple password is requested by RB Games. Stripe handles web checkout; native stores handle native billing. Existing optional HeyCatch website analytics is not added to the native account dialog.

## Google Play Console work before the Android update

1. Update the published game privacy policy to describe optional email accounts, authentication/session storage, purchase verification, service providers, retention and deletion. Replace any old statement that the app collects no account information.
2. Review the Data Safety form against this exact build and all existing SDKs. Account email, user identifiers and purchase history now need assessment under account management / app functionality / fraud prevention. They are optional because free play needs no account. Do not automatically equate use of a service provider with advertising data sharing; apply Google's definitions to the actual processing.
3. Keep the in-app account deletion path discoverable: Hangar or Extras Pack → RB Games Account → Account settings → Delete my account permanently.
4. Publish a working external account-deletion resource and enter its URL in Play Console. It must identify PERIGEE PANIC / RB Games and let someone request or complete deletion without reinstalling the app. An email-only support paragraph should not be assumed sufficient. Verify the actual public page before submission.
5. Clarify account deletion in privacy/terms: it removes the RB Games account and linked purchase records, does not automatically refund an Apple/Google/Stripe purchase, and does not erase the independent local earned save. Payment providers may retain their own legally required records. A deleted web-purchase link may need support to recover; do not promise automatic recovery after deletion.
6. Describe the one-time Extras Pack, the supported account-linking platforms, one-account purchase binding, internet requirements for restore/linking, and what future premium levels include as they release. Do not imply currently Coming Soon levels are playable.
7. Check the purchase product remains a one-time non-consumable `full_content_upgrade`, priced by the native store. Earned trails and currencies must not imply purchase is required.
8. Add reviewer instructions for optional sign-in, the deletion path, native purchase/restore and account linking. Confirm a reviewer can test free gameplay without signing in.
9. Complete a Play testing-track run: purchase/restore, email code, link to account, restore on web, repeat claim, second-account rejection, refund/revocation, sign-out and deletion with a disposable test account. Use the correct isolated test environment; never let sandbox receipts grant production web ownership.

## iOS release checks

- The shop must register `ios-appstore` on iOS and `android-playstore` on Android. The old Android-only registration was corrected in this update.
- Optional account creation requires an in-app account-deletion path; included in the dialog.
- Preserve Apple IAP as the native purchase route. Account restore recognises content obtained elsewhere without directing players to external checkout.
- Test on a real TestFlight/App Store sandbox device: code sign-in, native IAP product loading, purchase/restore, Apple receipt availability, account link, sign-out and local progression preservation.
- Sandbox account ownership must stay out of both live web and live native entitlements. Use a separate test-mode backend for TestFlight linking; test a real production receipt separately when available.
- Do not mark this release ready solely because automated simulations pass. Actual exported native receipt delivery and store permission/configuration must be verified.

## Deployment and validation log

- Native UI and account service added to the working GDevelop project and saved.
- Backend Apple receipt adapter, authenticated native restore, account deletion and provider migration deployed. A subsequent sandbox-isolation security fix is prepared locally and must be deployed before Apple linking is enabled.
- Automated payment and account tests: running during implementation; record the final result below before release.
- Google service-account activation: pending verification/configuration.
- Native store device tests: pending; must be performed on the exported build.
- Privacy/terms/Data Safety console changes: pending owner review and actual publication.

## Official references checked

- [Google Play account deletion](https://support.google.com/googleplay/android-developer/answer/13327111)
- [Google Play Data Safety](https://support.google.com/googleplay/android-developer/answer/10787469)
- [Google Play purchase security](https://developer.android.com/google/play/billing/security)
- [Apple App Review Guidelines: multiplatform purchases and account deletion](https://developer.apple.com/app-store/review/guidelines/)
- [Apple account deletion guidance](https://developer.apple.com/help/app-review/guideline-reference/5-1-1-account-deletion/)
- [Apple legacy receipt validation and migration guidance](https://developer.apple.com/documentation/storekit/validating-receipts-with-the-app-store)

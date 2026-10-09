# RB Games portfolio

A complete static game portfolio for GitHub Pages, updated with the approved blue-and-red RB Games identity. No build step, account integrations, analytics or external font dependencies.

## Publish on your GitHub site

1. Upload the **contents** of this folder to your site's repository, including the HTML pages, styles and scripts, `.nojekyll`, `LICENSE`, `assets`, and `images`. Keep `index.html` at the publishing root. You can omit this README from the upload.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**. Select your publishing branch and **/(root)**, then save.
4. Once GitHub finishes publishing, open the site URL shown on that page.

If your existing site publishes from `/docs`, put the files there and keep that existing Pages setting. If it already uses a custom GitHub Actions workflow, keep that workflow and use these files as its static content.

Keep the existing privacy pages, verification file and `images` directory in the publishing root. This package includes them at their original paths.

All asset links are relative, so this works at both `username.github.io` and `username.github.io/repository-name/`.

Official publishing guidance: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Logo and colours

The header, footer, developer badge and favicon use true vector SVG assets. The logo contains outlined lettering, so it has no font dependency.

- `assets/rb-games-logo.svg`: full stacked logo and tagline, transparent background.
- `assets/rb-games-horizontal.svg`: compact header wordmark.
- `assets/rb-games-mark.svg`: standalone badge.

Brand palette: blue `#278AF4`, red `#FF4138`, cream `#F2F3E9` and charcoal `#101216`. The cream outline and lettering are intended for dark backgrounds.

## Preserved existing site pages

The package was merged with the current public source from `RikkiRB/RB-Games`, commit `161dac17891007fb9eded3e795f5f6a33e506972`.

These original files are preserved byte-for-byte:

- `perigee-panic-support-privacy.html`: Perigee Panic support and privacy page.
- `perigee-panic-privacy.html`: Perigee Panic privacy policy.
- `privacy.html`: Sig Folio’s Puzzle Adventure privacy policy.
- `googlebce5ddb9307e149e.html`: Google site verification.
- `LICENSE`: existing repository licence.
- `images/`: all four existing image assets at their original paths.

The homepage footer links to all three policy/support pages with game-specific labels. Existing homepage anchors are retained: `#about` leads to the developer section, `#projects` to the games, `#blog` to the in-development prototype, and `#hero` to the hero. The old Blog section contained no published posts.

The two Perigee policy pages describe different data handling. They have been preserved as published, without rewriting or combining their statements.

## Set your investor contact email

The existing site publishes `dev.outpost503@passinbox.com` as the RB Games support/contact address; this is now set in `site-config.js`. Edit that file to change it to another public business email. The main contact button becomes **Email Rikki** and opens a draft enquiry. No email is sent by the website. Until an email is supplied, the button opens the verified RB Games X profile.

## Included work

- **Perigee Panic** — released browser game, linked to its itch.io page.
- **Perigee Panic 3D** — in-development Quest/WebXR prototype with a local screenshot gallery.
- **After The Last Train** — playable short StoryDev demo.
- **ENVY's 1st Puzzle** — released browser puzzle.
- **Griddle Me This!** — coming-soon project, linked to its project page.
- **StoryDev** — linked in the developer section as the framework behind the visual novel demo.

Public project status was checked on 9 October 2026. No player, revenue, funding, award, endorsement or market-validation claims have been invented. Other local prototypes are not included without confirmation of ownership and the desired public presentation.

## Editing

- `index.html`: names, descriptions, game links and page sections.
- `styles.css`: colours, typography, layout and animation.
- `site-config.js`: contact email and enquiry subject.
- `script.js`: mobile menu and accessible screenshot galleries.
- `assets/`: authentic supplied sprites, gameplay captures and screenshots from RB Games' official project pages.

Keep applicable artwork and third-party licences and credits in the games themselves. Inclusion of a screenshot does not claim that every element depicted was independently created by RB Games.

## Preview

Open `index.html` directly, or serve this directory with any static web server. All displayed content and game links work without JavaScript. JavaScript enables the mobile menu, galleries and optional email button. The page respects reduced-motion settings.

# DiscussionBridge Demo Chooser Handoff

Updated: 2026-08-29

## Authority and current boundary

Phil approved the expanded demo estate and directed Bridge Boss to capture it
and begin with the demo/navigation structure. This is implementation work, not
code review. Production publication remains subject to the repository's normal
reviewed deployment gate.

## Controlling product decisions

- `demo.discussionbridge.dev` is the master chooser.
- Platform collection choosers use paths on that site; actual installations
  use independent origins/subdomains.
- Astro + Starlight remains the flagship product experience and must lead the
  hierarchy rather than appear as a secondary showcase.
- The six initial adapter proofs are Astro, WordPress, Ghost, Statamic Flat,
  Statamic DB, and publishing Discourse.
- `bridge.demo.discussionbridge.dev`, titled **The Bridge**, is the planned
  controlled, resettable hands-on Discourse publishing demo.
- WordPress begins with stock/core presentation only. Ghost and Statamic may
  gain first-party themed editions after their stock workflows are established.
- `stockstarlight.demo.discussionbridge.dev` remains a comparison control, not
  a Bridge-enabled demo.
- Build/testing remains on `sandbox-forum.discussionbridge.dev`; accepted
  behavior is later mirrored to the genuine two-container pre-production forum
  at `dev-forum.discussionbridge.dev`. The community forum is not a test estate.

## Implemented first slice

- Replaced the one-page Astro-only list with a flagship-led master chooser.
- Added shared navigation and collection routes for Astro, WordPress, Ghost,
  Statamic, and The Bridge.
- Centralized all origins, states, descriptions, and external links in
  `src/data/demo-estate.ts`.
- Preserved all three existing Astro destinations.
- Marked undeployed origins as planned and rendered no live CTA for them.
- Added responsive shared layout and reusable demo cards.
- Added a 1200×630 social-preview image and page-wide Open Graph/X metadata.
  `public/og.png` has SHA-256
  `4e76577031634b3e1ec19083721c87eee3c303819bc8461c05087a352b59405f`.

## Public build-map refinement

Phil authorized publishing the chooser as a truthful view of what is actually
being built. Before deployment, the status model was refined so that it no
longer places every unfinished destination into one generic `Planned` bucket:

- `Live refresh` identifies an existing demonstration that is being rebound to
  the current shared product contract;
- `Building for Alpha` identifies the six-profile Alpha target;
- `Control` identifies an intentionally unmodified comparison installation;
- `Future edition` identifies themed work that follows the stock workflows.

The apex now states the Alpha product boundary explicitly: one native Discourse
plugin connected to six real publishing profiles—Astro, WordPress, Ghost,
Statamic Flat, Statamic DB, and publishing Discourse. Planned and future origins
remain non-clickable until their installations are actually ready.

This public build map does not expand the Alpha target to the future platform
and service candidates recorded in the product checkpoint.

The refinement is committed as
`e98b17162092ab1a04f9ea4fb3425d2e46532bcd` (`Publish the six-profile Alpha
build map`) and pushed to `origin/main`. The exact validated static build was
published to `demo.discussionbridge.dev` as Cloudflare Worker version
`9551262e-26f7-4cc8-8c00-884d0e769d04`. Post-deployment requests to the apex
and all five collection routes returned HTTPS 200; the apex contained the exact
six-profile Alpha statement and unfinished profile pages remained explicitly
marked `Building for Alpha` without live destination links.

The initial implementation is committed as
`1d323e735724e07de978e50fb4053199266e51b9` (`Build DiscussionBridge demo
estate navigation`), tree
`1ee8aecf5031342975afe1e2ff000c79b57dde0b`. Later publication history is
recorded above and in Git.

## Live stock WordPress demo

Phil authorized Bridge Boss to proceed without waiting between implementation
gates. The first non-Astro public demo is now live at
`https://wordpress.demo.discussionbridge.dev/` using WordPress core's Twenty
Twenty-Five presentation.

- Cloudflare DNS is an explicit DNS-only CNAME from
  `wordpress.demo.discussionbridge.dev` to the retained infrastructure alias
  `wordpress-sandbox.codeworkslabs.net`.
- The origin certificate now covers both names. Nginx serves the new demo name
  canonically and retains the old name as a rollback/redirect alias.
- WordPress `home` and `siteurl` are the new demo origin. The public title is
  **DiscussionBridge WordPress Demo** with the tagline **Stock WordPress,
  connected to Discourse**.
- A fresh receiver connection named **WordPress Demo** uses exact origin
  `https://wordpress.demo.discussionbridge.dev`, lane `wordpress-demo`, both
  directions, and adapter `wordpress-discussionbridge` version
  `0.1.0-alpha.2`. Its protected one-time secret remains only in the server
  credential boundary.
- The To-Discourse article is
  `/wordpress-publishing-connected-to-discourse/`, Bridge Record
  `64ca8bc0-7aea-4e18-9968-c9e665c94731`, topic 22. A manual retry returned
  `resolved` with the same record and topic.
- The From-Discourse page is `/from-the-bridge/`, Bridge Record
  `ad4de3ff-f10e-4b6f-bac7-c30e313e9715`, topic 23, authored by the dedicated
  `bridge-demo` forum identity. It renders bounded sanitized cooked content and
  the canonical forum link server-side.
- WP Discourse 2.6.4 remains installed but inert: its URL/API key are blank,
  auto/force publication are off, and the live demo article has none of its
  collision-driving metadata.
- Public checks returned HTTPS 200 for the home, article, and From-Discourse
  page. Public HTML contains neither the connection secret nor connection ID.
- The pre-promotion rollback package is
  `/var/backups/discussionbridge/wordpress-sandbox-pre-public-demo-20260829T201500Z`;
  its root-only database, `wp-content`, config, Nginx, PHP-FPM, credential, and
  manifest members passed archive and SHA-256 verification before mutation.

The chooser now labels WordPress `Live`, links the collection card to the
actual demo, and links its Discussion action to topic 22. Ghost, both Statamic
profiles, and The Bridge remain non-clickable Alpha build targets.

The live-state chooser update is committed as
`ce4529a` (`Publish live WordPress demo`), pushed to `origin/main`, and deployed
as Cloudflare Worker version `6e45d9e5-972b-4a5f-a0ab-13e48bf4ae29`.
Post-deployment requests returned HTTPS 200 for the chooser apex, WordPress
collection, WordPress demo home, both demo-direction pages, and both mapped
Discourse topic JSON endpoints.

## Verification

- `npm run build` builds six static pages.
- Local responses for `/`, `/astro/`, `/wordpress/`, `/ghost/`, `/statamic/`,
  and `/discourse/` are all HTTP 200.
- `npm run deploy:dry-run` reads the generated Cloudflare asset set and exits
  successfully without publication.
- All six generated pages use the same closed internal route set, and every
  referenced live Astro/product/forum destination returned HTTPS 200 during
  the implementation check.
- `git diff --check` reports no whitespace defect; the repository emits only
  its Windows LF-to-CRLF notice.

## Next implementation boundary

Rework DiscussionBridge for Astro + Starlight as one coherent standalone
product with its included optional Astro adapter subsystem. Preserve its
standard-Discourse simple/full paths, add the truthful Bridge-enhanced path,
and define adoption of existing topic associations without duplicate topics or
a second Astro package. Keep the current live demonstrations intact until
replacement behavior is built and verified.

## Product-family hierarchy refresh

Phil and Bridge Boss corrected the public hierarchy after the original Alpha
profiles became functional. DiscussionBridge is the product family; The Bridge
is the Discourse-powered flagship; DiscussionBridge for Astro + Starlight is
the inaugural standalone platform product and becomes Bridge-enhanced by
choice.

The chooser now leads with The Bridge, identifies Astro + Starlight as the
inaugural product, and lists seven Alpha profiles in the approved order:
Astro, Ghost, Hugo, Statamic DB, Statamic Flat, WordPress, and The Bridge —
Discourse as Publisher. Hugo has its own `/hugo/` collection page and is
truthfully marked late Alpha with no live destination link. The chooser also
links the concise product roadmap and invites concrete user workflows to shape
future Network, Migration, Identity, advanced-profile and adapter work.

Local verification passes: seven static routes build, the Cloudflare dry run
reads 17 generated files, and desktop visual inspection confirms the flagship,
Alpha list, collection ordering, roadmap invitation and inaugural-product card.
The chooser change is committed as
`b8fc878` (`Make The Bridge the demo flagship`), pushed to `origin/main`, and
deployed to `demo.discussionbridge.dev` as Cloudflare Worker version
`75afe3b8-eca2-43d9-ab29-db7854003365`.

Public replay proves: The Bridge is the flagship; the seven profiles appear in
the approved order; `/hugo/` returns HTTPS 200; Hugo exposes no `Open demo`
action and explicitly says no live destination is claimed; and the inaugural
Astro + Starlight product remains linked and live. The later checkpoint-only
commit does not change deployed page output.

### Queued homepage copy

The homepage introduction now avoids implying a required visitor sequence. It
invites visitors to explore The Bridge—our Discourse-powered flagship—alongside
the inaugural DiscussionBridge for Astro + Starlight and every live platform
profile. This wording is committed for the next demo publication and is not a
standalone deployment request.

## SSG collection and Statamic navigation — 2026-08-31

The shared chooser navigation now includes **SSG** between WordPress and The
Bridge. It is intentionally a cross-platform capability collection rather than
a product named Statamic SSG. `/ssg/` groups the live Astro + Starlight static
foundation with planned Hugo and Statamic SSG profiles. Only Astro is linked;
the undeployed Hugo and Statamic destinations remain explicitly planned.

The shared Statamic demo layout independently supplies one eight-item
**Statamic Demos** menu on all eight live Flat/DB pages. It links Simple, Full,
Publishing through The Bridge, and From The Bridge for Flat, followed by the same
four destinations for DB. The links are absolute so either profile can expose
the complete collection.

The chooser change is committed and pushed as `5eff2d5` (`Add cross-platform
SSG demo collection`) and deployed to `demo.discussionbridge.dev` as Cloudflare
Worker version `badf9ca3-0aa8-4027-a0f3-0efaa6fc3b31`. The production replay
returned HTTPS 200 for all eight chooser routes and confirmed the shared
WordPress → SSG → The Bridge navigation order. The SSG page exposes only the
live Astro link; Hugo and Statamic remain visibly planned.

The live Flat and DB home templates now replace the stock “Welcome to your new
Statamic site” heading with the actual profile title under the label
**DiscussionBridge for Statamic**. The identical installed layout and home
template SHA-256 identities are respectively
`a860bfb63ad60e883feb326afe1b70cf8693435e03d9b5e8119006a6d659bb13`
and `0d1fef8fce5ab7e3e7dd60156e52d1d3698809ef7d180199992203c2ca0161cf`.
The focused rollback package is
`/var/backups/discussionbridge/statamic-presentation-pre-eight-menu-20260831`;
its `SHA256SUMS` file hashes to
`000c30c587fda2e4ccad8bd7feb032dfcee38431665d9fe46da967ae3335aa8a`.
The menu uses the established **Publishing through The Bridge** wording on
both profiles. Its focused pre-label-change rollback package is
`/var/backups/discussionbridge/statamic-layout-pre-through-label-20260831`;
that package's `SHA256SUMS` identity is
`67a318c4bed4f592f1d8028d4158ffa635b5adc682cd17182a107a6d0ba359e4`.

## Statamic SSG live-state promotion — 2026-08-31

The later Statamic SSG implementation supersedes only the current-state claims
above that described that profile as planned. The dated planning and deployment
history remains intact. Current chooser source commit
`abd9bf67d3ecffee7282de1be6cb8b9b1d60b8fc`, tree
`552533182f83f2dd844a0852ffc52940da368f38`, is deployed as Cloudflare Worker
version `1d7a9c74-de1e-4983-b3e9-4de115edb7ea`. The public apex, `/ssg/`, and
`/statamic/` now identify Statamic SSG as live and link
`https://statamic-ssg.demo.discussionbridge.dev/`. The current navigation labels
are `04 Statamic DB | Statamic Flat` and `05 Statamic SSG`; Hugo remains planned
and unlinked.

The Statamic SSG Worker's uploaded asset bundle is immutable generated output.
Cloudflare Web Analytics currently adds one separately managed beacon script to
live HTTP responses. Removing exactly that edge-injected script yields bytes
identical to the committed generated HTML; the beacon is not part of the source
or uploaded asset bundle.

## Ghost and WordPress four-mode collections — 2026-08-31

The Ghost and WordPress collection pages now expose four live destinations
each: Simple Comments, Full Comments, Publishing through The Bridge, and From
The Bridge. Their discussion actions point to exact live Bridge topics rather
than the former sandbox forum. Ghost Simple and Full use topics 47 and 48;
WordPress Simple and Full use topics 45 and 46. Existing To/From proofs remain
topics 27/25 for Ghost and 28/30 for WordPress.

Chooser commit `c508d55e4986997a1f27b397a9e1a4a7ffa310c4`, tree
`b96964bd8d7e218fa1bcf26e6364c2790b2a2560`, is pushed to `origin/main` and
deployed as Cloudflare Worker version
`847278c4-8b8a-4299-8053-a6fdf8e00b8c`. The build produced all eight chooser
routes and the Wrangler dry run passed before publication. This repository has
no test script.

## Hugo live-state promotion — 2026-08-31

The Hugo profile is now live and supersedes only the earlier current-state
claims that labeled it planned. Its stock Hugo/Ananke destination is
`https://hugo.demo.discussionbridge.dev/` and exposes generated Simple
comments, plugin-free Full comments, publishing through The Bridge, and From
The Bridge. The SSG collection now links Astro + Starlight, Hugo, and Statamic
SSG as three independently live generated-site profiles.

Chooser source commit `c08b261d31a0cd9549da727f0169ad2e160318cd`, tree
`e6d5dfe4069a5cce5f9d73dfe786e6864adb9a9b`, is pushed to `origin/main` and
deployed as Cloudflare Worker version
`dc89d911-2f31-4972-bcb4-d8eaef4bc6f7`. The production build generated all
eight chooser routes. The Hugo publishing action points to Bridge topic 50.

## Publisher matrix and flagship action labels — 2026-09-01

The `/discourse/` collection now presents three universal shared discussions
across seven live profiles plus the first heterogeneous mixed-mode examples.
Chooser commit `9e723adfbe99d2678cce278d697228a8f56b7b59` is deployed as
Cloudflare Worker version `c8e9dedd-41bc-4923-8b81-551730fd9164`.

The flagship card previously used the generic actions **Open demo** and
**Discussion**, which did not distinguish the live forum home from its
explanatory topic. Commit `125477c` changes only that card to **Enter The
Bridge** and **About The Bridge**, and replaces the stale `stock Discourse`
description with `reference DiscussionBridge publishing environment`.
Cloudflare Worker version `403fd1e9-9d0d-4943-8d21-6c57f728a36d` is live.
Public replay returned HTTPS 200 with both new labels and neither stale phrase.

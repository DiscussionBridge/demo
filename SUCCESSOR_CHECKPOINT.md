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

1. Freeze and commit the chooser/navigation slice.
2. Correct the shared adapter contract so To-Discourse flows carry meaningful
   source content and each originating page presents its mapped discussion.
3. Create the stock public demo instances one profile at a time, beginning with
   the first complete content-and-presentation workflow rather than copying the
   current transport-only test fixtures.

No DNS, Cloudflare production deployment, platform installation, forum change,
or provider mutation has occurred in this slice.

# DiscussionBridge Demo Chooser

Entity ID: `DB-SITE-003`

Classification: public product site

Lifecycle: live

Owner/operator: WebSynergetics / Bridge Boss

Authoritative TODO: product-level work is tracked from
`C:\CodeProjects\Products\DiscussionBridge\TODO.md`

Live service: `https://demo.discussionbridge.dev`

Last reviewed: 2026-08-29

This repository is the canonical source for the DiscussionBridge demo chooser
and its platform-collection navigation. It does not own the independent demo
implementations.

The public hierarchy is:

- `/` — master chooser with The Bridge as flagship and the seven-profile Alpha
  path;
- `/astro/` — inaugural Astro + Starlight product, Plain Astro reference, and
  stock Starlight control;
- `/ghost/` — stock Ghost and future themed edition;
- `/hugo/` — planned late-Alpha profile with no false live destination;
- `/statamic/` — independent DB and Flat profiles plus future themed editions;
- `/wordpress/` — stock WordPress demonstration collection;
- `/ssg/` — static-generation profiles spanning Astro, Hugo, and Statamic;
- `/discourse/` — The Bridge, the flagship live stock Discourse publishing
  forum with controlled operation.

Existing Astro destinations plus the stock WordPress, Ghost, Statamic Flat,
Statamic DB, and The Bridge demos are live. Hugo is included in Alpha but is
explicitly labeled late Alpha and remains unlinked until deployed.
The SSG collection links the live Astro + Starlight foundation while labeling
Hugo and Statamic SSG as planned without presenting either as a live destination.
Undeployed platform origins are shown as planned and are not linked as though
they already exist. The agreed
hands-on forum hostname is `bridge.demo.discussionbridge.dev`; its short public
name is **The Bridge**.

The chooser's canonical estate inventory is maintained in
`src/data/demo-estate.ts`. Update that inventory before duplicating names or
status copy inside page templates.

## Repository And Deployment

- GitHub: `DiscussionBridge/demo`
- Local root:
  `C:\CodeProjects\Sites\DiscussionBridge\discussionbridge.dev\demo.discussionbridge.dev\site`
- Cloudflare Worker: `demo-discussionbridge-dev`
- Deployment authority: `wrangler.jsonc`

## Commands

```powershell
npm ci
npm run build
npm run deploy:dry-run
```

Production deployment requires explicit product authority; repository
membership or a successful local build does not authorize publication.

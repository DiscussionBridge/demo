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

- `/` — master chooser with Astro + Starlight as the flagship experience;
- `/astro/` — flagship, Plain Astro reference, and stock Starlight control;
- `/wordpress/` — stock WordPress demonstration collection;
- `/ghost/` — stock Ghost and future themed edition;
- `/statamic/` — independent Flat and DB profiles plus future themed editions;
- `/discourse/` — The Bridge, the planned controlled hands-on publishing forum.

Existing Astro destinations plus the stock WordPress and Ghost demos are live.
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

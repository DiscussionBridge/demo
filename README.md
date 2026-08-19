# DiscussionBridge Demo Chooser

Entity ID: `DB-SITE-003`

Classification: public product site

Lifecycle: live

Owner/operator: WebSynergetics / Bridge Boss

Authoritative TODO: product-level work is tracked from
`C:\CodeProjects\Products\DiscussionBridge\TODO.md`

Live service: `https://demo.discussionbridge.dev`

Last reviewed: 2026-08-05

This repository is the canonical source for the DiscussionBridge demo chooser.
It links visitors to the independent Astro, Astro + Starlight, and stock
Starlight demonstration sites. It does not own those demo implementations.

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

Production deployment requires the normal reviewed deployment gate; repository
membership or a successful local build does not authorize publication.

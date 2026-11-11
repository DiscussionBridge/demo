# DiscussionBridge Demo Chooser

The [public demo chooser](https://demo.discussionbridge.dev/) links to
Discourse and the platform demonstration sites. Each demonstration has its
own source and deployment. The [sandbox chooser](https://sandbox.discussionbridge.dev/)
links to the environments used for installation and configuration testing.

The site organizes its navigation around:

- [The Bridge](https://demo.discussionbridge.dev/discourse/) for Discourse publishing.
- Astro, Astro with Starlight, and the stock Starlight control.
- Ghost, Hugo, Statamic Flat/DB/SSG, and WordPress.
- Static generation examples for Astro, Hugo, and Statamic.

The chooser reads its platform and status data from
`src/data/demo-estate.ts`. For V4 Alpha component source tags, see the
[DiscussionBridge organization](https://github.com/DiscussionBridge).

## Repository And Deployment

- GitHub: `DiscussionBridge/demo`
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

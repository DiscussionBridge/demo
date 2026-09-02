export type DemoState =
  | "Flagship"
  | "Inaugural product"
  | "Live"
  | "Live refresh"
  | "Control"
  | "Building for Alpha"
  | "Late Alpha"
  | "Planned";

export type Demo = {
  title: string;
  description: string;
  origin: string;
  state: DemoState;
  href?: string;
  hrefLabel?: string;
  discussionHref?: string;
  discussionLabel?: string;
  note?: string;
};

export const flagship: Demo = {
  title: "The Bridge",
  description:
    "DiscussionBridge’s Discourse-powered flagship: the live reference forum where connected platforms publish, receive, and share authoritative discussions through the same plugin available to operators.",
  origin: "bridge.demo.discussionbridge.dev",
  state: "Flagship",
  href: "https://bridge.demo.discussionbridge.dev/",
  hrefLabel: "Enter The Bridge",
  note: "Live today as the flagship DiscussionBridge environment. Controlled demo-user access and coordinated resets remain planned.",
};

export const inaugural: Demo = {
  title: "DiscussionBridge for Astro + Starlight",
  description:
    "The inaugural platform product: a complete Astro + Starlight experience that works with standard Discourse and becomes Bridge-enhanced by choice.",
  origin: "astrostarlight.demo.discussionbridge.dev",
  state: "Inaugural product",
  href: "https://astrostarlight.demo.discussionbridge.dev/",
  discussionHref: "https://forum.discussionbridge.dev/c/discussionbridge-for-astro/5",
  note: "Live today; its next product pass will unify the standalone and plugin-enhanced paths without replacing existing discussions.",
};

export const astroDemos: Demo[] = [
  inaugural,
  {
    title: "Plain Astro",
    description:
      "A core Astro reference implementation that keeps framework behavior visible and the Bridge integration easy to inspect.",
    origin: "astro.demo.discussionbridge.dev",
    state: "Live refresh",
    href: "https://astro.demo.discussionbridge.dev/",
    discussionHref: "https://forum.discussionbridge.dev/t/core-astro-discussion-bridge-demo/34",
    note: "Live today; it will be rebound to the shared Alpha contract.",
  },
  {
    title: "Stock Starlight Control",
    description:
      "An unmodified Starlight baseline for upgrade checks and direct comparison with the inaugural product.",
    origin: "stockstarlight.demo.discussionbridge.dev",
    state: "Control",
    href: "https://stockstarlight.demo.discussionbridge.dev/",
    note: "A comparison control, not a Bridge-enabled publishing demo.",
  },
  {
    title: "Astro Themed Edition",
    description:
      "A full-featured native Astro theme that can launch as a polished placeholder, graduate through private preview, and become the finished public site without a rebuild from another theme.",
    origin: "Naming and destination pending",
    state: "Planned",
    note: "Useful as an Astro theme on its own, with first-class DiscussionBridge publishing and discussion features available by choice.",
  },
];

export const wordpressDemos: Demo[] = [
  {
    title: "WordPress Simple Comments",
    description:
      "Lightweight native reply cards, bounded disclosure, and no embedded Discourse application.",
    origin: "wordpress.demo.discussionbridge.dev",
    state: "Live",
    href: "https://wordpress.demo.discussionbridge.dev/wordpress-simple-comments/",
    discussionHref: "https://bridge.demo.discussionbridge.dev/t/wordpress-simple-comments/45",
    note: "Five replies appear initially, with bounded Show more behavior through the native WordPress plugin.",
  },
  {
    title: "WordPress Full Comments",
    description: "The ordinary Discourse comments embed with its natural measured height.",
    origin: "wordpress.demo.discussionbridge.dev",
    state: "Live",
    href: "https://wordpress.demo.discussionbridge.dev/wordpress-full-comments/",
    discussionHref: "https://bridge.demo.discussionbridge.dev/t/wordpress-full-comments/46",
    note: "The standard Core presentation remains distinct from the bounded fullInteractive application frame.",
  },
  {
    title: "Publishing through The Bridge",
    description: "A WordPress-authored article delivered idempotently to one authoritative topic.",
    origin: "wordpress.demo.discussionbridge.dev",
    state: "Live",
    href: "https://wordpress.demo.discussionbridge.dev/wordpress-publishing-through-the-bridge/",
    discussionHref: "https://bridge.demo.discussionbridge.dev/t/wordpress-publishing-through-the-bridge/28",
    note: "The native WordPress plugin owns opt-in, delivery state, retry, and mapped discussion presentation.",
  },
  {
    title: "From The Bridge",
    description: "Forum-authored content rendered safely in WordPress with its live discussion attached.",
    origin: "wordpress.demo.discussionbridge.dev",
    state: "Live",
    href: "https://wordpress.demo.discussionbridge.dev/from-the-bridge/",
    discussionHref: "https://bridge.demo.discussionbridge.dev/t/from-the-bridge-to-wordpress/30",
    note: "The source post renders once; Discourse retains replies, sessions, and moderation authority.",
  },
];

export const ghostDemos: Demo[] = [
  {
    title: "Ghost Simple Comments",
    description:
      "Lightweight native reply cards delivered by the loopback adapter without loading the Discourse application.",
    origin: "ghost.demo.discussionbridge.dev",
    state: "Live",
    href: "https://ghost.demo.discussionbridge.dev/ghost-simple-comments/",
    discussionHref: "https://bridge.demo.discussionbridge.dev/t/ghost-simple-comments/47",
    note: "An internal Ghost tag selects Simple while the article stays ordinary Ghost content.",
  },
  {
    title: "Ghost Full Comments",
    description: "The standard Discourse comments embed on a stock Ghost article.",
    origin: "ghost.demo.discussionbridge.dev",
    state: "Live",
    href: "https://ghost.demo.discussionbridge.dev/ghost-full-comments/",
    discussionHref: "https://bridge.demo.discussionbridge.dev/t/ghost-full-comments/48",
    note: "Full retains Discourse Core's naturally measured presentation rather than the fullInteractive viewport.",
  },
  {
    title: "Publishing through The Bridge",
    description: "A rich Ghost article delivered through the signed webhook and one governed Content Connection.",
    origin: "ghost.demo.discussionbridge.dev",
    state: "Live",
    href: "https://ghost.demo.discussionbridge.dev/portable-rich-content-from-ghost/",
    discussionHref: "https://bridge.demo.discussionbridge.dev/t/portable-rich-content-from-ghost/27",
    note: "Headings, media, Mermaid, math, authorship, retry identity, and fullInteractive discussion are live.",
  },
  {
    title: "From The Bridge",
    description: "Forum-authored rich content and replies presented safely in stock Ghost.",
    origin: "ghost.demo.discussionbridge.dev",
    state: "Live",
    href: "https://ghost.demo.discussionbridge.dev/from-the-bridge/",
    discussionHref: "https://bridge.demo.discussionbridge.dev/t/from-the-bridge-a-discussion-published-into-ghost/25",
    note: "The loopback service owns credentials and sanitization; the browser receives presentation-only output.",
  },
  {
    title: "Ghost Themed Edition",
    description:
      "A distinctly crafted Ghost theme with a polished build placeholder, private preview path, complete publishing layouts, and a finished live mode.",
    origin: "Naming and destination pending",
    state: "Planned",
    note: "The theme remains useful without DiscussionBridge; connected publishing, comments, and forum-owned content become first-class capabilities when enabled.",
  },
];

export const hugoDemos: Demo[] = [
  {
    title: "Hugo",
    description:
      "A stock Hugo publication proving build-time identity, idempotent retry, and durable live Discourse presentation.",
    origin: "hugo.demo.discussionbridge.dev",
    state: "Live",
    href: "https://hugo.demo.discussionbridge.dev/",
    discussionHref: "https://bridge.demo.discussionbridge.dev/t/hugo-publishing-through-the-bridge/50",
    note: "Live on stock Hugo and Ananke with generated Simple comments, plugin-free Full comments, and both Bridge directions.",
  },
  {
    title: "Hugo Themed Edition",
    description:
      "A purpose-built Hugo theme spanning a polished build placeholder, private preview, documentation and publishing layouts, and the complete live site.",
    origin: "Naming and destination pending",
    state: "Planned",
    note: "It will be a strong Hugo product independently, with optional first-class DiscussionBridge capabilities rather than adapter-shaped presentation.",
  },
];

export const statamicDemos: Demo[] = [
  {
    title: "Statamic DB",
    description:
      "A stock Statamic installation with database-backed content and independently proven Bridge behavior.",
    origin: "statamic-db.demo.discussionbridge.dev",
    state: "Live",
    href: "https://statamic-db.demo.discussionbridge.dev/",
    discussionHref: "https://sandbox-forum.discussionbridge.dev/t/statamic-db-publishing-connected-to-discourse/27",
    note: "Both directions are live on an independent Eloquent-backed profile with its own connection and persistence.",
  },
  {
    title: "Statamic Flat",
    description:
      "A stock Statamic installation with file-backed content, its own Bridge connection, and a complete discussion workflow.",
    origin: "statamic-flat.demo.discussionbridge.dev",
    state: "Live",
    href: "https://statamic-flat.demo.discussionbridge.dev/",
    discussionHref: "https://sandbox-forum.discussionbridge.dev/t/statamic-flat-publishing-connected-to-discourse/26",
    note: "Both directions are live through the shared addon while content remains honestly file-backed.",
  },
  {
    title: "Statamic SSG",
    description:
      "A generated Statamic profile proving the same addon across build-time snapshots, live comments, stable publishing identity, and forum-owned content.",
    origin: "statamic-ssg.demo.discussionbridge.dev",
    state: "Live",
    href: "https://statamic-ssg.demo.discussionbridge.dev/",
    discussionHref:
      "https://bridge.demo.discussionbridge.dev/t/statamic-ssg-publishing-through-the-bridge/43",
    note: "Live as seven generated HTML files with no deployed PHP runtime, Statamic control panel, or receiver credential.",
  },
  {
    title: "Statamic DB Themed Edition",
    description:
      "A full Statamic starter experience that moves from polished build placeholder to private preview and finished live publishing against the database-backed profile.",
    origin: "Naming and destination pending",
    state: "Planned",
    note: "The themed starter remains separate from the addon: each is useful alone, and together they provide the intended connected experience.",
  },
  {
    title: "Statamic Flat Themed Edition",
    description:
      "The same complete starter and design system exercised honestly against file-backed Statamic content.",
    origin: "Naming and destination pending",
    state: "Planned",
    note: "Build, preview, and live modes stay native to Statamic while optional DiscussionBridge features remain independently installable.",
  },
];

export const ssgDemos: Demo[] = [
  {
    title: "Astro + Starlight",
    description:
      "The live static-site foundation: generated Astro content with stable discussion identity and optional Bridge-enhanced interaction.",
    origin: "astrostarlight.demo.discussionbridge.dev",
    state: "Inaugural product",
    href: "https://astrostarlight.demo.discussionbridge.dev/",
    discussionHref: "https://forum.discussionbridge.dev/c/discussionbridge-for-astro/5",
    note: "Live today. Its static build remains independent of browser credentials and can work with standard Discourse or The Bridge.",
  },
  {
    title: "Hugo",
    description:
      "A live profile for build-time publishing, durable identity across rebuilds, and Discourse presentation.",
    origin: "hugo.demo.discussionbridge.dev",
    state: "Live",
    href: "https://hugo.demo.discussionbridge.dev/",
    discussionHref: "https://bridge.demo.discussionbridge.dev/t/hugo-publishing-through-the-bridge/50",
    note: "Live on stock Hugo with static Simple capture, plugin-free Full comments, and receiver-backed To/From profiles.",
  },
  {
    title: "Statamic SSG",
    description:
      "An advanced Statamic profile for generated output, build-time discussion resolution, and durable identity across static builds.",
    origin: "statamic-ssg.demo.discussionbridge.dev",
    state: "Live",
    href: "https://statamic-ssg.demo.discussionbridge.dev/",
    discussionHref:
      "https://bridge.demo.discussionbridge.dev/t/statamic-ssg-publishing-through-the-bridge/43",
    note: "Live through the shared Statamic addon: build-time Simple and From snapshots plus live Full and mapped discussion frames.",
  },
];

export const discourseDemos: Demo[] = [
  flagship,
  {
    title: "Purpose-built Discourse Theme",
    description:
      "A possible first-party theme for The Bridge that turns the proven stock forum workflow into a distinctive flagship experience without changing Discourse ownership or plugin boundaries.",
    origin: "Naming and destination pending",
    state: "Planned",
    note: "The stock flagship remains the Alpha compatibility proof. Naming, adoption by The Bridge, and the final themed scope will be decided later.",
  },
];

export const plannedThemeEditions: Demo[] = [
  astroDemos.at(-1)!,
  ghostDemos.at(-1)!,
  hugoDemos.at(-1)!,
  statamicDemos.at(-2)!,
  statamicDemos.at(-1)!,
  discourseDemos.at(-1)!,
];

export const collections = [
  {
    title: "Astro",
    description: "The inaugural Astro + Starlight product, a plain Astro reference, the stock Starlight control, and a planned full themed edition.",
    href: "/astro/",
    count: "3 live/control profiles · themed edition planned",
    state: "Live · themed edition planned",
  },
  {
    title: "Ghost",
    description: "A stock integration first, followed by a purpose-built DiscussionBridge themed edition.",
    href: "/ghost/",
    count: "4 live modes · themed edition planned",
    state: "Live · themed edition planned",
  },
  {
    title: "Hugo",
    description: "A live static publishing profile plus a planned native themed edition spanning build, preview, and live modes.",
    href: "/hugo/",
    count: "1 live profile · themed edition planned",
    state: "Live · themed edition planned",
  },
  {
    title: "Statamic",
    description: "DB, Flat, and SSG profiles proven separately through one shared addon, then extended with matching themed editions.",
    href: "/statamic/",
    count: "5 demonstrations",
    state: "3 live · themed editions planned",
  },
  {
    title: "WordPress",
    description: "A stock WordPress installation proving the Bridge without replacing native presentation.",
    href: "/wordpress/",
    count: "4 live modes",
    state: "Live",
  },
  {
    title: "SSG",
    description: "Static-generation profiles spanning Astro, Hugo, and Statamic without turning SSG into a separate adapter.",
    href: "/ssg/",
    count: "3 live profiles",
    state: "Astro · Hugo · Statamic live",
  },
  {
    title: "The Bridge",
    description: "The stock flagship and many-to-many matrix, with a possible purpose-built Discourse theme planned as a distinct next expression.",
    href: "/discourse/",
    count: "3 shared discussions · 21 live presentations · theme planned",
    state: "Flagship · theme planned",
  },
];

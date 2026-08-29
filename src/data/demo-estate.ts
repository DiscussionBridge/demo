export type DemoState =
  | "Flagship"
  | "Live"
  | "Live refresh"
  | "Control"
  | "Building for Alpha"
  | "Future edition";

export type Demo = {
  title: string;
  description: string;
  origin: string;
  state: DemoState;
  href?: string;
  discussionHref?: string;
  note?: string;
};

export const flagship: Demo = {
  title: "DiscussionBridge for Astro + Starlight",
  description:
    "The flagship publishing experience: structured content, native Starlight presentation, and a durable Discourse discussion.",
  origin: "astrostarlight.demo.discussionbridge.dev",
  state: "Flagship",
  href: "https://astrostarlight.demo.discussionbridge.dev/",
  discussionHref: "https://forum.discussionbridge.dev/c/discussionbridge-for-astro/5",
  note: "Live today; a substantial update to the current Bridge contract and presentation is queued.",
};

export const astroDemos: Demo[] = [
  flagship,
  {
    title: "Plain Astro",
    description:
      "A core Astro reference implementation that keeps framework behavior visible and the Bridge integration easy to inspect.",
    origin: "astro.demo.discussionbridge.dev",
    state: "Live refresh",
    href: "https://astro.demo.discussionbridge.dev/",
    discussionHref: "https://forum.discussionbridge.dev/t/core-astro-discussion-bridge-demo/34",
    note: "Live today; it will be rebound to the shared six-profile contract.",
  },
  {
    title: "Stock Starlight Control",
    description:
      "An unmodified Starlight baseline for upgrade checks and direct comparison with the flagship experience.",
    origin: "stockstarlight.demo.discussionbridge.dev",
    state: "Control",
    href: "https://stockstarlight.demo.discussionbridge.dev/",
    note: "A comparison control, not a Bridge-enabled publishing demo.",
  },
];

export const wordpressDemos: Demo[] = [
  {
    title: "WordPress",
    description:
      "A stock WordPress installation with the native DiscussionBridge adapter, real published content, and its mapped discussion.",
    origin: "wordpress.demo.discussionbridge.dev",
    state: "Live",
    href: "https://wordpress.demo.discussionbridge.dev/",
    discussionHref: "https://sandbox-forum.discussionbridge.dev/t/wordpress-publishing-connected-to-discourse/22",
    note: "Both directions are live on WordPress core presentation: mapped interactive discussion and server-rendered Discourse content.",
  },
];

export const ghostDemos: Demo[] = [
  {
    title: "Ghost",
    description:
      "A stock Ghost publication with a signed publishing workflow and server-side discussion presentation.",
    origin: "ghost.demo.discussionbridge.dev",
    state: "Live",
    href: "https://ghost.demo.discussionbridge.dev/",
    discussionHref: "https://sandbox-forum.discussionbridge.dev/t/ghost-publishing-connected-to-discourse/24",
    note: "Both directions are live: native signed-webhook publishing and a stock Ghost page that presents Discourse-authored content through the server-side adapter.",
  },
  {
    title: "Ghost Themed Edition",
    description:
      "A future first-party DiscussionBridge theme that shows what a polished Ghost publishing experience can become.",
    origin: "ghost-themed.demo.discussionbridge.dev",
    state: "Future edition",
    note: "Begins after the stock workflow is established.",
  },
];

export const statamicDemos: Demo[] = [
  {
    title: "Statamic Flat",
    description:
      "A stock Statamic installation with file-backed content, its own Bridge connection, and a complete discussion workflow.",
    origin: "statamic-flat.demo.discussionbridge.dev",
    state: "Building for Alpha",
  },
  {
    title: "Statamic DB",
    description:
      "A stock Statamic installation with database-backed content and independently proven Bridge behavior.",
    origin: "statamic-db.demo.discussionbridge.dev",
    state: "Building for Alpha",
  },
  {
    title: "Statamic Flat Themed Edition",
    description:
      "A future DiscussionBridge-designed Statamic experience running on the Flat content profile.",
    origin: "statamic-flat-themed.demo.discussionbridge.dev",
    state: "Future edition",
    note: "Begins after the stock Flat workflow is established.",
  },
  {
    title: "Statamic DB Themed Edition",
    description:
      "The same future design language exercised independently against Statamic's database-backed profile.",
    origin: "statamic-db-themed.demo.discussionbridge.dev",
    state: "Future edition",
    note: "Begins after the stock DB workflow is established.",
  },
];

export const discourseDemos: Demo[] = [
  {
    title: "The Bridge",
    description:
      "A hands-on, resettable Discourse publishing environment where approved demo users can publish through DiscussionBridge.",
    origin: "bridge.demo.discussionbridge.dev",
    state: "Building for Alpha",
    note: "Public examples, contact-requested access, individual expiring credentials, and periodic coordinated resets.",
  },
];

export const collections = [
  {
    title: "Astro",
    description: "The flagship Astro + Starlight experience, a plain Astro reference, and the stock Starlight control.",
    href: "/astro/",
    count: "3 demonstrations",
    state: "Live · Alpha refresh",
  },
  {
    title: "WordPress",
    description: "A stock WordPress installation proving the Bridge without replacing the platform's native presentation.",
    href: "/wordpress/",
    count: "1 initial demonstration",
    state: "Live",
  },
  {
    title: "Ghost",
    description: "A stock integration first, followed by a purpose-built DiscussionBridge themed edition.",
    href: "/ghost/",
    count: "2 demonstrations",
    state: "Live · themed edition planned",
  },
  {
    title: "Statamic",
    description: "Flat and DB profiles proven separately, then extended with matching themed editions.",
    href: "/statamic/",
    count: "4 demonstrations",
    state: "Building for Alpha",
  },
  {
    title: "Discourse Publisher",
    description: "The Bridge: a controlled, hands-on Discourse-to-Discourse publishing demonstration.",
    href: "/discourse/",
    count: "1 interactive demonstration",
    state: "Building for Alpha",
  },
];

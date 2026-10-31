import analytics from '@codeworkslabs/astro-analytics';
import { analyticsOptions } from './analytics.config.mjs';
export default {
  integrations: [analytics(analyticsOptions)],
  site: "https://demo.discussionbridge.dev",
};

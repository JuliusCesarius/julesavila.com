// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://julesavila.com',
  integrations: [sitemap()],
  vite: {
    define: {
      __DEPLOY_TIME__: JSON.stringify(new Date().toISOString()),
    },
  },
});

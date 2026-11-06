import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// À modifier si le nom de domaine définitif est différent (et dans src/config.ts)
export default defineConfig({
  site: 'https://www.skysolus.fr',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [sitemap()],
});

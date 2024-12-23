import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site:'https://sanzjv.github.io',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(
      appBaseStyles: false
    )
  ]
});

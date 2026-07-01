// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), icon()],
  site: 'https://mcarreradev.com', // keep in sync with SITE_URL in src/const.ts

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },

  markdown: {
    shikiConfig: {
      theme: 'tokyo-night',
      // Tag every rendered code block with its language so components
      // (e.g. CodeExample) can route fenced blocks to the right tab.
      transformers: [
        {
          pre(node) {
            node.properties['data-language'] = this.options.lang;
          },
        },
      ],
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Outfit',
      cssVariable: '--font-outfit',
      weights: [500, 700, 800],
    },
  ],

});
// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';


// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), icon()],
  site: 'https://mcarreradev.com', // keep in sync with SITE_URL in src/const.ts

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      theme: 'vesper'
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
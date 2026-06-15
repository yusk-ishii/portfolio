// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'LINE Seed JP',
      cssVariable: '--font-line-seed-jp',
      weights: [400, 700],
      display: 'swap',
      optimizedFallbacks: true,
    },
    {
      provider: fontProviders.google(),
      name: 'Figtree',
      cssVariable: '--font-figtree-gf',
      weights: [400, 700],
      display: 'optional',
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-inter-gf',
      weights: [400, 700],
      display: 'optional',
    },
    {
      provider: fontProviders.google(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat-gf',
      weights: [500],
      display: 'optional',
    },
  ],
});

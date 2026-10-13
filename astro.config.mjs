import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Configuration officielle MOKILI Site Vitrine (Astro SSG)
export default defineConfig({
  output: 'static',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()]
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // відносні шляхи — стабільно для GitHub Pages
  plugins: [react()],
});

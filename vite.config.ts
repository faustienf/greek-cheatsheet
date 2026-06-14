import path from 'node:path';
import { fileURLToPath } from 'node:url';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const sourceDirectory = fileURLToPath(new URL('./src', import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      app: path.resolve(sourceDirectory, 'app'),
      pages: path.resolve(sourceDirectory, 'pages'),
      widgets: path.resolve(sourceDirectory, 'widgets'),
      features: path.resolve(sourceDirectory, 'features'),
      entities: path.resolve(sourceDirectory, 'entities'),
      shared: path.resolve(sourceDirectory, 'shared'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/app/testing/setup-tests.ts'],
    css: true,
    restoreMocks: true,
  },
});

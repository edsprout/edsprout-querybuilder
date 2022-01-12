import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['chance'],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: format => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dnd', 'react-dnd-html5-backend', 'immer'],
      output: {
        exports: 'named',
      },
    },
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
});

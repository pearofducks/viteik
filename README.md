# viteik

A shim to make working with Vite and Eik easy

## install

```sh
pnpm add -D viteik
```

## use

**In `vite.config.js`**

```js
import { defineConfig } from 'vite'
import VitEik, { outputOptions } from 'viteik'

export default defineConfig({
  plugins: [VitEik()],
  // Any options for the Eik Rollup plugin can be passed to VitEik
  build: {
    rollupOptions: {
      input: './client/main.js',
      output: outputOptions
      // outputOptions is mostly telling Vite to stop using hashes
    }
  },
  server: {
    fs: { strict: true },
    middlewareMode: true
  }
})
```

<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: @nuxt/gsap
- Package name: my-module
- Description: GSAP integration for Nuxt.
-->

# @nuxt/gsap

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

**Enhance your Nuxt application with powerful animations and transitions using GSAP!**

- [**GSAP**](https://gsap.com/)
- [✨ &nbsp;Release Notes](/CHANGELOG.md)
  <!-- - [🏀 Online playground](https://stackblitz.com/github/your-org/my-module?file=playground%2Fapp.vue) -->
  <!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- **Auto-import GSAP**: Easily integrate GSAP without manually importing it in every file.
- **Dynamic Plugin Registration**: Import and register GSAP plugins only if enabled in `nuxt.config.ts`, optimizing performance.
- **Composable for Each Plugin**: Use GSAP plugins as composables for a simple and direct experience.

## Quick Setup ⚠️ (The installation is not yet ready)

1. Install the module to your Nuxt application with one command:

```bash
npx nuxi module add @nuxt/gsap
```

2. Add @nuxt/gsap to the modules section of nuxt.config.ts

```bash
export default defineNuxtConfig({
  modules: ['@nuxt/gsap'],
})
```

## Example Configuration

1. In your nuxt.config.ts, enable the desired GSAP plugins:

```js
export default defineNuxtConfig({
  modules: ["@nuxt/gsap"],
  gsap: {
    plugins: ["Draggable"],
  },
});
```

2. Here's how to use the ScrollTrigger plugin in your component:

```js
<script setup lang="ts">
const Draggable = useDraggable()

const elementRef = ref(null)

onMounted(() => {
  Draggable.create(elementRef.value)
})
</script>

<template>
  <div ref="elementRef">Drag me!</div>
</template>
```

That's it! You can now use @nuxt/gsap in your Nuxt app ✨

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  npm install
  
  # Generate type stubs
  npm run dev:prepare
  
  # Develop with the playground
  npm run dev
  
  # Build the playground
  npm run dev:build
  
  # Run ESLint
  npm run lint
  
  # Run Vitest
  npm run test
  npm run test:watch
  
  # Release new version
  npm run release
  ```

</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/my-module/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/my-module
[npm-downloads-src]: https://img.shields.io/npm/dm/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/my-module
[license-src]: https://img.shields.io/npm/l/my-module.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/my-module
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt.js
[nuxt-href]: https://nuxt.com

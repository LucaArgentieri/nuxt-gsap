import { gsapPlugins } from './utils/gsap-plugins'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'
/**
 * Register GSAP plugins only if required in module options
 */

export default defineNuxtPlugin(async (_nuxtApp) => {
  const config = useRuntimeConfig().public.gsap
  const pluginsToRegister = config.plugins || []

  for (const pluginName of pluginsToRegister as (keyof typeof gsapPlugins)[]) {
    if (gsapPlugins[pluginName as keyof typeof gsapPlugins]) {
      const plugin = await gsapPlugins[pluginName]()
      _nuxtApp.provide(pluginName, plugin)
      gsap.registerPlugin(plugin)
    }
    else {
      throw new Error(`[gsap-nuxt-module] Plugin "${pluginName}" not found, available plugins: ${Object.keys(gsapPlugins).join(', ')}`)
    }
  }
})

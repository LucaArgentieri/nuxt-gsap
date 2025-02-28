import { availablePlugins } from './utils/available-gsap-plugins'
import { defineNuxtPlugin, useRuntimeConfig } from '#app'

/**
 * Register GSAP plugins only if required in module options
 */

export default defineNuxtPlugin(async (_nuxtApp) => {
  const config = useRuntimeConfig().public.gsap
  const pluginsToRegister = config.plugins || []

  for (const pluginName of pluginsToRegister as (keyof typeof availablePlugins)[]) {
    if (availablePlugins[pluginName as keyof typeof availablePlugins]) {
      const plugin = await availablePlugins[pluginName]()
      _nuxtApp.provide(pluginName, plugin)
      gsap.registerPlugin(plugin)
    }
    else {
      throw new Error(`[@nuxt/gsap] Plugin "${pluginName}" not found, available plugins: ${Object.keys(availablePlugins).join(', ')}`)
    }
  }
})

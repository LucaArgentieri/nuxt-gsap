import { useNuxtApp } from '#app'

export const useScrollToPlugin = (): typeof ScrollToPlugin => {
  const { $ScrollToPlugin } = useNuxtApp()
  if (!$ScrollToPlugin) {
    throw new Error('[useScrollToPlugin] ScrollToPlugin not registered! Did you enable it in nuxt.config.ts?')
  }
  return $ScrollToPlugin as typeof ScrollToPlugin
}

import { useNuxtApp } from '#app'

export const useScrollToPlugin = (): typeof ScrollToPlugin => {
  const { $ScrollToPlugin } = useNuxtApp()
  if (!$ScrollToPlugin) {
    console.warn('[useScrollToPlugin] ScrollToPlugin not registered!')
  }
  return $ScrollToPlugin as typeof ScrollToPlugin
}

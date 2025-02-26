import { useNuxtApp } from '#app'

export function useScrollToPlugin() {
  const { $ScrollToPlugin } = useNuxtApp()
  if (!$ScrollToPlugin) {
    console.warn('[useScrollToPlugin] ScrollToPlugin not registered!')
  }
  return $ScrollToPlugin
}

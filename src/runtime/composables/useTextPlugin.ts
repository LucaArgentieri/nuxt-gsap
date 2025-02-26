import { useNuxtApp } from '#app'

export function useTextPlugin() {
  const { $TextPlugin } = useNuxtApp()
  if (!$TextPlugin) {
    console.warn('[useTextPlugin] TextPlugin not registered!')
  }
  return $TextPlugin
}

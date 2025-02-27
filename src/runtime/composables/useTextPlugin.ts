import { useNuxtApp } from '#app'

export const useTextPlugin = (): typeof TextPlugin => {
  const { $TextPlugin } = useNuxtApp()
  if (!$TextPlugin) {
    console.warn('[useTextPlugin] TextPlugin not registered!')
  }
  return $TextPlugin as typeof TextPlugin
}

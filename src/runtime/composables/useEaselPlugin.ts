import { useNuxtApp } from '#app'

export function useEaselPlugin() {
  const { $EaselPlugin } = useNuxtApp()
  if (!$EaselPlugin) {
    console.warn('[useEaselPlugin] EaselPlugin not registered!')
  }
  return $EaselPlugin
}

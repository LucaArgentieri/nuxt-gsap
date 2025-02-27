import { useNuxtApp } from '#app'

export const useEaselPlugin = (): typeof EaselPlugin => {
  const { $EaselPlugin } = useNuxtApp()
  if (!$EaselPlugin) {
    console.warn('[useEaselPlugin] EaselPlugin not registered!')
  }
  return $EaselPlugin as typeof EaselPlugin
}

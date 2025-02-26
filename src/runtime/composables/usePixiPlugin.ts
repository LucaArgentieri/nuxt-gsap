import { useNuxtApp } from '#app'

export function usePixiPlugin() {
  const { $PixiPlugin } = useNuxtApp()
  if (!$PixiPlugin) {
    console.warn('[usePixiPlugin] PixiPlugin not registered!')
  }
  return $PixiPlugin
}

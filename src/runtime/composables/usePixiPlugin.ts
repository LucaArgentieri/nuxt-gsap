import { useNuxtApp } from '#app'

export const usePixiPlugin = (): typeof PixiPlugin => {
  const { $PixiPlugin } = useNuxtApp()
  if (!$PixiPlugin) {
    console.warn('[usePixiPlugin] PixiPlugin not registered!')
  }
  return $PixiPlugin as typeof PixiPlugin
}

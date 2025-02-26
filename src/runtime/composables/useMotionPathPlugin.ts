import { useNuxtApp } from '#app'

export function useMotionPathPlugin() {
  const { $MotionPathPlugin } = useNuxtApp()
  if (!$MotionPathPlugin) {
    console.warn('[useMotionPathPlugin] MotionPathPlugin not registered!')
  }
  return $MotionPathPlugin
}

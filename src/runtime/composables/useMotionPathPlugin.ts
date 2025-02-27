import { useNuxtApp } from '#app'

export const useMotionPathPlugin = (): typeof MotionPathPlugin => {
  const { $MotionPathPlugin } = useNuxtApp()
  if (!$MotionPathPlugin) {
    console.warn('[useMotionPathPlugin] MotionPathPlugin not registered!')
  }
  return $MotionPathPlugin as typeof MotionPathPlugin
}

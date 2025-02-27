import { useNuxtApp } from '#app'

export const useScrollTrigger = (): typeof ScrollTrigger => {
  const { $ScrollTrigger } = useNuxtApp()
  if (!$ScrollTrigger) {
    console.warn('[useScrollTrigger] ScrollTrigger not registered!')
  }
  return $ScrollTrigger as typeof ScrollTrigger
}

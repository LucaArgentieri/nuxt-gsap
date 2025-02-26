import { useNuxtApp } from '#app'

export function useScrollTrigger() {
  const { $ScrollTrigger } = useNuxtApp()
  if (!$ScrollTrigger) {
    console.warn('[useScrollTrigger] ScrollTrigger not registered!')
  }
  return $ScrollTrigger
}

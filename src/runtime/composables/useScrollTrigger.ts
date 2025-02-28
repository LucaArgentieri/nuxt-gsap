import { useNuxtApp } from '#app'

export const useScrollTrigger = (): typeof ScrollTrigger => {
  const { $ScrollTrigger } = useNuxtApp()
  if (!$ScrollTrigger) {
    throw new Error('[useScrollTrigger] ScrollTrigger not registered! Did you enable it in nuxt.config.ts?')
  }
  return $ScrollTrigger as typeof ScrollTrigger
}

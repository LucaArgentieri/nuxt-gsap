import { useNuxtApp } from '#app'

export const useFlip = (): typeof Flip => {
  const { $Flip } = useNuxtApp()
  if (!$Flip) {
    throw new Error('[useFlip] Flip not registered! Did you enable it in nuxt.config.ts?')
  }
  return $Flip as typeof Flip
}

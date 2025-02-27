import { useNuxtApp } from '#app'

export const useFlip = (): typeof Flip => {
  const { $Flip } = useNuxtApp()
  if (!$Flip) {
    console.warn('[useFlip] Flip not registered!')
  }
  return $Flip as typeof Flip
}

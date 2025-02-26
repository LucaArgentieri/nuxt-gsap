import { useNuxtApp } from '#app'

export function useFlip() {
  const { $Flip } = useNuxtApp()
  if (!$Flip) {
    console.warn('[useFlip] Flip not registered!')
  }
  return $Flip
}

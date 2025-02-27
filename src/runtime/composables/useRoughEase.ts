import { useNuxtApp } from '#app'

export const useRoughEase = (): typeof RoughEase => {
  const { $RoughEase } = useNuxtApp()
  if (!$RoughEase) {
    console.warn('[useRoughEase] RoughEase not registered!')
  }
  return $RoughEase as typeof RoughEase
}

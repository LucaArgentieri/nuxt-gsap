import { useNuxtApp } from '#app'

export function useRoughEase() {
  const { $RoughEase } = useNuxtApp()
  if (!$RoughEase) {
    console.warn('[useRoughEase] RoughEase not registered!')
  }
  return $RoughEase
}

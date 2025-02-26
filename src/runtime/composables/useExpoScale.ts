import { useNuxtApp } from '#app'

export function useExpoScaleEase() {
  const { $ExpoScaleEase } = useNuxtApp()
  if (!$ExpoScaleEase) {
    console.warn('[useExpoScaleEase] ExpoScaleEase not registered!')
  }
  return $ExpoScaleEase
}

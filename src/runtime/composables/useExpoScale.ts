import { useNuxtApp } from '#app'

export const useExpoScaleEase = (): typeof ExpoScaleEase => {
  const { $ExpoScaleEase } = useNuxtApp()
  if (!$ExpoScaleEase) {
    console.warn('[useExpoScaleEase] ExpoScaleEase not registered!')
  }
  return $ExpoScaleEase as typeof ExpoScaleEase
}

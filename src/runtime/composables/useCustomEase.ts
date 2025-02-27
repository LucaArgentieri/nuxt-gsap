import { useNuxtApp } from '#app'

export const useCustomEase = (): typeof CustomEase => {
  const { $CustomEase } = useNuxtApp()
  if (!$CustomEase) {
    console.warn('[useCustomEase] CustomEase not registered!')
  }
  return $CustomEase as typeof CustomEase
}

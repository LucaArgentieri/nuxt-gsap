import { useNuxtApp } from '#app'

export function useCustomEase() {
  const { $CustomEase } = useNuxtApp()
  if (!$CustomEase) {
    console.warn('[useCustomEase] CustomEase not registered!')
  }
  return $CustomEase
}

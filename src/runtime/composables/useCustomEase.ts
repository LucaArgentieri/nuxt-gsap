import { useNuxtApp } from '#app'

export const useCustomEase = (): typeof CustomEase => {
  const { $CustomEase } = useNuxtApp()
  if (!$CustomEase) {
    throw new Error('[useCustomEase] CustomEase not registered! Did you enable it in nuxt.config.ts?')
  }
  return $CustomEase as typeof CustomEase
}

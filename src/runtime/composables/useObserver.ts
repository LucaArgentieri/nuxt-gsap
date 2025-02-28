import { useNuxtApp } from '#app'

export const useObserver = (): typeof Observer => {
  const { $Observer } = useNuxtApp()
  if (!$Observer) {
    throw new Error('[useObserver] Observer not registered! Did you enable it in nuxt.config.ts?')
  }
  return $Observer as typeof Observer
}

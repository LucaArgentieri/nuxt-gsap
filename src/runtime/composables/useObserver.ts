import { useNuxtApp } from '#app'

export const useObserver = (): typeof Observer => {
  const { $Observer } = useNuxtApp()
  if (!$Observer) {
    console.warn('[useObserver] Observer not registered!')
  }
  return $Observer as typeof Observer
}

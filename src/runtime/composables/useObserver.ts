import { useNuxtApp } from '#app'

export function useObserver() {
  const { $Observer } = useNuxtApp()
  if (!$Observer) {
    console.warn('[useObserver] Observer not registered!')
  }
  return $Observer
}

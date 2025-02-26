import { useNuxtApp } from '#app'

export function useSlowMo() {
  const { $SlowMo } = useNuxtApp()
  if (!$SlowMo) {
    console.warn('[useSlowMo] SlowMo not registered!')
  }
  return $SlowMo
}

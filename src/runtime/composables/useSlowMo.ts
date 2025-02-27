import { useNuxtApp } from '#app'

export const useSlowMo = (): typeof SlowMo => {
  const { $SlowMo } = useNuxtApp()
  if (!$SlowMo) {
    console.warn('[useSlowMo] SlowMo not registered!')
  }
  return $SlowMo as typeof SlowMo
}

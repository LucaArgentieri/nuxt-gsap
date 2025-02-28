import { useNuxtApp } from '#app'

export const useDraggable = (): typeof Draggable | undefined => {
  const { $Draggable } = useNuxtApp()
  if (!$Draggable) {
    throw new Error('[useDraggable] Draggable not registered! Did you enable it in nuxt.config.ts?')
  }
  return $Draggable as typeof Draggable
}

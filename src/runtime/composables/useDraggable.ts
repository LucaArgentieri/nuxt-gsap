import { useNuxtApp } from '#app'

export const useDraggable = (): typeof Draggable => {
  const { $Draggable } = useNuxtApp()
  if (!$Draggable) {
    console.warn('[useDraggable] Draggable not registered!')
  }
  return $Draggable as typeof Draggable
}

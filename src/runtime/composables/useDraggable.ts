import { useNuxtApp } from '#app'

export function useDraggable() {
  const { $Draggable } = useNuxtApp()
  if (!$Draggable) {
    console.warn('[useDraggable] Draggable not registered!')
  }
  return $Draggable
}

<template>
  <div ref="elementRef">
    Drag me!
  </div>
</template>

<script setup lang="ts">
const Draggable = useDraggable()

const elementRef = ref(null)

onMounted(() => {
  Draggable.create(elementRef.value)
})
</script>

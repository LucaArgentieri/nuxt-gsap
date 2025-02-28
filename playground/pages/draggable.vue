<script setup>
const Draggable = useDraggable()

const nuxtLogoRef = ref(null)

onMounted(() => {
  Draggable.create(nuxtLogoRef.value.$el)
})
</script>

<template>
  <main>
    <NuxtLogo ref="nuxtLogoRef" />
  </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100svh;
    overflow: hidden;
}
</style>

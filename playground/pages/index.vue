<script setup lang="ts">
const Draggable = useDraggable()

const nuxtLogoRef = ref(null)
const gsapLogoRef = ref(null)

onMounted(() => {
    Draggable.create(nuxtLogoRef.value.$el)
    Draggable.create(gsapLogoRef.value.$el)
})
</script>

<template>
    <main>
        <NuxtLogo ref="nuxtLogoRef" />
        <GSAPLogo ref="gsapLogoRef" />
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

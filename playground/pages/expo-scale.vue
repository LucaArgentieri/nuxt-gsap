<script setup>
const box = ref(null)

onMounted(() => {
  gsap.fromTo(
    box.value,
    { scale: 0.5 },
    { duration: 5, scale: 3, ease: 'expoScale(0.5, 3, power2.inOut)', repeat: -1, yoyo: true },
  )
})
</script>

<template>
  <main>
    <div
      ref="box"
      class="box"
    />
  </main>
</template>

<style scoped>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        overflow: hidden;
    }

    .box {
        width: 100px;
        height: 100px;
        background-color: #61dafb;
        border-radius: 100%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
</style>

<script setup>
const ScrollToPlugin = useScrollToPlugin()

const nuxtLogoRef = ref(null)
const gsapLogoRef = ref(null)

onMounted(() => {
  gsap.to(window, { duration: 2, scrollTo: gsapLogoRef.value.$el, repeat: -1, yoyo: true, ease: 'expo.inOut' })

  // ScrollToPlugin.config({ autoKill: true })
})
</script>

<template>
  <main>
    <section>
      <NuxtLogo ref="nuxtLogoRef" />
    </section>
    <section>
      <GSAPLogo ref="gsapLogoRef" />
    </section>
  </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    height: 100vh;
    width: 100vw;
}
</style>

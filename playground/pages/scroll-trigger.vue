<script setup>
// const ScrollTrigger = useScrollTrigger()

const nuxtLogoRef = ref(null)
const gsapLogoRef = ref(null)

onMounted(() => {
  const nuxtLogo = nuxtLogoRef.value.$el
  const gsapLogo = gsapLogoRef.value.$el

  // console.log(ScrollTrigger.create)

  gsap.fromTo(nuxtLogo, {
    x: -500,
  },
  {
    x: 500,
    scrollTrigger: {
      trigger: nuxtLogo,
      start: 'top+=100px center',
      end: 'bottom center',
      markers: true,
    },
  })

  gsap.fromTo(gsapLogo, {
    x: -500,
  }, {
    x: 500,
    scrollTrigger: {
      trigger: gsapLogo,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      markers: true,
    },
  })
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

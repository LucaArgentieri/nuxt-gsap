<script setup>
useHead({
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.2.4/pixi.min.js',
      type: 'text/javascript',
    },
  ],
})

const appRef = ref(null)

onMounted(() => {
  const app = new PIXI.Application({ width: 800, height: 600 })
  appRef.value.appendChild(app.view)

  const graphics = new PIXI.Graphics()
  graphics.beginFill(0xDE3249)
  const pixiObject = graphics.drawRect(50, 50, 100, 100)
  graphics.endFill()

  gsap.to(pixiObject, {
    pixi: { x: 500, scaleX: 2, scaleY: 1.5, skewX: 30, rotation: 60 },
    duration: 1,
    ease: 'expo.inOut',
  })

  app.stage.addChild(graphics)
})
</script>

<template>
  <main ref="appRef" />
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}
</style>

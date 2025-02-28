<script setup>
useHead({
  script: [
    {
      src: 'https://code.createjs.com/easeljs-0.8.2.min.js',
    },
  ],
})

const easelContainer = ref(null)

onMounted(() => {
  const stage = new createjs.Stage(easelContainer.value)
  const circle = new createjs.Shape()
  circle.graphics.beginFill('red').drawCircle(0, 0, 50)
  circle.x = circle.y = 100
  stage.addChild(circle)

  gsap.ticker.add(() => stage.update())

  gsap.to(circle, {
    duration: 2,
    scaleX: 0.5,
    scaleY: 0.5,
    easel: { tint: 0x00FF00 },
    repeat: -1,
    yoyo: true,
  })
})
</script>

<template>
  <canvas
    ref="easelContainer"
    class="easel-container"
  />
</template>

<style scoped>
.easel-container {
  width: 100%;
}
</style>

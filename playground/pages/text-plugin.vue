<script setup>
const textRef = ref(null)

onMounted(() => {
  gsap.to(textRef.value, {
    text: {
      value: 'Your new text',
      newClass: 'new-text',
      delimiter: ' ',
    },
    ease: 'expo.inOut',
    duration: 5,

  })
})
</script>

<template>
  <main>
    <h1 ref="textRef">
      Text Plugin
    </h1>
  </main>
</template>

<style>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100svh;
    overflow: hidden;
}

.new-text {
    color: red;

}
</style>

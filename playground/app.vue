<script setup>
const titleRef = ref(null)

const ScrollTrigger = useScrollTrigger()
const Flip = useFlip()
const Draggable = useDraggable()

onMounted(() => {
  console.log(ScrollTrigger, Flip)

  Draggable.create(titleRef.value)

  ScrollTrigger.create({
    trigger: titleRef.value,
    start: 'top top',
    end: 'bottom 50%+=100px',
    markers: true,
    onToggle: self => console.log('toggled, isActive:', self.isActive),
  })

  gsap.to(titleRef.value, {
    duration: 1,
    x: 30,
    y: 30,
    ease: 'elastic',
  })
})
</script>

<template>
  <div>
    <h1 ref="titleRef">
      Nuxt module playground!
    </h1>
  </div>
</template>

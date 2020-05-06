<template lang="pug">
  div
    HHeader
    nuxt.max-w-3xl.px-4.py-16.md_px-0.mx-auto
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 0.1s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

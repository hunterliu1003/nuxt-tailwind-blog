<template lang="pug">
  div.h-layout-default.flex.flex-col.min-h-screen
    HHeader
    main.relative.w-full.max-w-3xl.px-4.py-16.md_px-0.mx-auto
      nuxt
      ul.absolute.flex.flex-col.pt-16.pl-4(style="top: 0;left: 100%;")
        li fb
        li twitter
    HFooter.mt-auto
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

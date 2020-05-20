<template lang="pug">
  div.flex.flex-col.min-h-screen.bg-light-elevatedSurface.dark_bg-dark-elevatedSurface
    HHeader
    main.w-full.max-w-3xl.mx-auto.px-4.pb-16.pt-16.md_pt-24
      nuxt.pt-8
    HFooter.mt-auto.mb-16.md_mb-0
    HMobileMainNavigation
    HScrollTop.w-full.max-w-3xl.mx-auto.mb-16.md_mb-0
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>

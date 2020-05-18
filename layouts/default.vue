<template lang="pug">
  div.flex.flex-col.min-h-screen.bg-light-elevatedSurface.dark_bg-dark-elevatedSurface
    HHeader
    main.w-full.max-w-3xl.px-4.pb-16.pt-16.md_pt-24.mx-auto
      nuxt.pt-8
    HFooter.mt-auto.mb-16.md_mb-0
    HMobileMainNavigation
</template>

<script>
export default {
  name: 'LayoutDefault'
}
</script>

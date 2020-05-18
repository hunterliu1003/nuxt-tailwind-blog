<template lang="pug">
  header.fixed.top-0.left-0.right-0.z-30.h-16.md_h-24.bg-light-elevatedSurface.dark_bg-dark-elevatedSurface.border-b.border-light-border.dark_border-dark-border.lg_border-0
    .max-w-3xl.flex.items-center.h-full.mx-auto.px-4
      h1.mr-auto
        NLink(to="/").block.text-2xl.tracking-tight HunterLiu
      nav.hidden.md_flex
        h2.m-0.h-0.w-0.overflow-hidden 關於我、文章列表和標籤列表
        NLink(to="/about").header-link 關於我
        NLink(to="/posts").header-link 文章列表
        NLink(to="/tags").header-link 標籤列表
      //- .flex.justify-center
        a.header-link(rel="noopener noreferrer" href="https://www.facebook.com/hunterliu1003" target="_blank") Facebook
        a.header-link(rel="noopener noreferrer" href="https://github.com/hunterliu1003" target="_blank") Github
      HDarkModeToggle.ml-2
</template>

<script>
export default {
  name: 'HHeader'
}
</script>

<style scoped>
.header-link {
  @apply block text-xl tracking-tight px-6 py-2;
}
</style>

<template lang="pug">
  header.fixed.top-0.left-0.right-0.z-30.h-16.bg-light-elevatedSurface.dark_bg-dark-elevatedSurface.border-b.border-light-border.dark_border-dark-border
    .max-w-3xl.flex.items-center.h-full.mx-auto.px-4
      h1.mr-auto
        NLink(to="/posts").block.text-2xl.tracking-tight HunterLiu
      nav.hidden.md_flex.md_items-center
        h2.m-0.h-0.w-0.overflow-hidden 關於我、文章列表和標籤列表
        NLink(to="/").header-link 關於我
        NLink(to="/posts").header-link 文章列表
        NLink(to="/tags").header-link 標籤列表
      a.mx-2.hover_text-primary-dark(href='https://github.com/hunterliu1003' target='_blank' rel='noopener noreferrer' title='Github' name='Github')
        IconGithub.w-6.h-6
      HDarkModeToggle.ml-2
      //- .flex.justify-center
        a.header-link(rel="noopener noreferrer" href="https://www.facebook.com/hunterliu1003" target="_blank") Facebook
</template>

<script>
export default {
  name: 'HHeader'
}
</script>

<style scoped>
.header-link {
  @apply block px-4 py-2 text-xl tracking-tight underline;
}
</style>

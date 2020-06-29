<template lang="pug">
  nav.h-16.md_hidden.bg-light-elevatedSurface.dark_bg-dark-elevatedSurface.border-t.border-light-border.dark_border-dark-border.md_border-0
    .max-w-3xl.flex.items-center.h-full.mx-auto
      h2.m-0.h-0.w-0.overflow-hidden 關於我、文章列表和標籤列表
      NLink(to="/").header-link 關於我
      NLink(to="/posts").header-link 文章列表
      NLink(to="/tags").header-link 標籤列表
</template>
<script>
export default {
  name: 'HMobileMainNavigation'
}
</script>

<style lang="scss" scoped>
nav {
  padding-bottom: env(safe-area-inset-bottom);
}
.header-link {
  @apply flex-grow flex items-center justify-center h-full text-sm tracking-tight underline;
}
</style>

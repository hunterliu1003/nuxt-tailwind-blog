<template lang="pug">
  .flex
    h1
      nuxt-link(to="/").header-link Hunter Liu
    .flex-grow
    nav.flex
      h2
        nuxt-link(to="/about").header-link 關於我
      h2
        nuxt-link(to="/posts").header-link 文章列表
      h2
        nuxt-link(to="/tags").header-link 標籤列表
</template>

<style scoped>
.header-link {
  @apply block text-xl tracking-tight px-6 py-2;
}
</style>

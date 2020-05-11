<template lang="pug">
  header
    h1.text-center
      nuxt-link(to="/").header-link HunterLiu's Blog
    nav.flex.justify-center
      h2.hidden 關於我、文章列表和標籤列表
      nuxt-link(to="/about").header-link 關於我
      nuxt-link(to="/posts").header-link 文章列表
      nuxt-link(to="/tags").header-link 標籤列表
    .flex.justify-center
      a.header-link(rel="noopener noreferrer" href="https://www.facebook.com/hunterliu1003" target="_blank") Facebook
      a.header-link(rel="noopener noreferrer" href="https://github.com/hunterliu1003" target="_blank") Github
    .flex.justify-center
      button.px-4.py-2(@click="$colorMode.preference = 'system'") System
      button.px-4.py-2(@click="$colorMode.preference = 'light'") Light
      button.px-4.py-2(@click="$colorMode.preference = 'dark'") Dark
    hr.my-4
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

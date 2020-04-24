<template lang="pug">
  nav.flex
    nuxt-link(to='/').header-link Hunter Liu
    .flex-grow
    nuxt-link(to='/').header-link about me
    nuxt-link(to='/').header-link articles
    nuxt-link(to='/').header-link tags
</template>

<style scoped>
.header-link {
  @apply font-semibold text-xl tracking-tight px-6 py-2;
}
</style>

<template lang="pug">
  footer.p-4
    p.text-sm.font-normal.text-center
      | Copyright © {{ new Date().getFullYear() }} 
      a.footer-link(href="/") HunterLiu's Blog. 
    p.text-sm.font-normal.text-center
      | Icons made by 
      a.footer-link(href='https://www.flaticon.com/authors/freepik', title='Freepik') Freepik, 
      a.footer-link(href='https://www.flaticon.com/authors/pixel-perfect', title='Pixel perfect') Pixel perfect
      |  from 
      a.footer-link(href='https://www.flaticon.com/', title='Flaticon') flaticon
</template>

<style scoped>
.footer-link {
  @apply text-primary-dark underline;
}
.dark-mode .footer-link {
  @apply text-primary-base;
}
</style>

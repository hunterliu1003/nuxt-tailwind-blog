<template lang="pug">
  nav.fixed.bottom-0.right-0.z-30.mb-16
    button(v-show="showBtn" @click="scrollTop").focus_outline-none Top
</template>

<script>
export default {
  data: () => ({
    showBtn: false
  }),
  mounted() {
    this.scrollHandler()
  },
  methods: {
    scrollTop() {
      window.scrollTo(0, 0)
    },
    scrollHandler() {
      const self = this
      window.onscroll = function () {
        const startShowTop = 200
        if (document.body.scrollTop > startShowTop || document.documentElement.scrollTop > startShowTop) {
          self.showBtn = true
        } else {
          self.showBtn = false
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  padding-bottom: env(safe-area-inset-bottom);
}
.header-link {
  @apply flex-grow flex items-center justify-center h-full text-sm tracking-tight;
}
</style>

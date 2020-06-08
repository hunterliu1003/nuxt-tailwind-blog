<template lang="pug">
  .fixed.bottom-0.left-0.right-0.z-30
    button(v-show="showBtn" @click="scrollTop").block.w-10.h-10.ml-auto.mr-4.mb-4.font-sans.font-bold.text-3xl.leading-none.focus_outline-none.bg-gray-200.dark_bg-gray-800.rounded-lg ↑
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
      window.scrollTo({ top: 0, behavior: 'smooth' })
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

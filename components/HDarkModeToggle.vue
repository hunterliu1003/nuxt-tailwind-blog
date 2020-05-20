<template lang="pug">
  button.relative.flex.items-center.h-10.px-4.bg-gray-200.dark_bg-gray-800.dark_text-dark-onSurfaceSecondary.rounded-full.text-light-onSurfacePrimary.dark_text-dark-onSurfacePrimary.focus_outline-none.transition-colors.duration-300.ease-linear(@click.prevent='setCurrentTheme')
    span.relative.w-5.h-5
      SvgMoon(class="w-5 h-5 absolute" :class="$colorMode.preference === 'dark' ? 'show' : 'hide'" aria-label="Dark")
      SvgSun(class="w-5 h-5 absolute" :class="$colorMode.preference === 'light' ? 'show' : 'hide'" aria-label="Light")
</template>

<script>
export default {
  methods: {
    setCurrentTheme() {
      this.$colorMode.preference = this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style scoped>
.show {
  animation: show-icon 300ms forwards;
}

.hide {
  animation: hide-icon 300ms forwards;
}

@keyframes show-icon {
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
}

@keyframes hide-icon {
  from {
    opacity: 1;
    transform: scaleY(1);
  }
  to {
    opacity: 0;
    transform: scaleY(0);
  }
}
</style>

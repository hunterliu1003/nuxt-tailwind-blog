<template lang="pug">
  button.relative.flex.items-center.w-6.h-6.dark_text-dark-white.text-light-onSurfacePrimary.dark_text-dark-onSurfacePrimary.focus_outline-none(@click.prevent='setCurrentTheme' title='Color scheme' name='Color scheme')
    IconMoon.absolute.w-6.h-6(:class="$colorMode.preference === 'dark' ? 'show' : 'hide'" aria-label="Dark")
    IconSun.absolute.w-6.h-6(:class="$colorMode.preference === 'light' ? 'show' : 'hide'" aria-label="Light")
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

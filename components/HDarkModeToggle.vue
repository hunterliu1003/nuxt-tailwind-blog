<template lang="pug">
  button.relative.flex.items-center.h-10.px-4.bg-gray-200.dark_bg-dark-surface.dark_text-dark-onSurfaceSecondary.rounded-full.text-light-onSurfacePrimary.dark_text-dark-onSurfacePrimary.transition-colors.duration-300.ease-linear(@click='setCurrentTheme')
    span.relative.w-5.h-5.mr-2
      SvgMoon(class="w-5 h-5 absolute" :class="$colorMode.preference === 'dark' ? 'show' : 'hide'")
      SvgSystem(class="w-5 h-5 absolute" :class="$colorMode.preference === 'system' ? 'show' : 'hide'")
      SvgSun(class="w-5 h-5 absolute" :class="$colorMode.preference === 'light' ? 'show' : 'hide'")
    transition(name="from-bottom-to-bottom" mode="out-in")
      span.mr-1(v-if="$colorMode.preference === 'dark'" key="dark") Dark
      span.mr-1(v-if="$colorMode.preference === 'system'" key="system") System
      span.mr-1(v-else-if="$colorMode.preference === 'light'" key="light") Light
</template>

<script>
export default {
  methods: {
    setCurrentTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'system' ? 'light' : this.$colorMode.preference === 'light' ? 'dark' : 'system'
    }
  }
}
</script>

<style scoped>
button {
  outline: none;
}

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

.from-bottom-to-bottom-enter-active {
  opacity: 1;
  transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}

.from-bottom-to-bottom-leave-active {
  opacity: 1;
  transition: opacity 100ms, transform 100ms cubic-bezier(0.4, 0, 0.2, 1);
}

.from-bottom-to-bottom-enter {
  opacity: 0;
  transform: scaleY(0);
}

.from-bottom-to-bottom-leave-active {
  opacity: 0;
  transform: scaleY(0);
}
</style>

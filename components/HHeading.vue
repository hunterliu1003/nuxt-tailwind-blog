<template lang="pug">
  component(:is="tag")
    slot
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h1'
    }
  }
}
</script>

<style lang="scss" scoped>
h1,
h2,
h3 {
  @apply relative table;
  &:after {
    content: ' ';
    width: 80%;
    @apply block border-2 mt-2 mb-1 rounded;
  }
}
h1:after {
  @apply border-nuxt-lightgreen;
}
h2:after {
  @apply border-nuxt-green;
}
h3:after {
  @apply border-gray-600;
}
</style>

<template lang="pug">
	div(v-once v-html="value")
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
::v-deep h1 {
  @apply text-6xl;
}
::v-deep h2 {
  @apply text-5xl;
}
::v-deep h3 {
  @apply text-4xl;
}
::v-deep h4 {
  @apply text-3xl;
}
::v-deep h5 {
  @apply text-2xl;
}
::v-deep h6 {
  @apply text-xl;
}
::v-deep p {
  @apply text-base;
}
</style>

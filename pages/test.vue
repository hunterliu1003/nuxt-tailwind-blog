<template lang="pug">
  div(v-html="test")
</template>

<script>
import test from '@/content/test.md'

export default {
  computed: {
    test() {
      return test
    }
  }
}
</script>

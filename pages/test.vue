<template>
  <div v-html="test"></div>
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

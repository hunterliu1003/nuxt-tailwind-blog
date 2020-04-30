<template lang="pug">
	div(v-once v-html="value")
</template>

<script>
export default {
  name: 'HMarkdown',
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<template lang="pug">
  div
    HMarkdown(:value="obj")
    HMarkdown(:value='value.content')
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    obj() {
      return '```json\n' + JSON.stringify(this.value.data, null, 4) + '\n```'
    }
  }
}
</script>

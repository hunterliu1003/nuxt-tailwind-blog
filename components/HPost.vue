<template lang="pug">
  div
    HMarkdown(:value="'```json\\n' + JSON.stringify(value.data, null, 2) + '\\n```'")
    HMarkdown(:value='value.content')
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>

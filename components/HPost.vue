<template lang="pug">
	div
		h1 {{ value.data.title }}
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

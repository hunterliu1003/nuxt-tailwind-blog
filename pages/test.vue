<template>
  <div>
    <h1>{{ test.data.title }}</h1>
    <div v-html="$md.render(test.content)"></div>
  </div>
</template>

<script>
import matter from 'gray-matter'

export default {
  data: () => ({
    test: ''
  }),
  created() {
    this.test = matter(
      `---\ntitle: Hello\ntest: [123, '123', { test: 321, 123: 'test' }]\n---\n# Hello World!! {{class="mt-8"}}`
    )
  }
}
</script>

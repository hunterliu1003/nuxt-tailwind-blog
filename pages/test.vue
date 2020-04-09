<template>
  <div>
    <no-ssr>
      <codemirror v-model="test" :options="codemirrorOptions"></codemirror>
    </no-ssr>
    <h1>{{ obj.data.title }}</h1>
    <div v-html="$md.render(obj.content)"></div>
  </div>
</template>

<script>
import matter from 'gray-matter'

export default {
  data: () => ({
    test: `---\ntitle: HELLO\n---\n\n# Hello World!! {{class="mt-8"}}`,
    obj: { title: '' },
    codemirrorOptions: {
      tabSize: 2,
      mode: 'markdown',
      theme: 'monokai',
      lineNumbers: true,
      lineWrapping: true
    }
  }),
  watch: {
    test: {
      handler(val) {
        this.matter(val)
      },
      immediate: true
    }
  },
  methods: {
    matter(src) {
      const parse = matter(src)
      this.obj = parse
      return parse
    }
  }
}
</script>

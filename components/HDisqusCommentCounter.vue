<template lang="pug">
  a(:href="`${href}#disqus_thread`") 0 留言
</template>

<script>
export default {
  props: {
    shortname: {
      type: String,
      required: true
    }
  },
  data: () => ({
    href: ''
  }),
  mounted() {
    this.href = window.location.href
    if (window.DISQUSWIDGETS) {
      window.DISQUSWIDGETS.getCount({ reset: true })
    } else {
      this.loadDisqusCount()
    }
  },
  methods: {
    loadDisqusCount() {
      const d = document
      const s = d.createElement('script')
      s.setAttribute('id', 'dsq-count-scr')
      s.type = 'text/javascript'
      s.async = true
      s.src = `//${this.shortname}.disqus.com/count.js`
      ;(d.head || d.body).appendChild(s)
    }
  }
}
</script>

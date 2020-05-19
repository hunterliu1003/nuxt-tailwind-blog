<template lang="pug">
  #disqus_thread
</template>

<script>
export default {
  props: {
    shortname: {
      type: String,
      required: true
    },
    identifier: {
      type: String,
      default: ''
    }
  },
  watch: {
    '$colorMode.preference'() {
      setTimeout(() => {
        // wait until colorMode transition end
        this.initDisqus()
      }, 300)
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    initDisqus() {
      if (window.DISQUS) {
        this.resetDisqus(window.DISQUS)
      } else {
        this.loadDisqus()
      }
    },
    resetDisqus(disqus) {
      const self = this
      disqus.reset({
        reload: true,
        config() {
          self.setBaseConfig(this)
        }
      })
    },
    loadDisqus() {
      const self = this
      window.disqus_config = function () {
        self.setBaseConfig(this)
      }
      const d = document
      const s = d.createElement('script')
      s.setAttribute('id', 'embed-disqus')
      s.setAttribute('data-timestamp', +new Date())
      s.type = 'text/javascript'
      s.async = true
      s.src = `//${this.shortname}.disqus.com/embed.js`
      ;(d.head || d.body).appendChild(s)
    },
    init() {
      // 通過檢查 window 物件確認是否在瀏覽器中運行
      const runningOnBrowser = typeof window !== 'undefined'
      // 通過檢查 scroll 事件 API 和 User-Agent 來匹配爬蟲
      const isBot =
        (runningOnBrowser && !('onscroll' in window)) ||
        (typeof navigator !== 'undefined' && /(gle|ing|ro|msn)bot|crawl|spider|yand|duckgo/i.test(navigator.userAgent))
      // 檢查當前瀏覽器是否支援 IntersectionObserver API
      const supportsIntersectionObserver = runningOnBrowser && 'IntersectionObserver' in window

      setTimeout(() => {
        if (!isBot && supportsIntersectionObserver) {
          // 當前環境不是爬蟲、並且瀏覽器兼容 IntersectionObserver API
          const disqusObserver = new IntersectionObserver(
            entries => {
              // 當前視窗中已出現 Disqus 評論框所在位置
              if (entries[0].isIntersecting) {
                // 加載 Disqus
                this.initDisqus()
                // 停止當前的 Observer
                disqusObserver.disconnect()
              }
            },
            { threshold: [0] }
          )
          // 設置讓 Observer 觀察 #disqus_thread 元素
          disqusObserver.observe(document.getElementById('disqus_thread'))
        } else {
          // 當前環境是爬衝、或當前瀏覽器不兼容 IntersectionObserver API
          // 直接加載 Disqus
          this.initDisqus()
        }
      }, 0)
    },
    setBaseConfig(disqusConfig) {
      disqusConfig.page.url = this.$el.baseURI
      disqusConfig.page.identifier = this.identifier
    }
  }
}
</script>

import shrinkRay from 'shrink-ray-current'
import VueAutomaticImportPlugin from 'vue-automatic-import-loader/lib/plugin'
import { getAllRoutes } from './utils/docs'
const allRoutes = getAllRoutes()

require('dotenv').config()

export default {
  server: {
    host: '0.0.0.0'
  },
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'zh-Hant-TW'
    },
    titleTemplate: titleChunk => {
      return titleChunk ? `${titleChunk} | HunterLiu` : `HunterLiu`
    },
    meta: (() => {
      const title = "HunterLiu's Blog"
      const descriptionContent =
        '我不是獵頭，但我叫 Hunter，是個前端工程師，雖然沒有社交障礙，但對於技術之外的話題，的確會讓我有點不自在，如果想討論技術可以加我的 Facebook，並簡單介紹一下你是誰。'
      return [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: process.env.GOOGLE_SITE_VERIFICATION },
        { hid: 'description', name: 'description', content: descriptionContent },
        { hid: 'itemprop:name', itemprop: 'name', content: title },
        { hid: 'itemprop:description', itemprop: 'description', content: descriptionContent },
        // Open Graph
        { hid: 'og:site_name', property: 'og:site_name', content: title },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: descriptionContent },
        { hid: 'og:type', property: 'og:type', content: 'website' }
      ]
    })(),
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    bodyAttrs: {
      class: [
        'bg-light-surface dark_bg-dark-surface text-light-onSurfacePrimary dark_text-dark-onSurfacePrimary transition-colors duration-300 ease-linear'
      ]
    }
  },
  loading: false,
  serverMiddleware: [{ path: '/api', handler: '@/serverMiddleware/api' }],
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.(css|vue)$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  render: {
    // generate 關閉 resourceHints
    resourceHints: process.env.BUILD_MODE !== 'STATIC',
    // brotli 壓縮
    compressor: shrinkRay(),
    // 啟用 http2
    http2: {
      push: true
    }
  },
  plugins: [
    // handle requests
    '~/plugins/fetch.js',
    '~/plugins/jsonld',
    '~/plugins/filter'
  ],
  build: {
    // extractCSS: true,
    plugins: [
      new VueAutomaticImportPlugin({
        match(originalTag, { kebabTag, camelTag, path, component }) {
          if (kebabTag.startsWith('h-')) {
            return [camelTag, `import ${camelTag} from '@/components/${camelTag}.vue'`]
          } else if (kebabTag.startsWith('svg-')) {
            return [camelTag, `import ${camelTag} from '@/components/svg/${camelTag.replace('Svg', '')}.vue'`]
          }
        }
      })
    ],
    babel: {
      presets: []
    }
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/gtm',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/router',
    '@nuxtjs/color-mode'
  ],
  modules: ['@nuxtjs/dotenv', '@nuxtjs/robots', '@nuxtjs/sitemap', 'nuxt-compress', 'nuxt-payload-extractor'],
  routerModule: {
    /* module options */
    keepDefaultRouter: true
  },
  gtm: {
    id: process.env.GTM_ID,
    pageTracking: true
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },
  env: {
    BASE_URL: process.env.BASE_URL
  },
  robots: [
    {
      UserAgent: '*',
      Sitemap: process.env.BASE_URL + '/sitemap.xml',
      Allow: '/'
    }
  ],
  sitemap: {
    hostname: process.env.BASE_URL,
    routes: ['/', ...allRoutes]
  },
  generate: {
    routes: ['/', ...allRoutes]
  },
  'nuxt-compress': {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  }
}

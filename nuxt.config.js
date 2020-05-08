import shrinkRay from 'shrink-ray-current'
import VueAutomaticImportPlugin from 'vue-automatic-import-loader/lib/plugin'
import cheerio from 'cheerio'
import { getAllRoutes } from './utils/content'
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
      const descriptionContent = '我不是獵頭，但我叫 Hunter，是個前端工程師，熱愛研究和分享技術，歡迎交流'
      return [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'google-site-verification', content: process.env.GOOGLE_SITE_VERIFICATION },
        { hid: 'description', name: 'description', content: descriptionContent },
        { itemprop: 'name', content: 'HunterLiu' },
        { itemprop: 'description', content: descriptionContent },
        { property: 'og:title', content: 'HunterLiu' },
        { property: 'og:description', content: descriptionContent },
        { property: 'og:site_name', content: descriptionContent },
        { property: 'og:type', content: 'article' }
      ]
    })(),
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: false,
  css: ['prismjs/themes/prism-tomorrow.css'],
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
    extractCSS: true,
    plugins: [
      new VueAutomaticImportPlugin({
        match(originalTag, { kebabTag, camelTag, path, component }) {
          if (kebabTag.startsWith('h-')) {
            return [camelTag, `import ${camelTag} from '@/components/${camelTag}.vue'`]
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
    '@nuxtjs/router'
  ],
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/robots',
    /* 
    fix @nuxt/sitemap via SRR not working on zeit now #106 
    https://github.com/nuxt-community/sitemap-module/issues/106#issuecomment-603533758
    */
    '@nuxtjs/sitemap',
    'nuxt-compress' // nuxt-compress is a simple asset compression module for Gzip and Brotili
  ],
  gtm: {
    id: process.env.GTM_ID,
    pageTracking: true
  },
  tailwindcss: {
    purgeCSSInDev: false
  },
  purgeCSS: {
    paths: ['content/**/*.md'],
    whitelistPatternsChildren: [
      /token/, // for prism
      /pre/, // for prism
      /code/ // for prism
    ]
  },
  routerModule: {
    /* module options */
    keepDefaultRouter: true
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
    routes: allRoutes
  },
  generate: {
    routes: allRoutes
  },
  hooks: {
    'generate:page': page => {
      const doc = cheerio.load(page.html)
      doc(`body script`).remove()
      page.html = doc.html()
    }
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

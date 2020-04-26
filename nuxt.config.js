import shrinkRay from 'shrink-ray-current'
import VueAutomaticImportPlugin from 'vue-automatic-import-loader/lib/plugin'
import cheerio from 'cheerio'
import { postsRoutes } from './utils/posts'

require('dotenv').config()

export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'zh-Hant-TW'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
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
  build: {
    extractCSS: true,
    plugins: [
      new VueAutomaticImportPlugin({
        match(originalTag, { kebabTag, camelTag, path, component }) {
          if (kebabTag.startsWith('h-')) {
            return [
              camelTag,
              `import ${camelTag} from '@/components/${camelTag}.vue'`
            ]
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
    id: process.env.GTM_ID
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
    routes: postsRoutes
  },
  generate: {
    routes: postsRoutes
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

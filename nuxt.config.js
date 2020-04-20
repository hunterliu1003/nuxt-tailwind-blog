import shrinkRay from 'shrink-ray-current'
import VueAutomaticImportPlugin from 'vue-automatic-import-loader/lib/plugin'
import { getRoutes } from './utils/routerGenerator'
const postsRoutes = getRoutes('content', '/posts')

export default {
  mode: 'universal',
  head: {
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
  css: [
    /* codemirror start */
    'codemirror/lib/codemirror.css',
    'codemirror/theme/monokai.css'
    /* codemirror end */
  ],
  plugins: [
    { src: '@/plugins/codemirror', ssr: false },
    { src: '@/plugins/prism' }
  ],
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
    ]
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/router'
  ],
  modules: [
    '@nuxtjs/markdownit',
    '@nuxtjs/dotenv',
    '@nuxtjs/robots',
    /* 
    fix @nuxt/sitemap via SRR not working on zeit now #106 
    https://github.com/nuxt-community/sitemap-module/issues/106#issuecomment-603533758
    */
    '@nuxtjs/sitemap',
    'nuxt-compress' // nuxt-compress is a simple asset compression module for Gzip and Brotili
  ],
  tailwindcss: {
    purgeCSSInDev: false
  },
  purgeCSS: {
    paths: ['content/**/*.md'],
    whitelistPatternsChildren: [
      /CodeMirror/, // for codemirror
      /cm-/, // for codemirror
      /token/, // for prism
      /pre/, // for prism
      /code/ // for prism
    ]
  },
  routerModule: {
    /* module options */
    keepDefaultRouter: true
  },
  markdownit: {
    injected: true,
    html: true,
    linkify: true,
    breaks: true,
    typographer: true,
    use: [
      [
        'markdown-it-attrs',
        {
          leftDelimiter: '{{',
          rightDelimiter: '}}'
        }
      ],
      'markdown-it-playground',
      [
        'markdown-it-anchor',
        {
          level: 1,
          permalink: true,
          permalinkClass: 'md-anchor',
          permalinkSymbol: '#',
          permalinkBefore: true
        }
      ]
    ]
  },
  robots: [
    {
      UserAgent: '*',
      Sitemap: 'https://nuxt-tailwind-blog.now.sh/sitemap.xml',
      Allow: '/'
    }
  ],
  sitemap: {
    hostname: 'https://nuxt-tailwind-blog.now.sh',
    routes: postsRoutes
  },
  generate: {
    routes: postsRoutes
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

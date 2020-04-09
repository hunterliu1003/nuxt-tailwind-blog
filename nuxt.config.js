const shrinkRay = require('shrink-ray-current')
const VueAutomaticImportPlugin = require('vue-automatic-import-loader/lib/plugin')

module.exports = {
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
  plugins: [{ src: '@/plugins/codemirror', ssr: false }],
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
    '@nuxtjs/dotenv',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/markdownit',
    'nuxt-compress', // nuxt-compress is a simple asset compression module for Gzip and Brotili
    '@nuxtjs/robots',
    '@nuxtjs/sitemap' // declare the sitemap module at end of array
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
  tailwindcss: {
    purgeCSSInDev: true
  },
  purgeCSS: {
    paths: ['content/**/*.md'],
    whitelistPatternsChildren: [/CodeMirror/, /cm-/]
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
      ]
    ]
  },
  'nuxt-compress': {
    gzip: {
      cache: true
    },
    brotli: {
      threshold: 10240
    }
  },
  robots: [
    {
      UserAgent: 'Googlebot',
      Sitemap: 'https://dist.hunterliu1003.now.sh/sitemap.xml',
      Allow: '/'
    }
  ],
  sitemap: {
    hostname: 'https://dist.hunterliu1003.now.sh'
  }
}

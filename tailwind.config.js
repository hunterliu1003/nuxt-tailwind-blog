const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'content/**/*.md',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  separator: '_',
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      colors: {
        nuxt: {
          gray: '#2F495E',
          lightgreen: '#00C58E',
          green: '#108775'
        },
        primary: {
          base: '#00C58E',
          light: '#00E0A1',
          dark: '#07A377'
        },
        light: {
          surface: '#F8FAFC',
          onSurfacePrimary: '#2F495E',
          onSurfaceSecondary: '#606F7B',
          elevatedSurface: defaultTheme.colors.white,
          border: defaultTheme.colors.gray['300']
        },
        dark: {
          surface: '#2C3E50',
          onSurfacePrimary: '#F5F7FA',
          onSurfaceSecondary: '#B8C2CC',
          elevatedSurface: '#2F495E',
          border: defaultTheme.colors.gray['600']
        }
      }
    }
  },
  variants: {
    margin: ['responsive', 'last'],
    backgroundColor: ['dark', 'dark-hover'],
    borderColor: ['dark', 'dark-focus'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [require('tailwindcss-dark-mode')()]
}

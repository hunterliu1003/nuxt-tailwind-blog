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
    extend: {}
  },
  variants: {
    margin: ['last'],
    backgroundColor: ['dark', 'dark-hover'],
    borderColor: ['dark', 'dark-focus'],
    textColor: ['dark', 'dark-hover', 'dark-active']
  },
  plugins: [require('tailwindcss-dark-mode')()]
}

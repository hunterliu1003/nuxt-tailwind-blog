module.exports = {
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

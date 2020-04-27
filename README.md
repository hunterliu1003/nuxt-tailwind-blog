# nuxt-tailwind-blog

This project was inspired by [VuePress](https://v1.vuepress.vuejs.org/), but based on [Nuxt.js](https://nuxtjs.org/)

## Introduction

> Supporting nuxt universal mode and static hosting

This side project using the following packages:

- [markdown-it](https://github.com/markdown-it/markdown-it): This project uses markdown-it as the Markdown renderer
- [Prism](https://github.com/markdown-it/markdown-it): This project uses Prism to highlight language syntax in Markdown code blocks
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework
- [PurgeCSS](https://purgecss.com/): A tool to remove unused CSS
- [vue-automatic-import-loader](https://github.com/hunterliu1003/vue-automatic-import-loader): A tool to automatically import Vue components by using a match function
- [@nuxtjs/gtm](https://github.com/nuxt-community/gtm-module): Google Tag Manager Module for Nuxt.js
- [@nuxtjs/robots](https://github.com/nuxt-community/robots-module): a middleware to generate a robots.txt file 
- [@nuxtjs/sitemap](https://github.com/nuxt-community/sitemap-module): Automatically generate or serve dynamic sitemap.xml

## Usage
At first, you should create `.env` file at root directory.

The following environment variables are necessary:
```
BASE_URL=http://localhost:3000
GTM_ID=GTM-XXX
GOOGLE_SITE_VERIFICATION=XXXXXXXXXXXXXXXXXXXXX
```

If you don't need `GTM_ID` and `GOOGLE_SITE_VERIFICATION`, you can turn off in nuxt.config.js

## Nuxt Generate Mode

Before you generate static html by script `yarn generate`, you should run script `yarn start` for running the backend API.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## [Demo](https://hunterliu.now.sh)


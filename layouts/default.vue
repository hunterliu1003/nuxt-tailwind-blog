<template lang="pug">
  div.flex.flex-col.min-h-screen.bg-light-elevatedSurface.dark_bg-dark-elevatedSurface
    headroom
      h-header
    main.container.mx-auto.px-4.lg_px-8
      nuxt.nuxt-route
    h-footer.mt-auto
    headroom(footroom)
      h-mobile-main-navigation
    h-scroll-top.container.mx-auto.lg_px-8
</template>

<script>
import { headroom } from 'vue-headroom'

export default {
  name: 'LayoutDefault',
  components: {
    headroom
  },
  head() {
    return {
      link: [
        { rel: 'preconnect', href: 'https://www.google-analytics.com' },
        { rel: 'preconnect', href: 'http://hunterliu-blog.disqus.com' },
        { rel: 'preconnect', href: 'https://hunterliu-blog.disqus.com' },
        { rel: 'preconnect', href: 'https://www.googletagmanager.com' }
      ]
    }
  }
}
</script>

<style lang="scss">
.nuxt-route {
  min-height: calc(100vh - 48px - 80px - 80px);
}
@screen md {
  .nuxt-route {
    min-height: calc(100vh - 48px - 80px - 16px);
  }
}

.nuxt-content {
  a {
    word-break: break-word;
  }
  code {
    padding: 1px 6px;
    border-radius: 4px;
  }
}
.nuxt-content {
  h2,
  h3,
  p {
    color: theme('colors.light.onSurfacePrimary');
  }
  blockquote {
    color: theme('colors.light.onSurfaceSecondary');
  }
  a {
    @apply text-primary-dark underline;
    code {
      @apply text-primary-dark underline;
    }
  }
  // inline code snippet
  code {
    @apply bg-gray-100 text-red-700;
  }
  pre code {
    color: #e1e8f5;
  }
}

.dark-mode .nuxt-content {
  h2,
  h3,
  p {
    color: theme('colors.dark.onSurfacePrimary');
  }
  blockquote {
    color: theme('colors.dark.onSurfaceSecondary');
  }
  a {
    @apply text-nuxt-lightgreen;
    code {
      @apply text-nuxt-lightgreen;
    }
  }
  // inline code snippet
  code {
    background-color: #272f3f;
    color: #e1e8f5;
  }
  pre code {
    background: none;
  }
}

.nuxt-content {
  h2,
  h3 {
    > a:first-of-type {
      @apply text-light-onSurfacePrimary;
    }
  }
}

.dark-mode .nuxt-content {
  h2,
  h3 {
    > a:first-of-type {
      @apply text-dark-onSurfacePrimary;
    }
  }
}

.nuxt-content {
  img {
    @apply rounded;
    margin: auto;
  }
  video {
    width: 100%;
  }
  h2,
  h3 {
    @apply mb-8 -mt-16 pt-24;
    > a:first-of-type {
      @apply no-underline font-bold;
    }
    > a:first-of-type::before {
      content: '#';
      @apply text-nuxt-lightgreen font-normal pr-1;
    }
    &:hover {
      > a:first-of-type::before {
        @apply opacity-100;
      }
    }
    &::after {
      content: ' ';
      width: 100%;
      @apply block border mt-2 mb-1;
    }
  }
  h2 {
    &::after {
      @apply border-nuxt-green;
    }
    code {
      @apply text-xl;
    }
  }
  h3 {
    &::after {
      @apply border-gray-600;
    }
    code {
      @apply text-lg;
    }
  }
  @screen md {
    h2,
    h3 {
      > a:first-of-type::before {
        @apply absolute -ml-5 opacity-0;
      }
    }
  }
}

.nuxt-content {
  p {
    @apply leading-relaxed py-1 mb-2;
  }
  li p {
    @apply inline-block;
  }
  blockquote {
    @apply italic leading-loose;
  }
  code {
    @apply p-1 not-italic rounded text-sm;
  }
  a {
    overflow-wrap: break-word;
    &:hover {
      @apply underline;
    }
  }
  // code snippet block
  pre {
    @apply rounded p-2 my-2 overflow-auto;
    code {
      @apply bg-transparent;
    }
  }
  b,
  strong {
    @apply font-bold;
  }
}

// lists
.nuxt-content {
  ul,
  ol {
    @apply list-inside py-1 pl-1;
    li {
      @apply py-2;
    }
    ul,
    ol {
      @apply pl-4 pt-1;
    }
  }
  ol {
    @apply list-decimal;
  }
  ul {
    @apply list-disc;
  }
}

// table
.nuxt-content {
  table {
    @apply block w-full overflow-auto border border-collapse rounded;
  }
  th,
  td {
    @apply px-3 py-1 border;
  }
}
</style>

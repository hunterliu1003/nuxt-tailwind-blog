<template lang="pug">
  div.flex.flex-col.min-h-screen.bg-light-elevatedSurface.dark_bg-dark-elevatedSurface
    HHeader
    main.w-full.max-w-3xl.mx-auto.px-4.pb-16.pt-16.md_pt-24
      nuxt.pt-8
    HFooter.mt-auto.mb-16.md_mb-0
    HMobileMainNavigation
    HScrollTop.w-full.max-w-3xl.mx-auto.mb-16.md_mb-0
</template>

<script>
export default {
  name: 'LayoutDefault',
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
.nuxt-content {
  a {
    word-break: break-word;
  }
  code {
    padding: 1px 6px;
    border-radius: 4px;
  }
  pre {
    @apply transition-colors duration-200 ease-linear;
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
  img {
    @apply rounded;
    margin: auto;
  }
  video {
    width: 100%;
  }
  h2,
  h3 {
    @apply relative table mb-8 -mt-16 pt-24 transition-colors duration-300 ease-linear;
    > a:first-of-type {
      @apply no-underline text-white font-bold;
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
      width: 80%;
      @apply block border-2 mt-2 mb-1 rounded;
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
      @apply -mt-24 pt-32;
      > a:first-of-type::before {
        @apply absolute -ml-4 opacity-0;
      }
    }
  }
}

.nuxt-content {
  p {
    @apply leading-relaxed py-1 mb-2 transition-colors duration-300 ease-linear;
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

// prismjs theme for light mode
.light-mode .nuxt-content {
  /**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

  code[class*='language-'],
  pre[class*='language-'] {
    color: black;
    background: none;
    // text-shadow: 0 1px white;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection,
  code[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection {
    // text-shadow: none;
    background: #b3d4fc;
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection,
  code[class*='language-']::selection,
  code[class*='language-'] ::selection {
    // text-shadow: none;
    background: #b3d4fc;
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      // text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #f5f2f0;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: slategray;
  }

  .token.punctuation {
    color: #999;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #905;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #690;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #9a6e3a;
    background: hsla(0, 0%, 100%, 0.5);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #07a;
  }

  .token.function,
  .token.class-name {
    color: #dd4a68;
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
}
// prismjs theme for dark mode
.dark-mode .nuxt-content {
  /**
 * prism.js tomorrow night eighties for JavaScript, CoffeeScript, CSS and HTML
 * Based on https://github.com/chriskempson/tomorrow-theme
 * @author Rose Pritchard
 */

  code[class*='language-'],
  pre[class*='language-'] {
    color: #ccc;
    background: none;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 1em;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    background: #2d2d2d;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #f08d49;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #cc99cd;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
}
</style>

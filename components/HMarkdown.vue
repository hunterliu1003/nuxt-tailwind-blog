<template lang="pug">
	div(v-once v-html="value")
</template>

<script>
export default {
  name: 'HMarkdown',
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
div ::v-deep {
  a {
    word-break: break-word;
  }
  code {
    padding: 1px 6px;
    border-radius: 4px;
  }
}
div ::v-deep {
  h2,
  h3,
  p {
    color: theme('colors.light.onSurfacePrimary');
  }
  blockquote {
    color: theme('colors.light.onSurfaceSecondary');
  }
  & a {
    @apply text-nuxt-lightgreen;

    & code {
      @apply text-nuxt-lightgreen;
      &:hover {
        @apply text-nuxt-green;
      }
    }
  }
  // inline code snippet
  & code {
    @apply bg-gray-100 text-red-500;
  }
  & pre {
    background-color: theme('colors.dark.elevatedSurface');
    code {
      @apply bg-transparent;
      color: theme('colors.dark.onSurfacePrimary');
    }
  }
}

.dark-mode div ::v-deep {
  h2,
  h3,
  p {
    color: theme('colors.dark.onSurfacePrimary');
  }
  & blockquote {
    color: theme('colors.dark.onSurfaceSecondary');
  }
  & a {
    @apply text-nuxt-lightgreen;
    & code {
      @apply text-nuxt-lightgreen;
      &:hover {
        @apply text-nuxt-green;
      }
    }
  }
  // inline code snippet
  & code {
    @apply bg-gray-800;
    color: #e1e8f5;
  }
  // code snippet block
  & pre {
    background-color: #1e344c;
    code {
      @apply bg-transparent;
      color: theme('colors.dark.onSurfacePrimary');
    }
  }
}

div ::v-deep {
  img {
    @apply rounded;
    margin: auto;
  }
  video {
    width: 100%;
  }
  & h2 {
    @apply relative table my-8;
    &::after {
      content: ' ';
      width: 80%;
      @apply block border-2 border-nuxt-green mt-2 mb-1 rounded;
    }
    & code {
      @apply text-xl;
    }
  }
  & h3 {
    @apply relative table my-8;
    &::after {
      content: ' ';
      width: 80%;
      @apply block border-2 border-gray-600 mt-2 mb-1 rounded;
    }
    & code {
      @apply text-lg;
    }
  }
}

div ::v-deep {
  p {
    @apply leading-relaxed py-1 mb-2 transition-colors duration-300 ease-linear;
  }
  & li p {
    @apply inline-block;
  }
  & blockquote {
    @apply italic leading-loose;
  }
  & code {
    @apply p-1 not-italic rounded text-sm;
  }
  & a {
    overflow-wrap: break-word;
    &:hover {
      @apply underline;
    }
  }
  // code snippet block
  & pre {
    @apply rounded p-2 my-2 overflow-auto;
    & code {
      @apply bg-transparent;
    }
  }
  & b,
  & strong {
    @apply font-bold;
  }
}

// lists
div ::v-deep {
  & ul,
  & ol {
    @apply list-inside py-1 pl-1;
    & li {
      @apply py-2;
    }
    & ul,
    & ol {
      @apply pl-4 pt-1;
    }
  }
  & ol {
    @apply list-decimal;
  }
  & ul {
    @apply list-disc;
  }
}
</style>

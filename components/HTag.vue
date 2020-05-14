<template lang="pug" functional>
  nuxt-link.px-2.py-1.border-solid.border.border-black.dark_border-white.rounded(:to="`/tags/${props.tag}`" :class="data.staticClass") {{ props.tag }}
</template>

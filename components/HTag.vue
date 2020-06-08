<template lang="pug" functional>
  NLink.px-1.md_px-2.md_py-1.border.border-solid.border-light-onSurfacePrimary.dark_border-dark-onSurfacePrimary.rounded.text-sm(:to="`/tags/${props.tag}`" :class="data.staticClass") {{ props.tag }}
</template>

<template>
  <div class="w-full lg_w-1/5 py-8 lg_py-0 lg_pl-8">
    <div class="lg_sticky lg_top-0 lg_pt-24 lg_-mt-24">
      <h3 class="mb-3 lg_mb-2 text-gray-600 dark_text-gray-500 uppercase tracking-wide font-bold text-lg lg_text-sm">
        大綱
      </h3>
      <nav>
        <scrollactive highlight-first-item :click-to-scroll="false" active-class="active-toc" tag="ul">
          <li
            v-for="link of toc"
            :key="link.id"
            class="text-gray-600 dark_text-gray-500"
            :class="{
              'border-t border-dashed border-gray-600 dark_border-gray-500 first_border-t-0 font-semibold':
                link.depth === 2
            }"
          >
            <a
              :href="`#${link.id}`"
              class="block text-lg scrollactive-item transition-transform ease-in-out duration-200 transform hover_translate-x-1 hover_no-underline"
              :class="{
                'py-2 font-bold': link.depth === 2,
                'ml-2 pb-2': link.depth === 3
              }"
              >{{ link.text }}</a
            >
          </li>
        </scrollactive>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.active-toc {
  @apply text-primary-dark;
}
.dark-mode .active-toc {
  @apply text-green-500;
}
</style>

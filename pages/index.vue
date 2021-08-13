<template>
  <div class="px-4 pb-12">
    <div class="relative w-full flex flex-col my-4 pt-12">
      <p class="page-title" :class="[japaneseFontFamily]">生字測試</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
      <div
        v-for="(page, index) in $store.state.googleSheetPages"
        :key="page.pageName"
      >
        <NuxtLink
          :to="'/quiz/' + (index + 1)"
          class="button w-full"
          :class="[japaneseFontFamily]"
          >{{ page.title }}</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    japaneseFontFamily() {
      switch (this.$store.state.settings.preferredJapaneseFontFamily) {
        case "sans":
          return "font-sans";
        case "serif":
          return "font-serif";
        default:
          return "font-sans";
      }
    },
  },
  mounted() {},
};
</script>

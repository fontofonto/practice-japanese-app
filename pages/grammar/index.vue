<template>
  <div class="px-4 pb-12">
    <div class="relative w-full flex flex-col my-4 pt-12">
      <p class="page-title" :class="[japaneseFontFamily]">文法溫習</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
      <div v-for="page in pages" :key="page.title">
        <NuxtLink
          :to="'/grammar/' + page.documentName"
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
  data: () => ({
    pages: [
      {
        title: "動詞類型",
        documentName: "verb",
      },
      {
        title: "形容詞構文・い形容詞",
        documentName: "i-adjective-tenses",
      },
      {
        title: "形容詞構文・な形容詞",
        documentName: "na-adjective-tenses",
      },
    ],
  }),
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
};
</script>

<style lang="postcss" scoped>
.button {
  @apply inline-flex justify-center items-center p-4 bg-blue-500 text-white font-semibold rounded-2xl hover:(bg-blue-400) active:(bg-blue-600) transition duration-100;
}
.dark .button {
  @apply bg-blue-400 text-blue-gray-900;
}
.page-title {
  @apply text-4xl font-semibold text-blue-gray-800 whitespace-nowrap;
}
.dark .page-title {
  @apply text-blue-gray-300;
}
</style>
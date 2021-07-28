<template>
  <div class="px-4 pb-12">
    <div class="relative w-full flex flex-col my-4 pt-12">
      <p
        class="text-4xl font-semibold text-blue-gray-800 whitespace-nowrap"
        :class="[japaneseFontFamily]"
      >
        文法溫習
      </p>
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
        title: "形容詞構文・い形容詞",
        documentName: "i-adjective-tenses",
      },
    ],
  }),
};
</script>
<template>
  <div class="w-screen h-full max-h-screen pt-14 flex flex-col">
    <div class="navigation fixed top-0 left-0 w-full py-2 px-6">
      <button @click="$router.go(-1)" class="px-1 py-2 inline-flex space-x-2">
        <IconBackArrow class="fill-blue-gray-700" />
        <span
          class="text-blue-gray-700 font-semibold"
          :class="[japaneseFontFamily]"
          >返回</span
        >
      </button>
    </div>
    <div
      class="
        flex-grow flex flex-col
        items-center
        overflow-y-scroll
        px-4
        content
      "
    >
      <article class="prose">
        <h1>{{ doc.title }}</h1>
        <nuxt-content :document="doc" class="pb-14" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  layout: "layoutWithoutBottomNavigationBar",
  async asyncData({ params, $content }) {
    const doc = await $content(params.slug).fetch();

    return { doc };
  },
};
</script>

<style lang="postcss" scoped>
</style>
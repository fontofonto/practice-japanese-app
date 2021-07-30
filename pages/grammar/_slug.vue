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
      <article class="content-container prose">
        <h1 :class="[japaneseFontFamily]">{{ doc.title }}</h1>
        <nuxt-content
          :document="doc"
          class="pb-14"
          :class="[japaneseFontFamily]"
        />
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

<style lang="postcss">
.nuxt-content {
  @apply text-blue-gray-800;
}
.nuxt-content h1,
.content-container h1 {
  @apply border-b-8 border-red-200 inline;
}
.nuxt-content blockquote {
  @apply bg-blue-gray-50 p-1 m-4;
}
.nuxt-content blockquote * {
  @apply not-italic;
}
.nuxt-content blockquote p:before,
.nuxt-content blockquote p:after {
  content: "";
  display: none;
}
</style>
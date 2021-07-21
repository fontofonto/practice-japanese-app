<template>
  <div class="w-screen h-full max-h-fill-available flex flex-col">
    <div class="navigation fixed top-0 left-0 w-full py-2 px-6 bg-white">
      <button @click="$router.go(-1)" class="px-1 py-2 inline-flex space-x-2">
        <IconBackArrow class="fill-blue-gray-700" />
        <span
          class="text-blue-gray-700 font-semibold"
          :class="[japaneseFontFamily]"
          >返回</span
        >
      </button>
    </div>
    <div class="intro-page flex-grow flex flex-col items-center py-14">
      <div
        class="
          flex flex-col
          justify-center
          items-center
          w-full
          px-10
          py-6
          border-b border-bg-blue-gray-200
        "
      >
        <h1
          class="text-lg text-red-400 font-bold my-2 whitespace-nowrap"
          :class="[japaneseFontFamily]"
        >
          單字表 {{ slug }}
        </h1>
        <h2
          class="
            text-2xl text-blue-gray-800
            font-semibold
            my-2
            whitespace-nowrap
          "
          :class="[japaneseFontFamily]"
        >
          {{ $store.state.googleSheetPages[slug - 1].title }}
        </h2>
      </div>
      <div
        v-for="(word, index) in googleSheetJson"
        :key="'word' + index"
        class="flex flex-row w-full py-2 space-x-1 text-base"
        :class="{ 'bg-blue-gray-100': index % 2 }"
      >
        <div class="w-5/12 font-semibold pl-4" :class="[japaneseFontFamily]">
          {{ word.phonogram }}
        </div>
        <div class="w-4/12 font-semibold" :class="[japaneseFontFamily]">
          {{ word.logogram }}
        </div>
        <div class="w-3/12 pr-4">
          {{ word.meaning }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "layoutWithoutBottomNavigationBar",
  head() {
    return {
      title:
        this.$store.state.googleSheetPages[this.slug - 1].title +
        "單字溫習 | 日文溫習",
    };
  },
  async asyncData({ params }) {
    // get the dynamic route
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
  },
  async fetch() {
    // fetch the corresponding word bank
    this.googleSheetJson = await fetch(
      "/data/" + this.$store.state.googleSheetPages[this.slug - 1].filename
    ).then((res) => {
      return res.json();
    });
  },
  data() {
    return {
      googleSheetJson: [],
    };
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
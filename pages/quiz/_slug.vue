<template>
  <div>
    <NuxtLink to="/">Back</NuxtLink>
    <h1>Quiz {{ slug }}</h1>
    <h2>{{ $store.state.googleSheetPages[slug - 1].title }}</h2>

    <div class="w-full">
      <div
        class="flex"
        v-for="(word, index) in googleSheetJson"
        :key="`word${index}`"
      >
        <span class="w-1/3">{{ word.phonogram }} </span>
        <span class="w-1/3">{{ word.logogram }} </span>
        <span class="w-1/3">{{ word.meaning }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      googleSheetJson: {},
    };
  },
  async asyncData({ params }) {
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
  },
  async fetch() {
    this.googleSheetJson = await fetch("/data/quiz" + this.slug + ".json").then(
      (res) => {
        console.log(res);
        return res.json();
      }
    );
  },
};
</script>
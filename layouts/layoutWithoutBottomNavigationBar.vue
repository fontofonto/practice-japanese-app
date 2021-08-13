<template>
  <div class="page-layout">
    <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    updateUITheme(e) {
      this.$store.dispatch("setUITheme");
    },
  },
  beforeMount() {
    this.$store.dispatch("loadSettingsFromLocalStorage");
  },
  mounted() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", this.updateUITheme);
  },
  destroyed() {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .removeEventListener("change", this.updateUITheme);
  },
};
</script>

<style lang="postcss" scoped>
</style>

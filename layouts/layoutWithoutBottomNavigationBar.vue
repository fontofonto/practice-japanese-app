<template>
  <div class="w-screen h-screen max-h-fill-available overflow-auto">
    <Nuxt />
  </div>
</template>

<script>
export default {
  beforeMount() {
    this.$store.dispatch("loadSettingsFromLocalStorage");
  },
};
</script>

<style lang="postcss">
html {
  @apply h-fill-available;
  font-family: "ヒラギノ明朝 ProN", "Hiragino Mincho ProN", "游明朝", "游明朝体",
    YuMincho, "Yu Mincho", "ＭＳ 明朝", "MS Mincho", HiraMinProN-W3,
    "TakaoEx明朝", TakaoExMincho, "MotoyaLCedar", "Droid Sans Japanese", serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  @apply min-h-screen min-h-fill-available;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

* {
  @apply text-blue-gray-800;
}

.button {
  @apply inline-flex justify-center items-center p-4 bg-blue-500 text-white font-semibold rounded-2xl hover:(bg-blue-400) active:(bg-blue-600) transition duration-100 whitespace-nowrap;
}
</style>

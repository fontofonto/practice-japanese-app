<template>
  <div class="page-layout">
    <Nuxt class="mb-16" />
    <BottomNavigationBar />
    <transition name="show-panel">
      <UpdatePanel
        class="bottom-24"
        v-if="canUpdate"
        @dismiss="canUpdate = false"
      />
    </transition>
  </div>
</template>

<script>
export default {
  data: () => ({
    canUpdate: false,
  }),
  methods: {
    async checkUpdate() {
      const workbox = await window.$workbox;
      if (workbox) {
        workbox.addEventListener("installed", (event) => {
          // If we don't do this we'll be displaying the notification after the initial installation, which isn't perferred.
          if (event.isUpdate) {
            // whatever logic you want to use to notify the user that they need to refresh the page.
            console.log("Update is available.", event);
            this.canUpdate = true;
          }
        });
      }
    },
    updateUITheme(e) {
      this.$store.dispatch("setUITheme");
    },
  },
  beforeMount() {
    this.$store.dispatch("loadSettingsFromLocalStorage");
  },
  mounted() {
    this.checkUpdate();
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

<style lang="postcss">
html {
  @apply h-fill-available text-blue-gray-800 bg-white;
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
html.dark {
  @apply text-blue-gray-200 bg-blue-gray-800;
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

.button {
  @apply inline-flex justify-center items-center p-4 bg-blue-500 text-white font-semibold rounded-2xl hover:(bg-blue-400) active:(bg-blue-600) transition duration-100;
}
.dark .button {
  @apply bg-blue-400 text-blue-gray-800;
}

.page-layout {
  @apply relative w-screen h-screen max-h-fill-available overflow-x-hidden overflow-y-auto;
}
.dark .page-layout {
  @apply bg-blue-gray-800;
}

.page-title {
  @apply text-4xl font-semibold text-blue-gray-800 whitespace-nowrap;
}
.dark .page-title {
  @apply text-blue-gray-300;
}
</style>

<style lang="postcss" scoped>
.show-panel-enter,
.show-panel-leave-to {
  bottom: -500px;
}
.show-panel-enter-active,
.show-panel-leave-active {
  transition: bottom 400ms ease-in-out;
}
</style>

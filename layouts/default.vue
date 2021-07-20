<template>
  <div
    class="
      relative
      w-screen
      h-screen
      max-h-fill-available
      overflow-auto overflow-x-hidden
    "
  >
    <Nuxt class="mb-12" />
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
  },
  beforeMount() {
    this.$store.dispatch("loadSettingsFromLocalStorage");
  },
  mounted() {
    this.checkUpdate();
  },
};
</script>

<style lang="postcss">
html {
  @apply h-fill-available;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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
  @apply inline-flex justify-center items-center p-4 bg-blue-500 text-white font-japanese font-semibold rounded-2xl hover:(bg-blue-400) active:(bg-blue-600) transition duration-100 whitespace-nowrap;
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

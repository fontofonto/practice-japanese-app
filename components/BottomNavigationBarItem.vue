<template>
  <NuxtLink :to="to" class="bottom-navigation-bar-item">
    <component :is="icon" class="icon"></component>
    <span class="label" :class="[japaneseFontFamily]">{{ label }}</span>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
    },
    label: {
      type: String,
    },
    to: {
      type: String,
      default: "/",
    },
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

<style lang="postcss" scoped>
.bottom-navigation-bar-item {
  @apply flex flex-col justify-center items-center flex-1 py-2 transition text-blue-gray-500;
}
.bottom-navigation-bar-item .icon {
  @apply fill-current;
}
.bottom-navigation-bar-item .label {
  @apply font-font-semibold text-sm text-current;
}
.bottom-navigation-bar-item.nuxt-link-exact-active .icon {
  @apply fill-red-500;
}
.bottom-navigation-bar-item.nuxt-link-exact-active .label {
  @apply text-red-500;
}
</style>
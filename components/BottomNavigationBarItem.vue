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
  @apply w-full max-w-80px flex flex-col justify-center items-center flex-1 py-2 transition text-blue-gray-800;
  &.nuxt-link-exact-active {
    .icon {
      @apply fill-red-500;
    }
    .label {
      @apply text-red-500;
    }
  }
  .icon {
    @apply fill-current;
  }
  .label {
    @apply font-font-semibold text-sm text-current;
  }
}
.dark {
  .bottom-navigation-bar-item {
    @apply text-blue-gray-300;
    &.nuxt-link-exact-active {
      .icon {
        @apply fill-red-400;
      }
      .label {
        @apply text-red-400;
      }
    }
  }
}
</style>
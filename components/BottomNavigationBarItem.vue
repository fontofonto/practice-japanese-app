<template>
  <NuxtLink :to="to" class="bottom-navigation-bar-item">
    <component :is="icon" class="icon"></component>
    <span class="label">{{ label }}</span>
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
  @apply font-japanese font-font-semibold text-sm text-current;
}
.bottom-navigation-bar-item.nuxt-link-exact-active .icon {
  @apply fill-red-500;
}
.bottom-navigation-bar-item.nuxt-link-exact-active .label {
  @apply text-red-500;
}
</style>
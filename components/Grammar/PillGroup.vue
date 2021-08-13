<template>
  <div class="pill-group" :class="{ 'with-legend': legend }">
    <span v-if="legend" class="legend" :class="[japaneseFontFamily]">{{
      legend
    }}</span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    legend: {
      type: String,
      default: null,
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
.pill-group {
  @apply relative inline-flex flex-row flex-wrap items-start my-1 p-1  border-2 border-blue-gray-100 rounded-xl;
}
.pill-group.with-legend {
  @apply pt-2;
}
.legend {
  @apply absolute -top-3 left-2 text-sm px-2 bg-white font-semibold;
}
.dark {
  .pill-group {
    @apply border-blue-gray-600;
  }
  .legend {
    @apply bg-blue-gray-800;
  }
}
</style>
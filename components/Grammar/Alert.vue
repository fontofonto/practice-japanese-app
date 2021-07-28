<template>
  <div
    class="flex flex-row p-2 items-center rounded text-sm font-semibold"
    :class="[japaneseFontFamily, theme]"
  >
    <div
      class="icon flex items-center justify-center w-12 h-12 text-3xl"
      v-if="type"
    >
      {{ icon }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: null,
    },
    color: {
      type: String,
      default: "",
    },
  },
  computed: {
    theme() {
      switch (this.color) {
        case "red":
          return "bg-red-100 text-red-800 border-l-4 border-red-500";
        case "orange":
          return "bg-orange-100 text-orange-800 border-l-4 border-orange-500";
        case "yellow":
          return "bg-yellow-100 text-yellow-800 border-l-4 border-yellow-500";
        case "green":
          return "bg-green-100 text-green-800 border-l-4 border-green-500";
        case "blue":
          return "bg-blue-100 text-blue-800 border-l-4 border-blue-500";
        case "purple":
          return "bg-purple-100 text-purple-800 border-l-4 border-purple-500";
        case "gray":
          return "bg-blue-gray-100 text-blue-gray-800 border-l-4 border-blue-gray-500";
        default:
          return "text-blue-gray-800";
      }
    },
    icon() {
      switch (this.type) {
        case "hint":
          return "💡";
        case "warning":
          return "⚠️";
      }
    },
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
</style>
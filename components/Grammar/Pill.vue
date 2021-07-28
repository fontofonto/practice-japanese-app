<template>
  <div
    class="
      flex flex-col
      items-center
      px-1
      py-2
      m-0.5
      rounded-lg
      text-sm
      font-semibold
    "
    :class="[japaneseFontFamily, theme]"
  >
    <slot></slot>
    <div v-if="description" class="text-xs text-gray-800 opacity-60">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: null,
    },
  },
  computed: {
    theme() {
      switch (this.color) {
        case "red":
          return "bg-red-200 text-red-800";
        case "orange":
          return "bg-orange-200 text-orange-800";
        case "yellow":
          return "bg-yellow-200 text-yellow-800";
        case "green":
          return "bg-green-200 text-green-800";
        case "blue":
          return "bg-blue-200 text-blue-800";
        case "purple":
          return "bg-purple-200 text-purple-800";
        case "gray":
          return "bg-blue-gray-200 text-blue-gray-800";
        default:
          return "text-blue-gray-800";
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
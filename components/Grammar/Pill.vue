<template>
  <div class="pill" :class="[japaneseFontFamily, color]">
    <slot></slot>
    <div v-if="description" class="description">
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
.pill {
  @apply flex flex-col items-center px-1 py-2 m-0.5 rounded-lg text-sm font-semibold text-blue-gray-800;
  &.red {
    @apply bg-red-200 text-red-800;
  }
  &.orange {
    @apply bg-orange-200 text-orange-800;
  }
  &.yellow {
    @apply bg-yellow-200 text-yellow-800;
  }
  &.green {
    @apply bg-green-200 text-green-800;
  }
  &.blue {
    @apply bg-blue-200 text-blue-800;
  }
  &.purple {
    @apply bg-purple-200 text-purple-800;
  }
  &.gray {
    @apply bg-blue-gray-200 text-blue-gray-800;
  }
  .description {
    @apply text-xs text-gray-800 opacity-60;
  }
}

.dark {
  .pill {
    @apply text-blue-gray-300;
    &.red {
      @apply bg-red-600 text-red-100;
    }
    &.orange {
      @apply bg-orange-600 text-orange-100;
    }
    &.yellow {
      @apply bg-yellow-600 text-yellow-100;
    }
    &.green {
      @apply bg-green-600 text-green-100;
    }
    &.blue {
      @apply bg-blue-600 text-blue-100;
    }
    &.purple {
      @apply bg-purple-600 text-purple-100;
    }
    &.gray {
      @apply bg-blue-gray-600 text-blue-gray-100;
    }
    .description {
      @apply text-xs text-white opacity-60;
    }
  }
}
</style>
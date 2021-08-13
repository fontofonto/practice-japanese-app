<template>
  <button class="switch" :class="{ 'is-true': value }" @click="$emit('change')">
    <div class="knob" />
    <div class="background-fill"></div>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
    },
  },
  methods: {},
};
</script>

<style lang="postcss" scoped>
.switch {
  @apply relative flex w-50px h-26px rounded-full overflow-hidden bg-blue-gray-200;
  &:focus {
    @apply outline-none;
  }
  &:focus-visible {
    @apply outline-solid-blue-700;
  }
  .knob {
    @apply absolute z-10 w-6 h-6 m-1px rounded-full bg-white shadow transform translate-x-0 transition-transform ease-in-out appearance-none;
  }
  .background-fill {
    @apply w-full h-full rounded-full bg-green-500 opacity-0 transition-opacity;
    box-shadow: inset 0 2px 4px rgba(15, 23, 42, 0.2);
  }
  &.is-true {
    .knob {
      @apply translate-x-full;
    }

    .background-fill {
      @apply opacity-100;
    }
  }
}

.dark .switch {
  @apply bg-blue-gray-600;
}
</style>
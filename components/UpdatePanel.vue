<template>
  <div class="panel">
    <p>有更新的內容，更新？</p>
    <div class="btn-group">
      <button @click="dismiss" class="btn">稍後</button>
      <button @click="refresh" class="btn primary">更新</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    refresh() {
      location.reload();
    },
    dismiss() {
      this.$emit("dismiss");
    },
  },
};
</script>

<style lang="postcss" scoped>
.panel {
  @apply fixed z-500 left-0 w-full mx-4 py-4 bg-blue-50 flex flex-col items-center space-y-2 rounded-2xl shadow-2xl;
  max-width: calc(100% - 2rem);
  .btn-group {
    @apply flex flex-row space-x-4;
  }
  .btn {
    @apply text-blue-500 font-semibold py-2 px-4 bg-blue-100 rounded-2xl;
    &.primary {
      @apply text-white font-semibold py-2 px-4 bg-blue-500 rounded-2xl;
    }
  }
}

.dark {
  .panel {
    @apply bg-blue-gray-600;
    .btn {
      @apply text-blue-400 bg-blue-gray-500;
      &.primary {
        @apply text-blue-gray-800 bg-blue-400;
      }
    }
  }
}
</style>
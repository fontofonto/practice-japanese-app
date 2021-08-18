<template>
  <div class="panel">
    <p>已下載最新的內容，是否現在更新？</p>
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
  @apply fixed w-max max-w-full z-500 left-1/2 transform -translate-x-1/2 mx-4 px-6 py-4 bg-blue-50 flex flex-col items-center space-y-2 rounded-2xl shadow-2xl;
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
    @apply bg-blue-600;
    .btn {
      @apply text-blue-100 bg-transparent;
      &.primary {
        @apply text-blue-800 bg-blue-300;
      }
    }
  }
}
</style>
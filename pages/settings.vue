<template>
  <div class="px-4 pb-12">
    <div class="relative w-full flex flex-col my-4 pt-12">
      <p class="page-title" :class="[japaneseFontFamily]">設定</p>
    </div>

    <div class="flex flex-col">
      <div
        class="setting-list-header has-divider"
        :class="[japaneseFontFamily]"
      >
        應用程式設定
      </div>
      <div class="settings-list-item has-divider">
        <label
          class="font-semibold"
          :class="[japaneseFontFamily]"
          for="preferredJapaneseFontFamily"
          >字體</label
        >
        <select
          v-model="preferredJapaneseFontFamily"
          name="preferredJapaneseFontFamily"
          id="preferredJapaneseFontFamily"
        >
          <option :value="'serif'">明體</option>
          <option :value="'sans'">黑體</option>
        </select>
      </div>
      <div class="settings-list-item has-divider">
        <label
          class="font-semibold"
          :class="[japaneseFontFamily]"
          for="preferredUITheme"
          >介面顏色</label
        >
        <select
          v-model="preferredUITheme"
          name="preferredUITheme"
          id="preferredUITheme"
        >
          <option :value="'auto'">跟隨系統</option>
          <option :value="'light'">白色</option>
          <option :value="'dark'">黑色</option>
        </select>
      </div>
      <div
        class="setting-list-header has-divider"
        :class="[japaneseFontFamily]"
      >
        試験設定
      </div>
      <div class="settings-list-item has-divider">
        <label
          class="font-semibold"
          :class="[japaneseFontFamily]"
          for="numberOfQuestions"
          >題目數量</label
        >
        <select
          v-model="numberOfQuestions"
          name="numberOfQuestions"
          id="numberOfQuestions"
        >
          <option :value="10">10</option>
          <option :value="15">15</option>
          <option :value="20">20</option>
        </select>
      </div>
      <div class="settings-list-item has-divider">
        <p class="font-semibold" :class="[japaneseFontFamily]">顯示漢字</p>
        <ToggleSwitch
          name="kanji"
          :value="showKanji"
          @change="toggleShowKanji"
        />
      </div>
      <div
        class="setting-list-header has-divider"
        :class="[japaneseFontFamily]"
      >
        其他
      </div>
      <div class="settings-list-item has-divider">
        <p class="font-semibold" :class="[japaneseFontFamily]">版本</p>
        <p :class="[japaneseFontFamily]">{{ $store.state.version }}</p>
      </div>
      <div class="settings-list-item">
        <p class="font-semibold" :class="[japaneseFontFamily]">更新內容</p>
        <ul class="list-disc text-sm mt-2" :class="[japaneseFontFamily]">
          <li>新增了第 21 課詞語和な形容詞內容。</li>
          <li>新增黑色主題介面。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
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
    showKanji() {
      return this.$store.state.settings.showKanji;
    },
    preferredJapaneseFontFamily: {
      get() {
        return this.$store.state.settings.preferredJapaneseFontFamily;
      },
      set(value) {
        this.$store.commit("updatePreferredJapaneseFontFamily", value);
      },
    },
    preferredUITheme: {
      get() {
        return this.$store.state.settings.preferredUITheme;
      },
      set(newTheme) {
        this.$store.dispatch("setUITheme", newTheme);
      },
    },
    numberOfQuestions: {
      get() {
        return this.$store.state.settings.numberOfQuestions;
      },
      set(value) {
        this.$store.commit("updateNumberOfQuestions", value);
      },
    },
  },
  methods: {
    toggleShowKanji() {
      this.$store.commit("toggleShowKanji");
    },
  },
};
</script>

<style lang="postcss" scoped>
.setting-list-header {
  @apply text-blue-gray-400 text-sm pt-4 pb-2 mt-2;
}
.settings-list-item {
  @apply flex flex-row justify-between items-center py-4;
}
.has-divider {
  @apply border-b border-b-blue-gray-100;
}
.dark .has-divider {
  @apply border-b border-b-blue-gray-600;
}
.button {
  @apply inline-flex justify-center items-center p-4 bg-blue-500 text-white font-semibold text-center rounded-2xl hover:(bg-blue-400) active:(bg-blue-600) transition duration-100;
}

select {
  @apply text-blue-gray-800 bg-blue-gray-100 py-1 px-2 rounded appearance-none;
}
.dark select {
  @apply text-blue-gray-300 bg-blue-gray-900;
}
</style>

<template>
  <div class="px-4 pb-12">
    <div class="relative w-full flex flex-col my-4 pt-12">
      <p
        class="text-4xl font-semibold text-blue-gray-800 whitespace-nowrap"
        :class="[japaneseFontFamily]"
      >
        設定
      </p>
    </div>

    <div class="flex flex-col">
      <div
        class="setting-list-header has-divider"
        :class="[japaneseFontFamily]"
      >
        主題
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
        <label for="showKanji" class="toggle-button">
          <input
            type="checkbox"
            name="showKanji"
            id="showKanji"
            v-model="showKanji"
          />
          <div class="background-fill"></div>
        </label>
      </div>
      <div
        class="setting-list-header has-divider"
        :class="[japaneseFontFamily]"
      >
        其他
      </div>
      <div class="settings-list-item">
        <p class="font-semibold" :class="[japaneseFontFamily]">版本</p>
        <div class="flex flex-col items-end">
          <p :class="[japaneseFontFamily]">{{ $store.state.version }}</p>
          <div>
            <ul class="list-disc text-sm mt-2" :class="[japaneseFontFamily]">
              <li>新增了第 21 課詞語和な形容詞內容。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    preferredJapaneseFontFamily: {
      get() {
        return this.$store.state.settings.preferredJapaneseFontFamily;
      },
      set(value) {
        this.$store.commit("updatePreferredJapaneseFontFamily", value);
      },
    },
    showKanji: {
      get() {
        return this.$store.state.settings.showKanji;
      },
      set(value) {
        this.$store.commit("toggleShowKanji", value);
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
};
</script>

<style lang="postcss" scoped>
.setting-list-header {
  @apply text-blue-gray-400 text-sm pt-4 pb-2 mt-2;
}
.settings-list-item {
  @apply flex flex-row justify-between py-4;
}
.has-divider {
  @apply border-b border-b-blue-gray-100;
}
.button {
  @apply inline-flex justify-center items-center p-4 bg-blue-500 text-white font-semibold text-center rounded-2xl hover:(bg-blue-400) active:(bg-blue-600) transition duration-100;
}

.toggle-button {
  @apply relative flex w-50px h-26px rounded-full overflow-hidden bg-blue-gray-200;
}
.toggle-button input[type="checkbox"] {
  @apply absolute z-10 w-6 h-6 m-1px rounded-full bg-white shadow transform translate-x-0 transition-transform ease-in-out;
  appearance: none;
}
.toggle-button input[type="checkbox"]:checked {
  @apply translate-x-full;
}
.toggle-button input[type="checkbox"] + .background-fill {
  @apply w-full h-full rounded-full bg-green-500 opacity-0 transition-opacity;
  box-shadow: inset 0 2px 4px rgba(15, 23, 42, 0.2);
}
.toggle-button input[type="checkbox"]:checked + .background-fill {
  @apply opacity-100;
}
</style>

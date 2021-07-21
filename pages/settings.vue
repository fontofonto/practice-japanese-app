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
      <div class="settings-list-item border-b border-b-blue-gray-100">
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
      <div class="settings-list-item border-b border-b-blue-gray-100">
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
      <div class="settings-list-item border-b border-b-blue-gray-100">
        <label
          class="font-semibold"
          :class="[japaneseFontFamily]"
          for="showKanji"
          >顯示漢字</label
        >
        <input
          type="checkbox"
          name="showKanji"
          id="showKanji"
          v-model="showKanji"
        />
      </div>
      <div class="settings-list-item">
        <p class="font-semibold" :class="[japaneseFontFamily]">版本</p>
        <p :class="[japaneseFontFamily]">1.1.0</p>
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

<style lang="postcss">
.settings-list-item {
  @apply flex flex-row justify-between py-4;
}
.button {
  @apply inline-flex justify-center items-center p-4 bg-blue-500 text-white font-semibold rounded-2xl hover:(bg-blue-400) active:(bg-blue-600) transition duration-100 whitespace-nowrap;
}
</style>

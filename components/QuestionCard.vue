<template>
  <div class="flex flex-col flex-grow">
    <div
      class="
        question
        w-full
        min-h-[200px]
        flex flex-col
        justify-center
        items-center
        text-center
        my-4
        p-4
        rounded-2xl
        bg-blue-gray-100
      "
    >
      <p
        class="text-2xl font-semibold whitespace-nowrap"
        :class="[japaneseFontFamily]"
      >
        {{ question.phonogram }}
      </p>
      <div
        class="flex flex-row items-center"
        :class="{ 'pl-8': !$store.state.settings.showKanji }"
        v-if="question.logogram"
      >
        <p
          class="text-2xl font-semibold whitespace-nowrap"
          :class="[japaneseFontFamily, showKanji ? 'visible' : 'invisible']"
        >
          {{ question.logogram }}
        </p>
        <button
          class="ml-2 fill-blue-gray-800"
          @click="isLookingForLogogram = !isLookingForLogogram"
          v-if="!$store.state.settings.showKanji"
        >
          <IconVisibilityOn v-if="isLookingForLogogram" />
          <IconVisibilityOff v-else />
        </button>
      </div>
    </div>

    <div class="choices grid grid-cols-2 grid-rows-2 gap-2 my-4">
      <button
        v-for="(choice, choiceIndex) in question.choices"
        :key="`question${questionIndex}answer${choiceIndex}`"
        class="border rounded-2xl p-2 text-center font-semibold"
        @click="makeChoice(choice)"
        :class="{
          'bg-green-500 text-white':
            question.isCorrect === true && choice === decision,
          'bg-red-500 text-white':
            question.isCorrect === false && choice === decision,
          'text-green-500':
            question.isCorrect === false && choice === question.meaning,
          'cursor-default': question.isAnswered,
        }"
        :disabled="question.isAnswered"
      >
        {{ choice }}
      </button>
    </div>
    <div class="h-20">
      <button
        v-if="question.isAnswered"
        class="button w-full"
        @click="$emit('nextQuestion')"
      >
        {{ isLastQuestion ? "計算得分" : "下一題" }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    questionIndex: {
      type: Number,
    },
    question: {
      type: Object,
    },
    totalNumberOfQuestions: {
      type: Number,
    },
  },
  computed: {
    isLastQuestion: function () {
      return this.questionIndex === this.totalNumberOfQuestions - 1;
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
    showKanji() {
      if (this.question.logogram) {
        if (this.$store.state.settings.showKanji || this.isLookingForLogogram) {
          return true;
        }
      }
      return false;
    },
  },
  data: () => ({
    decision: null,
    isLookingForLogogram: false,
  }),
  methods: {
    makeChoice(choice) {
      this.decision = choice;
      this.$emit("answered", {
        questionIndex: this.questionIndex,
        decision: this.decision,
      });
    },
  },
};
</script>
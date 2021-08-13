<template>
  <div class="question-card">
    <div class="question">
      <p class="phonogram" :class="[japaneseFontFamily]">
        {{ question.phonogram }}
      </p>
      <div
        class="logogram-wrapper"
        :class="{ 'pl-8': !$store.state.settings.showKanji }"
        v-if="question.logogram"
      >
        <p
          class="logogram"
          :class="[japaneseFontFamily, showKanji ? 'visible' : 'invisible']"
        >
          {{ question.logogram }}
        </p>
        <button
          class="icon-button"
          @click="isLookingForLogogram = !isLookingForLogogram"
          v-if="!$store.state.settings.showKanji"
        >
          <IconVisibilityOn v-if="isLookingForLogogram" />
          <IconVisibilityOff v-else />
        </button>
      </div>
    </div>

    <div class="choices">
      <button
        v-for="(choice, choiceIndex) in question.choices"
        :key="`question${questionIndex}answer${choiceIndex}`"
        @click="makeChoice(choice)"
        class="choice-button"
        :class="{
          'correct-choice': question.isCorrect === true && choice === decision,
          'incorrect-choice':
            question.isCorrect === false && choice === decision,
          'correct-answer':
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

<style lang="postcss" scoped>
.question-card {
  @apply flex flex-col flex-grow;
  .question {
    @apply w-full min-h-[200px] flex flex-col justify-center items-center text-center my-4 p-4 rounded-2xl bg-blue-gray-100;
    .phonogram {
      @apply text-2xl font-semibold whitespace-nowrap;
    }
    .logogram-wrapper {
      @apply flex flex-row items-center;
      .logogram {
        @apply text-2xl font-semibold whitespace-nowrap;
      }
      .icon-button {
        @apply ml-2 fill-blue-gray-800;
      }
    }
  }
  .choices {
    @apply grid grid-cols-2 grid-rows-2 gap-2 my-4;
    .choice-button {
      @apply border rounded-2xl p-2 text-center font-semibold;
      &.correct-choice {
        @apply bg-green-500 text-white;
      }
      &.incorrect-choice {
        @apply bg-red-500 text-white;
      }
      &.correct-answer {
        @apply border-green-500 text-green-500;
      }
    }
  }
}

.dark .question-card {
  .question {
    @apply bg-blue-gray-700;
    .logogram-wrapper {
      .icon-button {
        @apply fill-blue-gray-300;
      }
    }
  }
  .choices {
    .choice-button {
      @apply border-blue-gray-600 border-2;
      &.correct-choice {
        @apply border-none bg-green-400 text-blue-gray-800;
      }
      &.incorrect-choice {
        @apply border-none bg-red-400 text-blue-gray-800;
      }
      &.correct-answer {
        @apply border-green-400 text-green-400;
      }
    }
  }
}
</style>
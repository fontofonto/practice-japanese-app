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
      <p class="text-2xl font-japanese font-semibold whitespace-nowrap">
        {{ question.phonogram }}
      </p>
      <p class="text-2xl font-japanese font-semibold whitespace-nowrap">
        {{ question.logogram }}
      </p>
    </div>

    <div class="choices grid grid-cols-2 grid-rows-2 gap-2 my-4">
      <button
        v-for="(choice, choiceIndex) in question.choices"
        :key="`question${questionIndex}answer${choiceIndex}`"
        class="border rounded-2xl p-2 text-center font-medium"
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
  },
  data: () => ({
    decision: null,
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
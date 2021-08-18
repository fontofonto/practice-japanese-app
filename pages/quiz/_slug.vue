<template>
  <div class="page">
    <div class="navigation">
      <button @click="$router.go(-1)">
        <IconBackArrow class="icon" />
        <span class="text" :class="[japaneseFontFamily]">返回</span>
      </button>
    </div>
    <div class="intro-page" v-if="mode === 'intro'">
      <div class="intro-card">
        <h1 class="label" :class="[japaneseFontFamily]">試験 {{ slug }}</h1>
        <h2 class="quiz-title" :class="[japaneseFontFamily]">
          {{ $store.state.googleSheetPages[slug - 1].title }}
        </h2>
        <div class="controls">
          <div class="flex flex-row space-x-2">
            <span>顯示漢字</span>
            <ToggleSwitch
              name="kanji"
              :value="showKanji"
              @change="$store.commit('toggleShowKanji')"
            />
          </div>
          <div>
            <label for="numberOfQuestions">題目數量</label>
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
        </div>

        <button class="button w-full" @click="initializeQuiz">開始</button>
      </div>
    </div>

    <div class="quiz-page" v-else-if="mode === 'quiz'">
      <div class="quiz-detail">
        <p>分數： {{ score }} / {{ totalScore }}</p>
        <div class="indicators">
          <div
            v-for="(question, questionIndex) in questionList"
            :key="`indicator${questionIndex}`"
            class="indicator"
            :class="{
              'is-correct': question.isCorrect === true,
              'is-incorrect': question.isCorrect === false,
            }"
          ></div>
        </div>
      </div>
      <div
        v-for="(question, questionIndex) in questionList"
        :key="`word${questionIndex}`"
        :class="{ 'flex flex-grow items-center': questionIndex === round }"
      >
        <QuestionCard
          v-if="questionIndex === round"
          :question="question"
          :questionIndex="questionIndex"
          :totalNumberOfQuestions="questionList.length"
          @answered="answerQuestion"
          @nextQuestion="nextQuestion"
        ></QuestionCard>
      </div>
    </div>

    <div class="result-page" v-else-if="mode === 'result'">
      <div class="result-card">
        <p class="score" :class="[japaneseFontFamily]">
          分數： {{ score }} / {{ totalScore }}
        </p>
        <!-- <div class="w-full flex flex-col">
          <div
            class="flex flex-row"
            v-for="(question, questionIndex) in questionList"
            :key="`result${questionIndex}`"
          >
            <div
              class="w-1/3"
              :class="[
                question.isCorrect ? ' !text-green-500' : '!text-red-500',
              ]"
            >
              {{ question.phonogram }}
            </div>
            <div
              class="w-1/3"
              :class="[
                question.isCorrect ? ' !text-green-500' : '!text-red-500',
              ]"
            >
              {{ question.logogram }}
            </div>
            <div
              class="w-1/3"
              :class="[
                question.isCorrect ? ' !text-green-500' : '!text-red-500',
              ]"
            >
              {{ question.meaning }}
            </div>
          </div>
        </div> -->
        <button class="button w-full my-2" @click="mode = 'intro'">
          再來一次
        </button>
        <NuxtLink to="/" class="button w-full my-2">返回目錄</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import csv from "csvtojson";

export default {
  layout: "layoutWithoutBottomNavigationBar",
  head() {
    return {
      title:
        this.$store.state.googleSheetPages[this.slug - 1].title + " | 日文溫習",
    };
  },
  async asyncData({ params }) {
    // get the dynamic route
    const slug = params.slug;
    return { slug };
  },
  async fetch() {
    // fetch the corresponding word bank
    const csvPath =
      this.$store.state.googleSheetPages[this.slug - 1].googleSheetPath;
    const csvHelper = csv();
    const googleSheetCsv = await fetch(csvPath).then((response) =>
      response.text()
    );
    this.googleSheetJson = await csvHelper.fromString(googleSheetCsv);
    console.log(this.googleSheetJson);
  },
  data() {
    return {
      googleSheetJson: [],
      questionList: [],
      mode: "intro",
      round: 0,
      score: 0,
    };
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
    totalScore() {
      return this.questionList.length;
    },
    showKanji() {
      return this.$store.state.settings.showKanji;
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
    initializeQuiz() {
      // reset the variable
      this.round = 0;
      this.score = 0;
      this.questionList = [];

      // generate questions
      this.generateQuestions();

      // change mode
      this.mode = "quiz";
    },
    generateQuestions() {
      const totalNumberOfWords = this.googleSheetJson.length;
      let selectWordIndexList = [];
      while (selectWordIndexList.length < this.numberOfQuestions) {
        // step 1: random select the word in word bank
        const wordIndex = Math.round(Math.random() * (totalNumberOfWords - 1));
        if (selectWordIndexList.includes(wordIndex)) {
          continue;
        }
        selectWordIndexList.push(wordIndex);
        let selectedWord = { ...this.googleSheetJson[wordIndex] };

        // step 2: generate question, choices and answer
        selectedWord.choices = [];
        let choiceIndexList = [wordIndex];
        // randomly pick 3 words which isn't equal to the answer
        while (selectedWord.choices.length < 3) {
          const choiceIndex = Math.round(
            Math.random() * (totalNumberOfWords - 1)
          );
          if (
            !choiceIndexList.includes(choiceIndex) &&
            this.googleSheetJson[choiceIndex].meaning !== selectedWord.meaning
          ) {
            choiceIndexList.push(choiceIndex);
            selectedWord.choices.push(
              this.googleSheetJson[choiceIndex].meaning
            );
          }
        }
        selectedWord.choices.push(selectedWord.meaning);
        selectedWord.choices = this.$lodash.shuffle(selectedWord.choices);

        // step 3: add flags
        selectedWord.isAnswered = false;
        selectedWord.isCorrect = null;

        this.questionList.push(selectedWord);
      }
    },
    answerQuestion(payload) {
      let questionIndex = payload.questionIndex;
      let decision = payload.decision;

      // disable answering the question
      this.questionList[questionIndex].isAnswered = true;

      // check the choice is matching the meaning
      if (decision === this.questionList[questionIndex].meaning) {
        this.questionList[questionIndex].isCorrect = true;
        this.score += 1;
      } else {
        this.questionList[questionIndex].isCorrect = false;
      }
    },
    nextQuestion() {
      if (this.round < this.questionList.length) {
        this.round += 1;
      }
      if (this.round === this.questionList.length) {
        this.mode = "result";
      }
    },
  },
  mounted() {
    // this.generateQuestions();
  },
};
</script>

<style lang="postcss" scoped>
.page {
  @apply w-screen h-full max-h-fill-available flex flex-col;
}
.navigation {
  @apply fixed top-0 left-0 w-full py-2 px-6;
  button {
    @apply px-1 py-2 inline-flex space-x-2;
    .icon {
      @apply fill-blue-gray-700;
    }
    span {
      @apply text-blue-gray-700 font-semibold;
    }
  }
}
.dark .navigation {
  button {
    .icon {
      @apply fill-blue-gray-300;
    }
    span {
      @apply text-blue-gray-300;
    }
  }
}

.intro-page {
  @apply flex-grow flex justify-center items-center px-4;
  .intro-card {
    @apply flex flex-col justify-center items-center w-full px-10 py-6 bg-blue-gray-100 rounded-3xl;
    .label {
      @apply text-lg text-red-400 font-bold my-2 whitespace-nowrap;
    }
    .quiz-title {
      @apply text-2xl text-blue-gray-800 font-semibold my-2 whitespace-nowrap;
    }
    .controls {
      @apply flex flex-row items-center my-4 space-x-10;
      select {
        @apply text-blue-gray-800 bg-blue-gray-200 py-1 px-2 rounded appearance-none;
      }
    }
  }
}
.dark .intro-page {
  .intro-card {
    @apply bg-blue-gray-700;
    .label {
      @apply text-red-400;
    }
    .quiz-title {
      @apply text-blue-gray-300;
    }
    .controls {
      @apply text-blue-gray-300;
      select {
        @apply text-blue-gray-300 bg-blue-gray-900;
      }
    }
  }
}

.quiz-page {
  @apply w-full flex-grow flex flex-col px-4 pt-56px;
  .quiz-detail {
    @apply flex flex-col my-4 p-4 border rounded-2xl;
    p {
      @apply text-blue-gray-800 font-semibold text-xl;
    }
    .indicators {
      @apply w-full flex flex-row space-x-2 mt-2;
      .indicator {
        @apply flex-grow h-2 rounded-full border transition;
        &.is-correct {
          @apply bg-green-500 border-none;
        }
        &.is-incorrect {
          @apply bg-red-500 border-none;
        }
      }
    }
  }
}

.dark .quiz-page {
  .quiz-detail {
    @apply border-blue-gray-700;
    p {
      @apply text-blue-gray-300;
    }
    .indicators {
      .indicator {
        @apply bg-blue-gray-600 border-none;
        &.is-correct {
          @apply bg-green-400 border-none;
        }
        &.is-incorrect {
          @apply bg-red-400 border-none;
        }
      }
    }
  }
}

.result-page {
  @apply flex-grow flex justify-center items-center px-4;
  .result-card {
    @apply w-full flex flex-col justify-center items-center px-10 py-6 bg-blue-gray-100 rounded-3xl;
    .score {
      @apply text-blue-gray-800 font-semibold text-xl my-6 whitespace-nowrap;
    }
  }
}
.dark .result-page {
  .result-card {
    @apply bg-blue-gray-700;
    .score {
      @apply text-blue-gray-300;
    }
  }
}
</style>
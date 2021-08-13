<template>
  <div class="page">
    <div class="navigation">
      <button @click="$router.go(-1)">
        <IconBackArrow class="icon" />
        <span :class="[japaneseFontFamily]">返回</span>
      </button>
    </div>
    <div class="intro-page">
      <div class="intro">
        <h1 class="intro-label" :class="[japaneseFontFamily]">
          單字表 {{ slug }}
        </h1>
        <h2 class="intro-title" :class="[japaneseFontFamily]">
          {{ $store.state.googleSheetPages[slug - 1].title }}
        </h2>
      </div>
      <div
        v-for="(word, index) in googleSheetJson"
        :key="'word' + index"
        class="word-row"
        :class="{ 'is-highlighted': index % 2 }"
      >
        <div class="phonogram" :class="[japaneseFontFamily]">
          {{ word.phonogram }}
        </div>
        <div class="logogram" :class="[japaneseFontFamily]">
          {{ word.logogram }}
        </div>
        <div class="meaning">
          {{ word.meaning }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "layoutWithoutBottomNavigationBar",
  head() {
    return {
      title:
        this.$store.state.googleSheetPages[this.slug - 1].title +
        "單字溫習 | 日文溫習",
    };
  },
  async asyncData({ params }) {
    // get the dynamic route
    const slug = params.slug; // When calling /abc the slug will be "abc"
    return { slug };
  },
  async fetch() {
    // fetch the corresponding word bank
    this.googleSheetJson = await fetch(
      "/data/" + this.$store.state.googleSheetPages[this.slug - 1].filename
    ).then((res) => {
      return res.json();
    });
  },
  data() {
    return {
      googleSheetJson: [],
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
  },
};
</script>

<style lang="postcss" scoped>
.page {
  @apply w-screen h-full max-h-fill-available flex flex-col;
}
.navigation {
  @apply fixed top-0 left-0 w-full py-2 px-6 bg-white;
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
  @apply bg-blue-gray-800;
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
  @apply flex-grow flex flex-col items-center py-14 pt-0;
  .intro {
    @apply flex flex-col justify-center items-center w-full px-10 py-6 border-b border-bg-blue-gray-200;
    .intro-label {
      @apply text-lg text-red-400 font-bold my-2 whitespace-nowrap;
    }
    .intro-title {
      @apply text-2xl text-blue-gray-800 font-semibold my-2 whitespace-nowrap;
    }
  }
  .word-row {
    @apply flex flex-row w-full py-2 space-x-1 text-base;
    &.is-highlighted {
      @apply bg-blue-gray-100;
    }
    .phonogram {
      @apply w-5/12 font-semibold pl-4;
    }
    .logogram {
      @apply w-4/12 font-semibold;
    }
    .meaning {
      @apply w-3/12 pr-4;
    }
  }
}
.dark .intro-page {
  .intro {
    @apply border-bg-blue-gray-600;
    .intro-label {
      @apply text-red-400;
    }
    .intro-title {
      @apply text-blue-gray-300;
    }
  }
  .word-row {
    @apply flex flex-row w-full py-2 space-x-1 text-base;
    &.is-highlighted {
      @apply bg-blue-gray-900 bg-opacity-50;
    }
  }
}
</style>
<template>
  <div class="page">
    <div class="navigation">
      <button @click="$router.go(-1)">
        <IconBackArrow class="icon" />
        <span :class="[japaneseFontFamily]">返回</span>
      </button>
    </div>
    <div class="content">
      <article class="content-container prose">
        <h1 :class="[japaneseFontFamily]">{{ doc.title }}</h1>
        <nuxt-content
          :document="doc"
          class="pb-14"
          :class="[japaneseFontFamily]"
        />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  layout: "layoutWithoutBottomNavigationBar",
  async asyncData({ params, $content }) {
    const doc = await $content(params.slug).fetch();

    return { doc };
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

<style lang="postcss">
.page {
  @apply w-screen h-full max-h-screen pt-14 flex flex-col;
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

.content {
  @apply flex-grow flex flex-col items-center overflow-y-scroll px-4;
}
/* Nuxt content styles */
.nuxt-content {
  @apply text-blue-gray-800;
}
.nuxt-content h1,
.content-container h1 {
  @apply border-b-8 border-red-200 inline;
}
.nuxt-content .nuxt-content blockquote * {
  @apply not-italic;
}
.nuxt-content blockquote p:before,
.nuxt-content blockquote p:after {
  content: "";
  display: none;
}
.dark {
  .nuxt-content {
    @apply text-blue-gray-300;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      @apply text-blue-gray-300;
    }
    hr {
      @apply border-blue-gray-600;
    }
    ol li:before {
      @apply text-blue-gray-300;
    }
  }
  .nuxt-content h1,
  .content-container h1 {
    @apply text-blue-gray-300 border-red-400;
  }
}
</style>

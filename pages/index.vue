<template>
  <div class="px-4 pb-12">
    <div
      class="
        relative
        w-full
        h-250px
        flex flex-col
        justify-center
        items-center
        text-center
        my-4
        p-4
        rounded-2xl
        border
      "
    >
      <div
        class="
          absolute
          bg-red-500
          w-30
          h-30
          rounded-full
          flex
          justify-center
          items-center
        "
      >
        <p
          class="
            relative
            text-4xl
            font-japanese font-semibold
            z-10
            text-blue-gray-500
            whitespace-nowrap
            mix-blend-multiply
          "
        >
          日文生字溫習
        </p>
      </div>
    </div>

    <div
      v-for="(page, index) in $store.state.googleSheetPages"
      :key="page.pageName"
    >
      <NuxtLink
        :to="'/quiz/' + (index + 1)"
        class="button w-full my-2 font-japanese"
        >{{ page.title }}</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style lang="postcss">
</style>

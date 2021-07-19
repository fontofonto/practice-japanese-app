<template>
  <div class="px-4 pb-12">
    <div
      class="
        relative
        w-full
        flex flex-col
        justify-center
        items-center
        text-center
        my-4
        px-4
        py-12
        rounded-2xl
        bg-yellow-300
      "
    >
      <p
        class="
          text-4xl
          font-japanese font-semibold
          text-blue-gray-500
          whitespace-nowrap
        "
      >
        日文生字溫習
      </p>
    </div>

    <div
      v-for="(page, index) in $store.state.googleSheetPages"
      :key="page.pageName"
    >
      <NuxtLink
        :to="'/review/' + (index + 1)"
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

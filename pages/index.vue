<template>
  <div>
    <div
      v-for="(page, index) in $store.state.googleSheetPages"
      :key="page.pageName"
    >
      <NuxtLink :to="'/quiz/' + (index + 1)">{{ page.title }}</NuxtLink>
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

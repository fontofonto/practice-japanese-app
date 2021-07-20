<template>
  <div class="bottom-navigation-bar-wrapper">
    <div class="bottom-navigation-bar">
      <BottomNavigationBarItem
        class="quiz"
        icon="IconQuiz"
        label="測試"
        to="/"
      ></BottomNavigationBarItem>
      <BottomNavigationBarItem
        class="review"
        icon="IconReview"
        label="溫習"
        to="/review"
      ></BottomNavigationBarItem>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.bottom-navigation-bar-wrapper {
  @apply fixed z-10000 bottom-0 left-0 w-full p-4;
}
.bottom-navigation-bar {
  @apply relative w-full h-16 px-6 bg-white rounded-4xl shadow-2xl;
  @apply flex flex-row justify-center;
}
</style>
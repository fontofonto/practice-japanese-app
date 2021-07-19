<template>
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
</template>

<style lang="postcss" scoped>
.bottom-navigation-bar {
  @apply fixed bottom-0 left-0 w-full px-4 bg-white border-t border-t-blue-gray-300;
  @apply flex flex-row justify-center;
}
</style>
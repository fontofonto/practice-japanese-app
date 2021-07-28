<template>
  <div class="bottom-navigation-bar-wrapper">
    <div class="bottom-navigation-bar">
      <BottomNavigationBarItem
        class="quiz"
        icon="IconQuiz"
        label="試験"
        to="/"
      ></BottomNavigationBarItem>
      <BottomNavigationBarItem
        class="review"
        icon="IconReview"
        label="復習"
        to="/review"
      ></BottomNavigationBarItem>
      <BottomNavigationBarItem
        class="settings"
        icon="IconChecklistRtl"
        label="文法"
        to="/grammar"
      ></BottomNavigationBarItem>
      <BottomNavigationBarItem
        class="jisho"
        icon="IconSearch"
        label="辞書"
        to="/dict"
      ></BottomNavigationBarItem>
      <BottomNavigationBarItem
        class="settings"
        icon="IconSettings"
        label="設定"
        to="/settings"
      ></BottomNavigationBarItem>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.bottom-navigation-bar-wrapper {
  @apply fixed z-10000 bottom-0 left-0 w-full px-4 pb-6;
}
.bottom-navigation-bar {
  @apply relative max-w-368px mx-auto h-16 px-6 bg-white rounded-4xl shadow-2xl;
  @apply flex flex-row justify-center;
}
</style>
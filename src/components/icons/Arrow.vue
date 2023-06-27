<template>
  <svg class="arrow-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5 2.5V21.5M11.5 21.5L20 12.5278M11.5 21.5L3 12.5278" stroke="white" stroke-width="1.53125" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.arrow-icon {
  width: 100%;
  max-width: 24px;
  height: auto;

  @media (max-width: $breakpoint768) {
    max-width: 20px;
  }
}
</style>
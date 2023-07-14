<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  },
})
</script>

<template>
  <RouterLink class="app-button text" :to="props.href">
    <span>{{ props.text }}</span>
    <slot name="icon"></slot>
  </RouterLink>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.app-button {
  padding: 10px 25px;
  background-color: $color-primary;
  border: 2px solid $color-white;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: 0.3s all ease;

  &:hover {
    background-color: $color-primary-hover;
    border-color: $color-aqua;
    box-shadow: $shadow-sm;
  }

  @media (max-width: $breakpoint992) {
    padding: 10px 20px;
    gap: 15px;
  }

  @media (max-width: $breakpoint768) {
    padding: 8px 18px;
  }
}
</style>
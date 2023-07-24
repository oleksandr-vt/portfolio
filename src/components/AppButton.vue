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
  isRouterLink: {
    type: Boolean,
    required: false
  }
})
</script>

<template>
  <component class="app-button text" :is="isRouterLink ? 'RouterLink' : 'a'" :to="isRouterLink ? props.href : null"
    :href="!isRouterLink ? props.href : null">
    <span>{{ props.text }}</span>
    <slot name="icon"></slot>
  </component>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.app-button {
  display: inline-block;
  padding: 10px 25px;
  background-color: $color-primary;
  border: 2px solid $color-white;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
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
<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useLenis } from './assets/js/lenis'

useLenis()

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <RouterView />
</template>
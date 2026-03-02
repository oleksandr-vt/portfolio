<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useLenis } from './assets/js/lenis'

useLenis()

onMounted(() => {
  document.documentElement.scrollTop = 0
})
</script>

<template>
  <RouterView />
</template>
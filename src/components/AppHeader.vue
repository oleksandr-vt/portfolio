<script setup>
import { RouterLink, useRoute } from 'vue-router'
import Arrow from './icons/Arrow.vue'
import { scrollToElementById } from '../assets/js/helpers'

const route = useRoute()

const handleButtonClick = (str) => {
  gtag('event', `header_${str}_button`)

  if (str === 'about' || str === 'contacts') {
    scrollToElementById(str)
  }
}
</script>

<template>
  <header class="header">
    <nav>
      <RouterLink class="header__back" @click="handleButtonClick('back')" to="/" v-if="route.path !== '/'">
        <Arrow />
      </RouterLink>

      <div class="header__links text" v-else>
        <RouterLink @click="handleButtonClick('works')" to="/works">Works</RouterLink>
        <span>/</span>
        <a @click="handleButtonClick('about')">About</a>
        <span>/</span>
        <a @click="handleButtonClick('contacts')">Contact</a>
      </div>
    </nav>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.header {
  padding: 40px 60px;

  @media (max-width: $breakpoint1680) {
    padding: 35px 45px;
  }

  @media (max-width: $breakpoint1450) {
    padding: 30px 45px;
  }

  @media (max-width: $breakpoint1200) {
    padding: 25px 30px;
  }

  @media (max-width: $breakpoint992) {
    padding: 20px 30px;
  }

  @media (max-width: $breakpoint768) {
    padding: 20px 25px;
  }

  @media (max-width: $breakpoint576) {
    padding: 20px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    height: 39px;

    @media (max-width: $breakpoint1680) {
      height: 34px;
    }

    @media (max-width: $breakpoint1200) {
      height: 32px;
    }

    @media (max-width: $breakpoint992) {
      height: 29px;
    }

    @media (max-width: $breakpoint768) {
      height: 26px;
    }

    @media (max-width: $breakpoint576) {
      height: 24px;
    }
  }

  &__links {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 25px;

    @media (max-width: $breakpoint768) {
      gap: 20px;
    }

    @media (max-width: $breakpoint576) {
      gap: 14px;
    }

    a {
      line-height: 1;
      font-weight: 500;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    span {
      user-select: none;
    }
  }

  &__back {
    width: 28px;
    height: 28px;
    flex-shrink: 0;

    @media (max-width: $breakpoint1680) {
      width: 26px;
      height: 26px;
    }

    @media (max-width: $breakpoint1450) {
      width: 24px;
      height: 24px;
    }

    @media (max-width: $breakpoint992) {
      width: 22px;
      height: 22px;
    }

    @media (max-width: $breakpoint768) {
      width: 20px;
      height: 20px;
    }

    svg {
      width: 100%;
      height: 100%;
      max-width: none;
      transform: rotate(90deg);
    }
  }
}
</style>
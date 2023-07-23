<script setup>
import HeroArt from '../icons/HeroArt.vue'
import AppButton from '../AppButton.vue'
import Arrow from '../icons/Arrow.vue'
import { slideUp, fadeIn } from '../../assets/js/animations'

// Animations
const beforeEnterSlide = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateY(65%)'
}

const beforeEnterFade = (el) => {
  el.style.opacity = 0
}

const enterFront = (el) => {
  slideUp({ el, delay: 0.28 })
}

const enterDev = (el) => {
  slideUp({ el, delay: 0.45 })
}

const enterWho = (el) => {
  slideUp({ el, delay: 0.63 })
}

const enterGets = (el) => {
  slideUp({ el, delay: 0.95 })
}

const enterThe = (el) => {
  slideUp({ el, delay: 1.1 })
}

const enterJob = (el) => {
  slideUp({ el, delay: 1.25 })
}

const enterDone = (el) => {
  slideUp({ el, delay: 1.4 })
}

const enterDot = (el) => {
  fadeIn({ el, duration: 0.5, delay: 1.85 })
}

const enterName = (el) => {
  fadeIn({ el, delay: 1.6 })
}

const enterBtn = (el) => {
  fadeIn({ el, delay: 1.7 })
}

const enterArt = (el) => {
  fadeIn({ el, duration: 1, delay: 1.55 })
}
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__block">
        <h1 class="hero__title">
          <div class="hero__title-limiter">
            <Transition appear @before-enter="beforeEnterSlide" @enter="enterFront">
              <span>Front-end&nbsp;</span>
            </Transition>
          </div>

          <div class="hero__title-limiter">
            <Transition appear @before-enter="beforeEnterSlide" @enter="enterDev">
              <span>developer&nbsp;</span>
            </Transition>
          </div>

          <div class="hero__title-limiter">
            <Transition appear @before-enter="beforeEnterSlide" @enter="enterWho">
              <span>who&nbsp;</span>
            </Transition>
          </div>

          <div class="hero__title-limiter">
            <Transition appear @before-enter="beforeEnterSlide" @enter="enterGets">
              <span>gets&nbsp;</span>
            </Transition>
          </div>

          <div class="hero__title-limiter">
            <Transition appear @before-enter="beforeEnterSlide" @enter="enterThe">
              <span>the&nbsp;</span>
            </Transition>
          </div>

          <div class="hero__title-limiter">
            <Transition appear @before-enter="beforeEnterSlide" @enter="enterJob">
              <span>job&nbsp;</span>
            </Transition>
          </div>

          <div class="hero__title-limiter">
            <Transition appear @before-enter="beforeEnterSlide" @enter="enterDone">
              <span>done<span class="dot-mobile">.</span></span>
            </Transition>
          </div>

          <Transition appear @before-enter="beforeEnterFade" @enter="enterDot">
            <span class="dot-desktop">.</span>
          </Transition>
        </h1>

        <Transition appear @before-enter="beforeEnterFade" @enter="enterName">
          <h4 class="hero__text text">Oleksandr Vintoniak</h4>
        </Transition>

        <Transition appear @before-enter="beforeEnterFade" @enter="enterBtn">
          <AppButton :text="'Explore more'" :href="'#about'">
            <template v-slot:icon>
              <Arrow />
            </template>
          </AppButton>
        </Transition>
      </div>
    </div>

    <Transition appear @before-enter="beforeEnterFade" @enter="enterArt">
      <HeroArt class="hero__art" />
    </Transition>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.hero {
  .container {
    padding-top: 125px;
    padding-bottom: 455px;

    @media (max-width: $breakpoint1680) {
      padding-top: 75px;
      padding-bottom: 390px;
    }

    @media (max-width: $breakpoint1450) {
      padding-bottom: 360px;
    }

    @media (max-width: $breakpoint1200) {
      padding-top: 65px;
      padding-bottom: 330px;
    }

    @media (max-width: $breakpoint992) {
      padding-bottom: 380px;
    }

    @media (max-width: $breakpoint768) {
      padding-top: 50px;
      padding-bottom: 320px;
    }

    @media (max-width: $breakpoint576) {
      padding-top: 30px;
    }

    @media (max-width: $breakpoint420) {
      padding-bottom: 260px;
    }
  }

  &__block {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 1220px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 60px;

    @media (max-width: $breakpoint1680) {
      max-width: 1120px;
      gap: 50px;
    }

    @media (max-width: $breakpoint1450) {
      max-width: 950px;
      gap: 40px;
    }

    @media (max-width: $breakpoint1200) {
      max-width: 850px;
    }

    @media (max-width: $breakpoint992) {
      align-items: center;
      margin: 0 auto;
      max-width: 850px;
    }

    @media (max-width: $breakpoint768) {
      gap: 30px;
    }

    @media (max-width: $breakpoint420) {
      gap: 25px;
    }
  }

  &__title {
    font-weight: 800;
    font-size: 110px;
    line-height: 110%;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: $breakpoint1680) {
      font-size: 100px;
    }

    @media (max-width: $breakpoint1450) {
      font-size: 84px;
    }

    @media (max-width: $breakpoint1200) {
      font-size: 76px;
    }

    @media (max-width: $breakpoint992) {
      font-size: 64px;
      justify-content: center;
    }

    @media (max-width: $breakpoint768) {
      font-size: 52px;
    }

    @media (max-width: $breakpoint576) {
      font-size: 40px;
    }

    @media (max-width: $breakpoint420) {
      font-size: 32px;
    }

    &-limiter {
      overflow: hidden;
    }

    span {
      display: inline-block;
    }

    .dot-desktop {
      @media (max-width: $breakpoint992) {
        display: none;
      }
    }

    .dot-mobile {
      display: none;

      @media (max-width: $breakpoint992) {
        display: inline;
      }
    }
  }

  &__art {
    position: absolute;
    bottom: 0;
    right: -95px;

    @media (max-width: $breakpoint1680) {
      width: 1150px;
      height: auto;
      right: -80px;
    }

    @media (max-width: $breakpoint1450) {
      width: 1000px;
      right: -70px;
    }

    @media (max-width: $breakpoint1200) {
      width: 900px;
      right: -63px;
    }

    @media (max-width: $breakpoint992) {
      width: 800px;
      right: -57px;
    }

    @media (max-width: $breakpoint768) {
      width: 700px;
      right: -48px;
    }

    @media (max-width: $breakpoint420) {
      width: 550px;
      right: -38px;
    }
  }
}
</style>
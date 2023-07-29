<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { slideUp, fadeIn } from '../../assets/js/animations'
import HeroArt from '../icons/HeroArt.vue'
import AppButton from '../AppButton.vue'
import Arrow from '../icons/Arrow.vue'
import { scrollToElementById } from "../../assets/js/helpers"

const titleFront = ref(null)
const titleDev = ref(null)
const titleWho = ref(null)
const titleGets = ref(null)
const titleThe = ref(null)
const titleJob = ref(null)
const titleDone = ref(null)
const heroName = ref(null)
const heroBtn = ref(null)
const heroArt = ref(null)

const heroAnimation = () => {
  const tlTitleFront = slideUp({ el: titleFront.value, duration: 0.75 })
  const tlTitleDev = slideUp({ el: titleDev.value, duration: 0.75 })
  const tlTitleWho = slideUp({ el: titleWho.value })
  const tlTitleGets = slideUp({ el: titleGets.value })
  const tlTitleThe = slideUp({ el: titleThe.value })
  const tlTitleJob = slideUp({ el: titleJob.value })
  const tlTitleDone = slideUp({ el: titleDone.value })
  const tlName = fadeIn({ el: heroName.value })
  const tlButton = fadeIn({ el: heroBtn.value })
  const tlArt = fadeIn({ el: heroArt.value, duration: 1 })

  const timeline = gsap.timeline({ paused: true })
    .add(tlTitleFront, 0.25)
    .add(tlTitleDev, 0.25)
    .add(tlTitleWho, 0.4)
    .add(tlTitleGets, 0.55)
    .add(tlTitleThe, 0.7)
    .add(tlTitleJob, 0.85)
    .add(tlTitleDone, 1.05)
    .add(tlArt, 1.15)
    .add(tlName, 1.2)
    .add(tlButton, 1.35)
    .play()
}

onMounted(() => {
  heroAnimation()
})
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__block">
        <h1 class="hero__title">
          <div class="hero__title-limiter">
            <span ref="titleFront">Front-end&nbsp;</span>
          </div>

          <div class="hero__title-limiter">
            <span ref="titleDev">developer&nbsp;</span>
          </div>

          <div class="hero__title-limiter">
            <span ref="titleWho">who&nbsp;</span>
          </div>

          <div class="hero__title-limiter">
            <span ref="titleGets">gets&nbsp;</span>
          </div>

          <div class="hero__title-limiter">
            <span ref="titleThe">the&nbsp;</span>
          </div>

          <div class="hero__title-limiter">
            <span ref="titleJob">job&nbsp;</span>
          </div>

          <div class="hero__title-limiter">
            <span ref="titleDone">done.</span>
          </div>
        </h1>

        <h4 class="hero__text text" ref="heroName">Oleksandr Vintoniak</h4>

        <div ref="heroBtn">
          <AppButton :text="'Explore more'" @click="scrollToElementById('about')">
            <template v-slot:icon>
              <Arrow />
            </template>
          </AppButton>
        </div>
      </div>
    </div>

    <div ref="heroArt">
      <HeroArt class="hero__art" />
    </div>
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
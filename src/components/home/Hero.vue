<script setup>
import HeroArt from '../icons/HeroArt.vue'
import AppButton from '../AppButton.vue'
import Arrow from '../icons/Arrow.vue'
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero__block">
        <h1 class="hero__title">Front-end developer who gets the job done.</h1>
        <h4 class="hero__text text">Oleksandr Vintoniak</h4>

        <AppButton :text="'Explore more'" :href="'#about'">
          <template v-slot:icon>
            <Arrow />
          </template>
        </AppButton>
      </div>
    </div>

    <HeroArt class="hero__art" />
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
      text-align: center;
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
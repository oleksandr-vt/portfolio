<script setup>
import AppButton from './AppButton.vue'
import Arrow from './icons/Arrow.vue'
</script>

<template>
  <section class="interest section">
    <div class="container">
      <div class="interest__block">
        <h3 class="interest__title">Interested in collaborating with me?</h3>
        <p class="interest__text text">I am always open to discussing projects, ideas, and things we can arrange to ensure your success.</p>

        <AppButton :text="'Contact me'" :href="'#contact'">
          <template v-slot:icon>
            <Arrow />
          </template>
        </AppButton>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.interest {
  &__block {
    width: 100%;
    max-width: 1264px;
    margin: 0 auto;
    border: 2px solid $color-aqua;
    box-shadow: $shadow-xl;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: $breakpoint1680) {
      max-width: 1120px;
    }

    @media (max-width: $breakpoint1450) {
      max-width: 1050px;
      padding: 40px;
    }

    @media (max-width: $breakpoint992) {
      padding: 35px;
      box-shadow: $shadow-md;
    }

    @media (max-width: $breakpoint576) {
      padding: 25px 20px;
    }
  }

  &__title {
    font-size: 62px;
    font-weight: 700;

    @media (max-width: $breakpoint1680) {
      font-size: 54px;
    }

    @media (max-width: $breakpoint1450) {
      font-size: 50px;
    }

    @media (max-width: $breakpoint1200) {
      font-size: 46px;
    }

    @media (max-width: $breakpoint992) {
      font-size: 42px;
    }

    @media (max-width: $breakpoint768) {
      font-size: 36px;
    }

    @media (max-width: $breakpoint576) {
      font-size: 32px;
    }

    @media (max-width: $breakpoint420) {
      font-size: 26px;
    }
  }

  &__text {
    padding: 30px 80px 50px;

    @media (max-width: $breakpoint1450) {
      padding: 30px 60px 50px;
    }

    @media (max-width: $breakpoint1200) {
      padding: 30px 0 50px;
    }

    @media (max-width: $breakpoint992) {
      padding: 25px 0 40px;
    }

    @media (max-width: $breakpoint576) {
      padding: 20px 0 30px;
    }
  }
}
</style>
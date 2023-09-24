<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { slideUp, staggerIn } from '../../assets/js/animations'
import AppButton from '../AppButton.vue'
import Arrow from '../icons/Arrow.vue'
import { allWorks } from '../../assets/js/data'

const slides = ref(allWorks)

const worksTitle = ref(null)
const sliderRefs = ref(null)

const worksAnimation = () => {
  const sliderElements = sliderRefs.value

  const tlTitle = slideUp({ el: worksTitle.value })

  const tlWorks = sliderElements.map(el => {
    const index = sliderElements.indexOf(el)
    const tl = staggerIn({ el, index })
    return tl
  })

  const timeline = gsap.timeline({ paused: true })
    .add(tlTitle, 0)
    .add(tlWorks, 0.25)
    .play()
}

const handleButtonClick = (str) => {
  const formattedStr = str.toLowerCase().replace(/\s+/g, '')
  gtag('event', `list_works_${formattedStr}_button`)
}

onMounted(() => {
  worksAnimation()
})
</script>

<template>
  <section class="works section-padding">
    <div class="container">
      <div class="works__title title">
        <h2 ref="worksTitle">Works</h2>
      </div>

      <div class="works__list">
        <div class="works__block" v-for="(slide, index) in slides" :key="index" ref="sliderRefs">
          <img class="works__block-img" :src="slide.imagePath" :alt="slide.imageAlt" loading="lazy">

          <div class="works__block-inner">
            <h4 class="works__block-title">{{ slide.title }}</h4>
            <p class="works__block-text text">{{ slide.text }}</p>

            <AppButton class="works__block-btn" @click="handleButtonClick(slide.title)" :text="'Open website'"
              :href="slide.href" target="_blank">
              <template v-slot:icon>
                <Arrow style="transform: rotate(-135deg); margin-bottom: 2px;" />
              </template>
            </AppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.works {
  text-align: center;

  .container {
    padding-top: 30px;

    @media (max-width: $breakpoint1450) {
      padding-top: 20px;
    }
  }

  &__block {
    width: 100%;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    border: 2px solid $color-aqua;
    background: $color-primary-hover;
    box-shadow: $shadow-xl;
    padding: 20px;
    margin-bottom: 50px;
    text-align: left;

    @media (max-width: $breakpoint1450) {
      margin-bottom: 45px;
    }

    @media (max-width: $breakpoint1200) {
      margin-bottom: 40px;
    }

    @media (max-width: $breakpoint992) {
      flex-direction: column;
      box-shadow: $shadow-md;
    }

    @media (max-width: $breakpoint768) {
      padding: 16px;
      margin-bottom: 36px;
    }

    @media (max-width: $breakpoint576) {
      margin-bottom: 30px;
    }

    @media (max-width: $breakpoint420) {
      padding: 14px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    &:nth-child(even) {
      flex-direction: row-reverse;

      @media (max-width: $breakpoint992) {
        flex-direction: column;
      }

      .works__block-img {
        margin-right: 0;
        margin-left: 30px;

        @media (max-width: $breakpoint1450) {
          margin-left: 20px;
        }

        @media (max-width: $breakpoint992) {
          margin: 0 0 20px;
        }

        @media (max-width: $breakpoint420) {
          margin: 0 0 16px;
        }
      }
    }

    &-img {
      width: 100%;
      max-width: 475px;
      object-fit: cover;
      aspect-ratio: 16/9;
      align-self: flex-start;
      flex-shrink: 0;
      margin-right: 30px;

      @media (max-width: $breakpoint1450) {
        max-width: 400px;
        margin-right: 20px;
      }

      @media (max-width: $breakpoint1200) {
        max-width: 375px;
      }

      @media (max-width: $breakpoint992) {
        max-width: 100%;
        margin: 0 0 20px;
      }

      @media (max-width: $breakpoint420) {
        margin: 0 0 16px;
      }
    }

    &-inner {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    &-title {
      font-size: 40px;
      line-height: 1;
      font-weight: 700;

      @media (max-width: $breakpoint1680) {
        font-size: 36px;
      }

      @media (max-width: $breakpoint1450) {
        font-size: 34px;
      }

      @media (max-width: $breakpoint1200) {
        font-size: 32px;
      }

      @media (max-width: $breakpoint992) {
        font-size: 36px;
      }

      @media (max-width: $breakpoint768) {
        font-size: 32px;
      }

      @media (max-width: $breakpoint576) {
        font-size: 28px;
      }

      @media (max-width: $breakpoint420) {
        font-size: 25px;
      }
    }

    &-text {
      font-weight: 500;
      padding: 18px 0;

      @media (max-width: $breakpoint1450) {
        padding: 16px 0;
      }

      @media (max-width: $breakpoint992) {
        padding: 20px 0 32px;
      }

      @media (max-width: $breakpoint768) {
        padding: 20px 0 32px;
      }

      @media (max-width: $breakpoint420) {
        padding: 16px 0 32px;
      }
    }

    &-btn {
      align-self: flex-end;
      margin-top: auto;
    }
  }
}
</style>../../assets/js/data
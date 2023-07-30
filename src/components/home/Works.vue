<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { slideUp, fadeIn } from '../../assets/js/animations'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Pagination } from 'swiper'
import AppButton from '../AppButton.vue'
import Arrow from '../icons/Arrow.vue'
import { favouriteWorks } from '../../assets/js/works'

const slides = ref(favouriteWorks)

const scrollTriggerRef = ref(null)
const sectionWorks = ref(null)

const worksTitle = ref(null)
const worksSwiper = ref(null)

const worksAnimation = () => {
  const tlTitle = slideUp({ el: worksTitle.value })
  const tlSwiper = fadeIn({ el: worksSwiper.value, duration: 0.8 })

  const timeline = gsap.timeline({ paused: true })
    .add(tlTitle, 0)
    .add(tlSwiper, 0.3)

  if (scrollTriggerRef.value) {
    scrollTriggerRef.value.kill()
  }

  scrollTriggerRef.value = ScrollTrigger.create({
    trigger: sectionWorks.value,
    start: 'top 70%',
    animation: timeline,
  })
}

const handleButtonClick = (str) => {
  gtag('event', `slider_works_${str}_button`)
}

onMounted(() => {
  worksAnimation()
})

onUnmounted(() => {
  scrollTriggerRef.value.kill()
})
</script>

<template>
  <section class="works section-padding" ref="sectionWorks">
    <div class="container">
      <div class="works__title title">
        <h2 ref="worksTitle">Works</h2>
      </div>

      <div ref="worksSwiper">
        <swiper id="worksSwiper" :slidesPerView="'auto'" :enabled="true" :freeMode="true"
          :pagination="{ clickable: true }" :breakpoints="{ 992: { enabled: false } }" :modules="[FreeMode, Pagination]">
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <img class="swiper-slide-img" :src="slide.imagePath" :alt="slide.imageAlt" loading="lazy">
            <h4 class="swiper-slide-text text">
              <span>{{ slide.title }}</span>
              {{ slide.text }}
            </h4>

            <AppButton class="swiper-slide-btn" @click="handleButtonClick(`item${index + 1}`)" :text="'Open website'"
              :href="slide.href" target="_blank">
              <template v-slot:icon>
                <Arrow style="transform: rotate(-135deg); margin-bottom: 2px;" />
              </template>
            </AppButton>
          </swiper-slide>

          <swiper-slide>
            <img :src="'img/last-slide-art.png'" alt="img" loading="lazy">

            <AppButton :text="'Check out more'" @click="handleButtonClick('last')" :href="'/works'" :isRouterLink="true">
              <template v-slot:icon>
                <Arrow style="transform: rotate(-90deg); margin-bottom: 2px;" />
              </template>
            </AppButton>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.works {
  .swiper {
    overflow: visible;

    @media (max-width: $breakpoint992) {
      padding-bottom: 60px;
    }

    @media (max-width: $breakpoint576) {
      padding-bottom: 50px;
    }
  }

  .swiper-slide {
    width: 650px;
    height: auto;
    display: flex;
    flex-direction: column;
    border: 2px solid $color-aqua;
    background: $color-primary-hover;
    box-shadow: $shadow-xl;
    padding: 20px;
    margin-right: 60px;

    @media (max-width: $breakpoint1680) {
      width: 600px;
      margin-right: 50px;
    }

    @media (max-width: $breakpoint1200) {
      width: 530px;
      margin-right: 45px;
      padding: 18px;
    }

    @media (max-width: $breakpoint992) {
      width: 470px;
      margin-right: 40px;
      box-shadow: $shadow-md;
    }

    @media (max-width: $breakpoint768) {
      width: 420px;
      margin-right: 36px;
      padding: 16px;
    }

    @media (max-width: $breakpoint576) {
      width: 375px;
    }

    @media (max-width: $breakpoint420) {
      width: 350px;
      padding: 14px;
    }

    &:last-child {
      margin-right: 0;
      justify-content: space-between;
      align-items: center;
      gap: 20px;

      img {
        height: 100%;
        max-height: 450px;

        @media (max-width: $breakpoint1680) {
          max-height: 420px;
        }

        @media (max-width: $breakpoint1200) {
          max-height: 380px;
        }

        @media (max-width: $breakpoint992) {
          max-height: 345px;
        }

        @media (max-width: $breakpoint768) {
          max-height: 310px;
        }

        @media (max-width: $breakpoint576) {
          max-height: 290px;
        }
      }
    }

    &-img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 16/9;
    }

    &-text {
      font-weight: 500;
      padding: 18px 0 28px;

      @media (max-width: $breakpoint1680) {
        padding: 16px 0 24px;
      }

      @media (max-width: $breakpoint992) {
        padding: 14px 0 24px;
      }

      @media (max-width: $breakpoint576) {
        padding: 12px 0 20px;
      }

      span {
        font-size: 40px;
        line-height: 1;
        font-weight: 700;

        @media (max-width: $breakpoint1680) {
          font-size: 34px;
        }

        @media (max-width: $breakpoint1200) {
          font-size: 32px;
        }

        @media (max-width: $breakpoint992) {
          font-size: 30px;
        }

        @media (max-width: $breakpoint768) {
          font-size: 28px;
        }

        @media (max-width: $breakpoint576) {
          font-size: 25px;
        }
      }
    }

    &-btn {
      align-self: flex-end;
      margin-top: auto;
    }
  }
}
</style>
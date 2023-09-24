<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import debounce from "debounce"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { slideUp, fadeIn } from '../../assets/js/animations'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper'
import Star from '../icons/Star.vue'
import Feather from '../icons/Feather.vue'
import Arrow from '../icons/Arrow.vue'
import { testimonials } from '../../assets/js/data'
import { animationPlaceholderPX } from '../../assets/js/helpers'

const slides = ref(testimonials)

const scrollTriggerRef = ref(null)
const sectionTestimonials = ref(null)

const testimonialsTitle = ref(null)
const testimonialsSwiper = ref(null)

const timeline = ref(null)

const killScrollTrigger = () => {
  if (!scrollTriggerRef.value) return
  scrollTriggerRef.value.kill()
  scrollTriggerRef.value = null
}

const updateScrollTrigger = () => {
  killScrollTrigger()
  scrollTriggerRef.value = ScrollTrigger.create({
    trigger: sectionTestimonials.value,
    start: `top 70%-=${animationPlaceholderPX()}`,
    animation: timeline.value,
  })
}

const debouncedUpdateScrollTrigger = debounce(updateScrollTrigger, 100)

const handleButtonClick = () => {
  gtag('event', `testimonials_slider_buttons`)
}

onMounted(() => {
  const tlTitle = slideUp({ el: testimonialsTitle.value })
  const tlSwiper = fadeIn({ el: testimonialsSwiper.value })

  timeline.value = gsap.timeline({ paused: true })
    .add(tlTitle, 0)
    .add(tlSwiper, 0.25)

  updateScrollTrigger()
  window.addEventListener("resize", debouncedUpdateScrollTrigger)
})

onUnmounted(() => {
  window.removeEventListener("resize", debouncedUpdateScrollTrigger)
  killScrollTrigger()
})
</script>

<template>
  <section class="testimonials section-padding" ref="sectionTestimonials">
    <div class="container">
      <div class="testimonials__title title">
        <h2 ref="testimonialsTitle">
          Testimonials&nbsp;
          <Feather class="testimonials__title-icon" />
        </h2>
      </div>

      <div ref="testimonialsSwiper">
        <swiper id="testimonialsSwiper" :slidesPerView="1" :pagination="{ clickable: true }"
          :navigation="{ clickable: true, nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }" :loop="true"
          :autoplay="{ delay: 6000 }" :spaceBetween="230" :modules="[Pagination, Navigation, Autoplay]">
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <h3 class="swiper-slide-title">{{ slide.title }}</h3>
            <p class="swiper-slide-text text">{{ slide.text }}</p>

            <div class="swiper-slide-stars">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>

            <h5 class="swiper-slide-author text">{{ slide.author }}</h5>
          </swiper-slide>

          <div class="swiper-button-prev" @click="handleButtonClick()">
            <Arrow style="transform: rotate(90deg);" />
          </div>
          <div class="swiper-button-next" @click="handleButtonClick()">
            <Arrow style="transform: rotate(-90deg);" />
          </div>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.testimonials {
  text-align: center;

  .container {
    overflow: hidden;
  }

  &__title {
    display: flex;
    align-items: center;
    justify-content: center;

    &-icon {
      width: 100%;
      max-width: 65px;
      height: auto;

      @media (max-width: $breakpoint1680) {
        max-width: 55px;
      }

      @media (max-width: $breakpoint1200) {
        max-width: 48px;
      }

      @media (max-width: $breakpoint992) {
        max-width: 42px;
      }

      @media (max-width: $breakpoint768) {
        max-width: 36px;
      }

      @media (max-width: $breakpoint576) {
        max-width: 30px;
      }

      @media (max-width: $breakpoint420) {
        max-width: 26px;
      }
    }
  }

  .swiper {
    overflow: visible;
    padding: 30px 160px 80px;

    @media (max-width: $breakpoint1680) {
      padding: 30px 90px 75px;
    }

    @media (max-width: $breakpoint1200) {
      padding: 20px 90px 70px;
    }

    @media (max-width: $breakpoint992) {
      padding: 15px 0 60px;
    }

    @media (max-width: $breakpoint576) {
      padding: 15px 0 50px;
    }
  }

  .swiper-slide {
    user-select: none;

    &-title {
      font-size: 54px;
      font-weight: 700;
      padding-bottom: 30px;

      @media (max-width: $breakpoint1450) {
        font-size: 48px;
      }

      @media (max-width: $breakpoint1200) {
        font-size: 44px;
      }

      @media (max-width: $breakpoint992) {
        font-size: 40px;
      }

      @media (max-width: $breakpoint768) {
        font-size: 32px;
        padding-bottom: 25px;
      }

      @media (max-width: $breakpoint576) {
        font-size: 28px;
        padding-bottom: 20px;
      }

      @media (max-width: $breakpoint420) {
        font-size: 24px;
      }
    }

    &-text {
      @media (max-width: $breakpoint420) {
        font-size: 18px;
      }
    }

    &-stars {
      padding: 50px 0 30px;
      display: flex;
      justify-content: center;
      gap: 20px;

      @media (max-width: $breakpoint992) {
        gap: 15px;
      }

      @media (max-width: $breakpoint768) {
        padding: 40px 0 30px;
        gap: 10px;
      }

      @media (max-width: $breakpoint576) {
        padding: 30px 0 25px;
      }

      svg {
        @media (max-width: $breakpoint992) {
          width: 100%;
          max-width: 28px;
          height: auto;
        }

        @media (max-width: $breakpoint768) {
          max-width: 24px;
        }
      }
    }

    &-author {
      font-weight: 600;
    }
  }
}
</style>
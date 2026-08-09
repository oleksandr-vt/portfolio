<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import debounce from "debounce"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { slideUp, fadeIn } from '../../assets/js/animations'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
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

const swiperInstance = ref(null)
let autoplayStarted = false

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
  swiper.autoplay?.stop()
}

const startAutoplay = () => {
  if (autoplayStarted) return

  autoplayStarted = true
  swiperInstance.value?.autoplay?.start()
}

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
    onEnter: startAutoplay,
  })

  if (scrollTriggerRef.value.progress > 0) startAutoplay()
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
          <Feather class="testimonials__title-icon" aria-hidden="true" />
        </h2>
      </div>

      <div ref="testimonialsSwiper">
        <swiper id="testimonialsSwiper" :slidesPerView="1" :pagination="{ clickable: true }"
          :navigation="{ clickable: true, nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }" :loop="true"
          :autoplay="{ delay: 6000, pauseOnMouseEnter: true }" :spaceBetween="230"
          :modules="[Pagination, Navigation, Autoplay]" @swiper="onSwiper">
          <swiper-slide v-for="(slide, index) in slides" :key="index">
            <h3 class="swiper-slide-title">{{ slide.title }}</h3>
            <p class="swiper-slide-text text">{{ slide.text }}</p>

            <div class="swiper-slide-stars" role="img" aria-label="Rated 5 out of 5">
              <Star v-for="i in 5" :key="i" aria-hidden="true" />
            </div>

            <p class="swiper-slide-author text">{{ slide.author }}</p>
          </swiper-slide>

          <button type="button" class="swiper-button-prev" aria-label="Previous testimonial"
            @click="handleButtonClick()">
            <Arrow style="transform: rotate(90deg);" aria-hidden="true" />
          </button>
          <button type="button" class="swiper-button-next" aria-label="Next testimonial"
            @click="handleButtonClick()">
            <Arrow style="transform: rotate(-90deg);" aria-hidden="true" />
          </button>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use "@/assets/css/variables.scss" as *;

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
      max-width: 52px;
      height: auto;

      @media (max-width: $breakpoint1680) {
        max-width: 46px;
      }

      @media (max-width: $breakpoint1200) {
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
    padding: 26px 140px 66px;

    @media (max-width: $breakpoint1680) {
      padding: 26px 80px 62px;
    }

    @media (max-width: $breakpoint1200) {
      padding: 18px 80px 58px;
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
      font-size: 42px;
      font-weight: 700;
      padding-bottom: 30px;

      @media (max-width: $breakpoint1680) {
        font-size: 38px;
      }

      @media (max-width: $breakpoint992) {
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

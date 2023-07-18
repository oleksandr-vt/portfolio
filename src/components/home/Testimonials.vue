<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation, Autoplay } from 'swiper'
import Star from '../icons/Star.vue'
import Feather from '../icons/Feather.vue'
import Arrow from '../icons/Arrow.vue'

const slides = ref([
  {
    title: `Exceptional work with the front-end task`,
    text: `“Oleksandr did exceptional work with the front-end task. The resulting code was very efficient, well structured, and, most importantly, exactly up to spec. I will work with Oleksandr again!”`,
    author: 'Yaroslav T.',
  },
  {
    title: `Completed work faster and better`,
    text: `“He's really good dev. Completed work faster and better. Will work in future again.”`,
    author: `Edmund K.`,
  },
  {
    title: `Really enjoyed working with Oleksandr!`,
    text: `“Really enjoyed working with Oleksandr! He's polite, punctual and gets the job done. Will use again for front end jobs.”`,
    author: `John R.`,
  },
  {
    title: `Work has exceeded my expectations`,
    text: `“I wanted to express my utmost satisfaction and gratitude for the exceptional job you have done. Your work has exceeded my expectations, and I am truly impressed with the quality and efficiency you have demonstrated throughout the project.”`,
    author: `Abhishek S.`,
  },
  {
    title: `Will definately hire again!`,
    text: `“Oleksandr was a pleasure to work with. He completed the work very quickly as promised, he communicated well, and adhered to timeline commitments. Will definately hire again!”`,
    author: `Peter R.`,
  },
  {
    title: `Smart, fast, offers many solutions`,
    text: `“Smart, fast, offers many solutions, 100% recommend, everything way too perfect”`,
    author: `Valerian G.`,
  },
  {
    title: `Great coder`,
    text: `“Great coder, A++ communication and fast work! Will work, for sure again with Oleksandr”`,
    author: `Andy H.`,
  },
  {
    title: `One of the best freelancers I worked with`,
    text: `“One of the best freelancers I worked with, Oleksandr knows his stuff and works fast and offers quality works. Will definitely hire him again”`,
    author: `Red B.`,
  },
])
</script>

<template>
  <section class="testimonials section-padding">
    <div class="container">
      <h2 class="testimonials__title title">
        Testimonials

        <Feather class="testimonials__title-icon" />
      </h2>

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

        <div class="swiper-button-prev">
          <Arrow style="transform: rotate(90deg);" />
        </div>
        <div class="swiper-button-next">
          <Arrow style="transform: rotate(-90deg);" />
        </div>
      </swiper>
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
      margin-left: 55px;
      width: 100%;
      max-width: 65px;
      height: auto;

      @media (max-width: $breakpoint1680) {
        max-width: 55px;
        margin-left: 45px;
      }

      @media (max-width: $breakpoint1200) {
        max-width: 48px;
        margin-left: 40px;
      }

      @media (max-width: $breakpoint992) {
        max-width: 42px;
        margin-left: 35px;
      }

      @media (max-width: $breakpoint768) {
        max-width: 36px;
        margin-left: 28px;
      }

      @media (max-width: $breakpoint576) {
        max-width: 30px;
        margin-left: 24px;
      }

      @media (max-width: $breakpoint420) {
        max-width: 26px;
        margin-left: 20px;
      }
    }
  }

  .swiper {
    overflow: visible;
    padding: 30px 160px 90px;

    @media (max-width: $breakpoint1680) {
      padding: 30px 90px 75px;
    }

    @media (max-width: $breakpoint992) {
      padding: 20px 0 60px;
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
      padding-bottom: 40px;

      @media (max-width: $breakpoint1680) {
        padding-bottom: 35px;
      }

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
      padding: 60px 0 35px;
      display: flex;
      justify-content: center;
      gap: 20px;

      @media (max-width: $breakpoint1200) {
        padding: 50px 0 35px;
      }

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
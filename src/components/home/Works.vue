<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Pagination } from 'swiper'
import AppButton from '../AppButton.vue'
import Arrow from '../icons/Arrow.vue'

const slides = ref([
  {
    title: 'Kraudcloud tailwind tailwind tailwind tailwind tailwind',
    imagePath: 'img/kraudcloud.png',
    imageAlt: 'Kraudcloud',
    href: '#',
  },
  {
    title: 'Kraudcloud tailwind',
    imagePath: 'img/kraudcloud.png',
    imageAlt: 'Kraudcloud',
    href: '#',
  },
  {
    title: 'Diistil tailwind tailwind',
    imagePath: 'img/kraudcloud.png',
    imageAlt: 'Kraudcloud',
    href: '#',
  },
  {
    title: 'Diistil tailwind tailwind tailwind tailwind tailwind',
    imagePath: 'img/kraudcloud.png',
    imageAlt: 'Kraudcloud',
    href: '#',
  },
  {
    title: 'Diistil tailwind tailwind',
    imagePath: 'img/kraudcloud.png',
    imageAlt: 'Kraudcloud',
    href: '#',
  },
])
</script>

<template>
  <section class="works section-padding">
    <div class="container">
      <h2 class="works__title title">Works</h2>

      <swiper id="worksSwiper" :slidesPerView="'auto'" :enabled="true" :freeMode="true" :pagination="{ clickable: true }"
        :breakpoints="{ 992: { enabled: false } }" :modules="[FreeMode, Pagination]">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img class="swiper-slide-img" :src="slide.imagePath" :alt="slide.imageAlt" loading="lazy">
          <h4 class="swiper-slide-text text">{{ slide.title }}</h4>

          <AppButton class="swiper-slide-btn" :text="'Open website'" :href="slide.href" target="_blank">
            <template v-slot:icon>
              <Arrow style="transform: rotate(-135deg); margin-bottom: 2px;" />
            </template>
          </AppButton>
        </swiper-slide>
      </swiper>
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
    }

    &-img {
      width: 100%;
      object-fit: cover;
      aspect-ratio: 16/9;
    }

    &-text {
      padding: 24px 0;

      @media (max-width: $breakpoint1680) {
        padding: 18px 0;
      }

      @media (max-width: $breakpoint1200) {
        padding: 16px 0;
      }

      @media (max-width: $breakpoint576) {
        padding: 14px 0 16px;
      }
    }

    &-btn {
      align-self: flex-end;
      margin-top: auto;
    }
  }
}
</style>
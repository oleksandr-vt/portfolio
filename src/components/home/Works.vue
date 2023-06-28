<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode } from 'swiper'
import AppButton from '../AppButton.vue'
import Arrow from '../icons/Arrow.vue'

const slides = ref([
  {
    title: 'Kraudcloud tailwind tailwind tailwind tailwind tailwind',
    imagePath: 'src/assets/img/kraudcloud.png',
    imageAlt: 'Kraudcloud',
    href: '#',
  },
  {
    title: 'Kraudcloud tailwind',
    imagePath: 'src/assets/img/kraudcloud.png',
    imageAlt: 'Kraudcloud',
    href: '#',
  },
  {
    title: 'Diistil tailwind tailwind',
    imagePath: 'src/assets/img/kraudcloud.png',
    imageAlt: 'Kraudcloud',
    href: '#',
  },
  {
    title: 'Diistil tailwind tailwind tailwind tailwind tailwind',
    imagePath: 'src/assets/img/kraudcloud.png',
    imageAlt: 'Kraudcloud',
    href: '#',
  },
  {
    title: 'Diistil tailwind tailwind',
    imagePath: 'src/assets/img/kraudcloud.png',
    imageAlt: 'Kraudcloud',
    href: '#',
  },
])
</script>

<template>
  <section class="works">
    <div class="container">
      <h2 class="works__title title">Works</h2>

      <swiper
        id="worksSwiper"
        :slidesPerView="'auto'"
        :enabled="true"
        :freeMode="true"
        :breakpoints="{ 992: { enabled: false }}"
        :modules="[FreeMode]"
      >
        <swiper-slide v-for="(slide, index) in slides" :key="index">
          <img class="swiper-slide-img" :src="slide.imagePath" :alt="slide.imageAlt" loading="lazy">
          <h4 class="swiper-slide-text text">{{ slide.title }}</h4>

          <AppButton class="swiper-slide-btn" :text="'Open website'" :href="slide.href">
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
  .container {
    padding-top: 140px;
    padding-bottom: 140px;
  }

  &__title {
    margin-bottom: 60px;
  }

  .swiper {
    overflow: visible;
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
    }

    &-btn {
      align-self: flex-end;
      margin-top: auto;
    }
  }
}
</style>
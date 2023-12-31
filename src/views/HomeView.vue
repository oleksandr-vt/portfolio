<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import Hero from '../components/home/Hero.vue'
import About from '../components/home/About.vue'
import Works from '../components/home/Works.vue'
import Interest from '../components/home/Interest.vue'
import Testimonials from '../components/home/Testimonials.vue'
import Contacts from '../components/Contacts.vue'

const mainWrapper = ref(null)
const pageWrapper = ref(null)

const destructureScrollOffset = (currentScrollPosition) => {
  if (!pageWrapper.value) return

  const swiperWrapper = document.getElementById('worksSwiper')
  const swiperTrack = swiperWrapper.querySelector('.swiper-wrapper')

  const swiperPlaceholderPX = swiperTrack.scrollWidth - swiperWrapper.clientWidth

  const { top: sliderTop, height: sliderHeight } = swiperWrapper.getBoundingClientRect()
  const { top: pageTop } = pageWrapper.value.getBoundingClientRect()
  const screenHeight = window.innerHeight

  const threshold = sliderTop - pageTop - screenHeight / 2 + sliderHeight / 2

  if (currentScrollPosition < threshold) {
    return {
      pageOffset: currentScrollPosition,
      slideOffset: 0
    }
  }

  if (currentScrollPosition < threshold + swiperPlaceholderPX) {
    return {
      pageOffset: threshold,
      slideOffset: currentScrollPosition - threshold,
    }
  }

  return {
    pageOffset: currentScrollPosition - swiperPlaceholderPX,
    slideOffset: swiperPlaceholderPX,
  }
}

const handleScroll = () => {
  if (!pageWrapper.value) return

  const swiperWrapper = document.getElementById('worksSwiper')
  const swiperTrack = swiperWrapper.querySelector('.swiper-wrapper')
  const currentScrollPosition = document.documentElement.scrollTop

  const {
    pageOffset,
    slideOffset,
  } = destructureScrollOffset(currentScrollPosition)

  pageWrapper.value.style.transform = `translate3d(0px, ${-pageOffset}px, 0px)`
  swiperTrack.style.transform = `translate3d(${-slideOffset}px, 0px, 0px)`
}

const setPageHeight = () => {
  if (pageWrapper.value) {
    const pageWrapperHeight = pageWrapper.value.getBoundingClientRect().height

    const swiperWrapper = document.getElementById('worksSwiper')
    const swiperTrack = swiperWrapper.querySelector('.swiper-wrapper')

    const swiperPlaceholderPX = swiperTrack.scrollWidth - swiperWrapper.clientWidth

    const totalHeight = pageWrapperHeight + swiperPlaceholderPX

    mainWrapper.value.style.minHeight = `${totalHeight}px`
  }
}

const animateEllipses = () => {
  const animatedEllipses = document.querySelectorAll('.illustration__animated')

  animatedEllipses.forEach((ellipse) => {
    const bbox = ellipse.getBBox()
    const centerX = bbox.x + bbox.width / 2
    const centerY = bbox.y + bbox.height / 2

    ellipse.style.transformOrigin = centerX + 'px ' + centerY + 'px'
    ellipse.style.animationDelay = `${Math.random() * 2500}ms`
  })
}

onMounted(() => {
  const mediaQuery = window.matchMedia('(max-width: 991.98px)')

  if (!mediaQuery.matches) {
    setPageHeight()
    animateEllipses()
    window.addEventListener('scroll', handleScroll, { passive: false })
  }

  window.addEventListener('resize', () => {
    if (mediaQuery.matches) {
      window.removeEventListener('scroll', handleScroll)
      return
    }

    setPageHeight()
    animateEllipses()
    window.addEventListener('scroll', handleScroll, { passive: false })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div ref="mainWrapper" class="main__wrapper">
    <div ref="pageWrapper" class="page__wrapper">
      <AppHeader />

      <main>
        <Hero />
        <About />
        <Works />
        <Interest />
        <Testimonials />
        <Contacts />
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.main__wrapper {
  @media (max-width: $breakpoint992) {
    min-height: 0 !important;
  }
}

.page__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  @media (max-width: $breakpoint992) {
    position: relative;
    transform: translate3d(0px, 0px, 0px) !important;
  }
}
</style>
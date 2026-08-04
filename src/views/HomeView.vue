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

let mediaQuery = null
let resizeObserver = null
let syncFrameId = null
let appliedMinHeight = null
let isDesktop = false

const getSwiperEls = () => {
  const swiperWrapper = document.getElementById('worksSwiper')
  const swiperTrack = swiperWrapper?.querySelector('.swiper-wrapper')

  return swiperTrack ? { swiperWrapper, swiperTrack } : null
}

const getSwiperPlaceholderPX = (els) => {
  if (!els) return 0

  return Math.max(0, els.swiperTrack.scrollWidth - els.swiperWrapper.clientWidth)
}

const destructureScrollOffset = (currentScrollPosition, els) => {
  const swiperPlaceholderPX = getSwiperPlaceholderPX(els)

  const { top: sliderTop, height: sliderHeight } = els.swiperWrapper.getBoundingClientRect()
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

  const els = getSwiperEls()
  if (!els) return

  const currentScrollPosition = document.documentElement.scrollTop

  const {
    pageOffset,
    slideOffset,
  } = destructureScrollOffset(currentScrollPosition, els)

  pageWrapper.value.style.transform = `translate3d(0px, ${-pageOffset}px, 0px)`
  els.swiperTrack.style.transform = `translate3d(${-slideOffset}px, 0px, 0px)`
}

const setPageHeight = () => {
  if (!isDesktop || !mainWrapper.value || !pageWrapper.value) return

  const pageWrapperHeight = pageWrapper.value.getBoundingClientRect().height

  const totalHeight = Math.ceil(pageWrapperHeight + getSwiperPlaceholderPX(getSwiperEls()))

  if (totalHeight === appliedMinHeight) return

  appliedMinHeight = totalHeight
  mainWrapper.value.style.minHeight = `${totalHeight}px`

  handleScroll()
}

const scheduleSetPageHeight = () => {
  if (syncFrameId !== null) return

  syncFrameId = requestAnimationFrame(() => {
    syncFrameId = null
    setPageHeight()
  })
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

const enableDesktopScroll = () => {
  if (isDesktop || !pageWrapper.value) return

  isDesktop = true
  animateEllipses()

  resizeObserver = new ResizeObserver(scheduleSetPageHeight)
  resizeObserver.observe(pageWrapper.value)

  const els = getSwiperEls()
  if (els) resizeObserver.observe(els.swiperTrack)

  window.addEventListener('scroll', handleScroll, { passive: true })

  setPageHeight()
}

const disableDesktopScroll = () => {
  if (!isDesktop) return

  isDesktop = false
  window.removeEventListener('scroll', handleScroll)

  resizeObserver?.disconnect()
  resizeObserver = null

  if (syncFrameId !== null) {
    cancelAnimationFrame(syncFrameId)
    syncFrameId = null
  }

  appliedMinHeight = null
  if (mainWrapper.value) mainWrapper.value.style.minHeight = ''
  if (pageWrapper.value) pageWrapper.value.style.transform = ''

  const els = getSwiperEls()
  if (els) els.swiperTrack.style.transform = ''
}

const handleMediaChange = (event) => {
  if (event.matches) {
    disableDesktopScroll()
  } else {
    enableDesktopScroll()
  }
}

onMounted(() => {
  mediaQuery = window.matchMedia('(max-width: 991.98px)')
  mediaQuery.addEventListener('change', handleMediaChange)

  if (!mediaQuery.matches) enableDesktopScroll()
})

onUnmounted(() => {
  mediaQuery?.removeEventListener('change', handleMediaChange)
  disableDesktopScroll()
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
@use "@/assets/css/variables.scss" as *;

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

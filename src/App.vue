<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Arrow from './components/icons/Arrow.vue'

const route = useRoute()

const mainWrapper = ref(null)
const pageWrapper = ref(null)

const destructureScrollOffset = (currentScrollPosition) => {
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
  const pageWrapperHeight = pageWrapper.value.getBoundingClientRect().height

  const swiperWrapper = document.getElementById('worksSwiper')
  const swiperTrack = swiperWrapper.querySelector('.swiper-wrapper')

  const swiperPlaceholderPX = swiperTrack.scrollWidth - swiperWrapper.clientWidth

  const totalHeight = pageWrapperHeight + swiperPlaceholderPX

  mainWrapper.value.style.minHeight = `${totalHeight}px`

  console.log("pageWrapperHeight", pageWrapperHeight)
}

onMounted(() => {
  window.addEventListener("load", function(event) {
    setPageHeight()
    window.addEventListener('scroll', handleScroll, { passive: false })
  })
})
</script>

<template>
  <div ref="mainWrapper">
    <div ref="pageWrapper" class="page__wrapper">
      <header class="header">
        <nav>
          <RouterLink class="header__back" to="/" v-if="route.path !== '/'">
            <Arrow />
          </RouterLink>
    
          <div class="header__links">
            <RouterLink to="/works">Works</RouterLink>
            <span>/</span>
            <RouterLink to="/">About</RouterLink>
            <span>/</span>
            <RouterLink to="/">Contact</RouterLink>
          </div>
        </nav>
      </header>
    
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/variables.scss";

.page__wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

.header {
  padding: 40px 60px;

  @media (max-width: $breakpoint1450) {
    padding: 40px 45px;
  }

  @media (max-width: $breakpoint1200) {
    padding: 30px;
  }

  @media (max-width: $breakpoint768) {
    padding: 25px;
  }

  @media (max-width: $breakpoint576) {
    padding: 25px 20px;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    height: 26px;

    @media (max-width: $breakpoint992) {
      height: 22px;
    }

    @media (max-width: $breakpoint768) {
      height: 20px;
    }
  }

  &__links {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 25px;

    @media (max-width: $breakpoint768) {
      gap: 20px;
    }

    @media (max-width: $breakpoint576) {
      gap: 14px;
    }

    a {
      font-size: 26px;
      line-height: 1;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }

      @media (max-width: $breakpoint992) {
        font-size: 22px;
      }

      @media (max-width: $breakpoint768) {
        font-size: 20px;
      }
      
      @media (max-width: $breakpoint576) {
        font-size: 18px;
        line-height: 20px;
      }
    }

    span {
      user-select: none;
    }
  }

  &__back {
    width: 24px;
    height: 24px;
    flex-shrink: 0;

    @media (max-width: $breakpoint992) {
      width: 22px;
      height: 22px;
    }

    @media (max-width: $breakpoint768) {
      width: 20px;
      height: 20px;
    }

    svg {
      width: 100%;
      height: 100%;
      transform: rotate(90deg);
    }
  }
}
</style>
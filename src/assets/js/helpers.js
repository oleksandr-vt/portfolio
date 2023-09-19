export const animationPlaceholderPX = () => {
  const mediaQuery = window.matchMedia('(max-width: 991.98px)')
  const currentRoute = new URL(window.location.href).pathname

  if (currentRoute === import.meta.env.BASE_URL && !mediaQuery.matches) {
    const swiperWrapper = document.getElementById('worksSwiper')
    const swiperTrack = swiperWrapper.querySelector('.swiper-wrapper')
    return swiperTrack.scrollWidth - swiperWrapper.clientWidth
  }

  return 0
}

export const scrollToElementById = (id) => {
  const element = document.getElementById(id)
  if (!element) return

  const elementTop = element.getBoundingClientRect().top

  const mediaQuery = window.matchMedia('(max-width: 991.98px)')
  const currentRoute = new URL(window.location.href).pathname

  if (currentRoute === import.meta.env.BASE_URL && !mediaQuery.matches) {
    const swiperWrapper = document.getElementById('worksSwiper')
    const swiperTop = swiperWrapper.getBoundingClientRect().top
    const currentScrollPosition = document.documentElement.scrollTop

    if (elementTop > swiperTop && currentScrollPosition < swiperTop) {
      const swiperTrack = swiperWrapper.querySelector('.swiper-wrapper')
      const placeholderPX = swiperTrack.scrollWidth - swiperWrapper.clientWidth
      window.scrollBy(0, elementTop + placeholderPX)
      return
    }
  }

  window.scrollBy(0, elementTop)
}
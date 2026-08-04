const getPinnedSlider = () => {
  if (window.matchMedia('(max-width: 991.98px)').matches) return null

  const pageWrapper = document.querySelector('.page__wrapper')
  const swiperWrapper = document.getElementById('worksSwiper')
  const swiperTrack = swiperWrapper?.querySelector('.swiper-wrapper')

  if (!pageWrapper || !swiperTrack) return null

  const { top: sliderTop, height: sliderHeight } = swiperWrapper.getBoundingClientRect()
  const { top: pageTop } = pageWrapper.getBoundingClientRect()

  return {
    pageTop,
    threshold: sliderTop - pageTop - window.innerHeight / 2 + sliderHeight / 2,
    placeholderPX: Math.max(0, swiperTrack.scrollWidth - swiperWrapper.clientWidth),
  }
}

export const animationPlaceholderPX = () => getPinnedSlider()?.placeholderPX ?? 0

export const scrollToElementById = (id) => {
  const element = document.getElementById(id)
  if (!element) return

  const slider = getPinnedSlider()
  let target

  if (slider) {
    const elementOffset = element.getBoundingClientRect().top - slider.pageTop

    target = elementOffset + (elementOffset >= slider.threshold ? slider.placeholderPX : 0)
  } else {
    target = element.getBoundingClientRect().top + window.scrollY
  }

  target = Math.max(0, target)

  if (window.lenis) {
    window.lenis.resize()
    window.lenis.scrollTo(target)
  } else {
    window.scrollTo({ top: target, behavior: 'smooth' })
  }
}

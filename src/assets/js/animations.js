import { gsap } from 'gsap'

export const slideUp = ({ el, duration = 0.6, delay = 0 }) => {
  try {
    const tl = gsap.timeline({ delay })
      .to(el, {
        duration: duration,
        opacity: 1,
        x: 0,
        y: 0,
        ease: 'Cubic.easeOut',
      })

    return tl
  } catch (e) {
    console.log(e)
  }
}

export const staggerIn = ({ el, index, duration = 0.6, delay = 0 }) => {
  try {
    const tl = gsap.timeline({ delay })
      .to(el, {
        duration: duration,
        opacity: 1,
        y: 0,
        ease: 'Power2.in',
        delay: index * 0.2,
      })

    return tl
  } catch (e) {
    console.log(e)
  }
}

export const fadeIn = ({ el, duration = 0.6, delay = 0 }) => {
  try {
    const tl = gsap.timeline({ delay })
      .to(el, {
        duration: duration,
        opacity: 1,
        ease: 'Cubic.easeOut',
      })

    return tl
  } catch (e) {
    console.log(e)
  }
}
import { gsap } from 'gsap'

export const slideUp = ({ el, duration = 0.6, delay = 0, y = '65%' }) => {
  try {
    const tl = gsap.timeline({ delay })
      .from(el, {
        duration: duration,
        opacity: 0,
        x: 0,
        y: y,
        ease: 'Cubic.easeOut',
      })

    return tl
  } catch (e) {
    console.error(e)
  }
}

export const staggerIn = ({ el, index, duration = 0.6, delay = 0, y = '65%' }) => {
  try {
    const tl = gsap.timeline({ delay })
      .from(el, {
        duration: duration,
        opacity: 0,
        y: y,
        ease: 'Power2.in',
        delay: index * 0.2,
      })

    return tl
  } catch (e) {
    console.error(e)
  }
}

export const fadeIn = ({ el, duration = 0.6, delay = 0 }) => {
  try {
    const tl = gsap.timeline({ delay })
      .from(el, {
        duration: duration,
        opacity: 0,
        ease: 'Cubic.easeOut',
      })

    return tl
  } catch (e) {
    console.error(e)
  }
}

export const scaleUp = ({ el, duration = 0.7, delay = 0 }) => {
  try {
    const tl = gsap.timeline({ delay })
      .from(el, {
        duration: duration,
        scale: 0.5,
        opacity: 0,
        ease: 'circ.out',
      })

    return tl
  } catch (e) {
    console.error(e)
  }
}
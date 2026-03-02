import Lenis from 'lenis'
import { onMounted, onBeforeUnmount } from 'vue'

export function useLenis() {
  let lenis

  onMounted(() => {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    window.lenis = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  onBeforeUnmount(() => {
    lenis?.destroy()
    window.lenis = null
  })

  return { lenis }
}
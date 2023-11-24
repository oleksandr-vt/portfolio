import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VueGtag from 'vue-gtag'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import './assets/css/style.scss'

gsap.registerPlugin(ScrollTrigger)

const app = createApp(App)

app.use(router).use(VueGtag, {
  config: { id: import.meta.env.VITE_GTAG_TOKEN },
})

app.mount('#app')
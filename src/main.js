import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import './assets/css/style.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')

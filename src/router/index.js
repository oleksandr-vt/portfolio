import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorksView from '../views/WorksView.vue'
import { pages, SITE_URL } from '../assets/js/seo'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { seo: pages.home },
    },
    {
      path: '/works',
      name: 'works',
      component: WorksView,
      meta: { seo: pages.works },
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  // scrollBehavior() {
  //   return { top: 0, behavior: 'instant' }
  // },
})

const setMeta = (selector, attribute, value) => {
  document.head.querySelector(selector)?.setAttribute(attribute, value)
}

router.afterEach((to) => {
  window.lenis?.scrollTo(0, { immediate: true })

  const seo = to.meta.seo
  if (!seo) return

  const url = `${SITE_URL}${seo.path}`

  document.title = seo.title
  setMeta('meta[name="description"]', 'content', seo.description)
  setMeta('meta[property="og:title"]', 'content', seo.title)
  setMeta('meta[property="og:description"]', 'content', seo.description)
  setMeta('meta[property="og:url"]', 'content', url)
  setMeta('link[rel="canonical"]', 'href', url)
})

export default router

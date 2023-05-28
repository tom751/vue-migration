import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
  ],
})

// This could be exported from a shared file/project (e.g. core)
// so it's easy to find what routes have been migrated.
// Maybe also add a lint rule to prevent same route paths in both arrays?
const vue2RoutePaths: string[] = ['/']

router.beforeEach((to, _from, next) => {
  if (!vue2RoutePaths.includes(to.path)) {
    next()
  } else {
    next(false)
    // go to the same path on the vue 2 app
    window.location.href = `http://${window.location.host}${to.path}`
  }
})

export default router

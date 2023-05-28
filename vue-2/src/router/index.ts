import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

// This could be exported from a shared file/project (e.g. core)
// so it's easy to find what routes have been migrated.
// Maybe also add a lint rule to prevent same route paths in both arrays?
const vue3RoutePaths: string[] = ['/about']

router.beforeEach((to, _from, next) => {
  if (!vue3RoutePaths.includes(to.path)) {
    next()
  } else {
    next(false)
    // go to the same path on the vue 3 app
    window.location.href = `http://${window.location.host}${to.path}`
  }
})

export default router

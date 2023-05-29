import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

store.subscribe((_, state) => {
  // Update state in session storage
  sessionStorage.setItem('state', JSON.stringify(state))
})

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeCreate() {
    const state = sessionStorage.getItem('state')
    if (state) {
      // If state exists in session storage, populate current store
      store.replaceState(JSON.parse(state))
    }
  },
}).$mount('#app')

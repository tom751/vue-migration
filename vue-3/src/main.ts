import './assets/main.css'

import { createApp, type Plugin } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

const savedState = sessionStorage.getItem('state')
if (savedState) {
  // Is this going to be slow?
  const state = JSON.parse(savedState)

  pinia.state.value = state
}

pinia.use(({ store, pinia }) => {
  store.$subscribe(() => {
    // When the store is updated, save to session storage
    // Any security risks here? Can clear the session storage on log out
    // Might need to batch updates
    sessionStorage.setItem('state', JSON.stringify(pinia.state.value))
  })
})

app.use(pinia)
app.use(router)

app.mount('#app')

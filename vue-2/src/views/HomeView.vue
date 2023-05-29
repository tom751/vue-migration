<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <p>Count {{ store.count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import { CounterState } from '@/store'

import { State, Action } from 'vuex-class'

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  @State('counter')
  private store!: CounterState

  @Action('increment', { namespace: 'counter' })
  private increment!: () => void
}
</script>

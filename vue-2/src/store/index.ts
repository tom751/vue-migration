import Vue from 'vue'
import Vuex, { Module } from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface RootState {}
export interface CounterState {
  count: number
}

const counter: Module<CounterState, RootState> = {
  namespaced: true,
  state: {
    count: 0,
  },
  actions: {
    increment: ({ commit }) => {
      commit('countIncremented')
    },
  },
  mutations: {
    countIncremented: (state) => {
      state.count++
    },
  },
}

export default new Vuex.Store({
  modules: {
    counter,
  },
})

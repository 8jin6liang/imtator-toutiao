import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getItem('USER_TOKEN')
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      setItem('USER_TOKEN', state.user)
    }
  },
  actions: {},
  modules: {}
})

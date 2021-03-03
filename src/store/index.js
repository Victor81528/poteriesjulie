import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navTextColor: {
      color: ''
    },
    navShow: {
      isOpen: false
    }
  },
  mutations: {
    changeColor (state, n) {
      state.navTextColor.color = n
    },
    changeNavShow (state, n) {
      state.navShow.isOpen = n
    }
  },
  actions: {
  }
})

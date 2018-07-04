import Vue from 'vue'
import Vuex from 'vuex'


import cats from './cats'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cats
  }
})

export default store

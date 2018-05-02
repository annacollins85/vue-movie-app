import Vue from 'vue'
import Vuex from 'vuex'
import movies from './movies'

Vue.use(Vuex)

export const store = () => new Vuex.Store({
  modules: {
    movies
  },
  strict: process.env.NODE_ENV !== 'production'
})

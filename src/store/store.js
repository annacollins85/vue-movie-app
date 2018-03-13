import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    favourites: {}
  },
  mutations: {
    changeFavourites: (state, movie) => {
      if (state.favourites[movie.id]) {
        delete state.favourites[movie.id]
      } else state.favourites[movie.id] = movie
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const deleteFav = (state, movie) => {
  Vue.delete(state.favourites, movie.id)
}

const addFav = (state, movie) => {
  Vue.set(state.favourites, movie.id, movie)
}

export const store = new Vuex.Store({
  state: {
    favourites: {}
  },
  mutations: {
    changeFavourites: (state, movie) => {
      if (state.favourites[movie.id]) {
        return deleteFav(state, movie)
      }
      addFav(state, movie)
    }
  }
})

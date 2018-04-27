import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const deleteFav = (state, index) => {
  state.favourites.splice(index, 1)
  state.favourites = state.favourites.concat([])
}

const addFav = (state, movieId) => {
  state.favourites = state.favourites.concat([movieId])
}

export const store = new Vuex.Store({
  state: {
    movies: {},
    favourites: []
  },
  getters: {
    favMovies: state => {
      const favs = []
      state.favourites.forEach(movieId => {
        favs.push(state.movies[movieId])
      })
      return favs
    }
  },
  mutations: {
    addMovies: (state, movies) => {
      movies.forEach(movie => {
        state.movies[movie.id] = movie
      })
      state.movies = {...state.movies}
    },
    changeFavourites: (state, movieId) => {
      const index = state.favourites.indexOf(movieId)
      if (index !== -1) {
        return deleteFav(state, index)
      }
      addFav(state, movieId)
    },
    addFavourite: (state, movieId) => {
      addFav(state, movieId)
    }
  }
})

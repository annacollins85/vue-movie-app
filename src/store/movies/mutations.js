import * as types from '../mutation-types'

const deleteFav = (state, index) => {
  state.favourites.splice(index, 1)
  state.favourites = state.favourites.concat([])
}

const addFav = (state, movieId) => {
  state.favourites = state.favourites.concat([movieId])
}

export default {
  [types.MOVIES_CHANGE_FAVOURITES] (state, movieId) {
    const index = state.favourites.indexOf(movieId)
    if (index !== -1) {
      return deleteFav(state, index)
    }
    addFav(state, movieId)
  },
  [types.MOVIES_ADD_MOVIES] (state, movies) {
    movies.forEach(movie => {
      state.movies[movie.id] = movie
    })
    state.movies = {...state.movies}
  }
}

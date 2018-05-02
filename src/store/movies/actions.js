import * as types from '../mutation-types'

export default {
  addMovies ({ commit }, movies) {
    commit(types.MOVIES_ADD_MOVIES, movies)
  },
  changeFavourites ({ commit }, movieId) {
    commit(types.MOVIES_CHANGE_FAVOURITES, movieId)
  }
}

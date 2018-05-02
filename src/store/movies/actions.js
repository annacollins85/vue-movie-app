import * as types from '../mutation-types'
import { ADD_MOVIES, CHANGE_FAVOURITES } from '../action-types'

export default {
  [ADD_MOVIES] ({ commit }, movies) {
    commit(types.MOVIES_ADD_MOVIES, movies)
  },
  [CHANGE_FAVOURITES] ({ commit }, movieId) {
    commit(types.MOVIES_CHANGE_FAVOURITES, movieId)
  }
}

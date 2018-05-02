import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  movies: {},
  favourites: []
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

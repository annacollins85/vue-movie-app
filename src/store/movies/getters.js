export default {
  favMovies: state => {
    const favs = []
    state.favourites.forEach(movieId => {
      favs.push(state.movies[movieId])
    })
    return favs
  }
}

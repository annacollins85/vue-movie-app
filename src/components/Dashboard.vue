<template>
  <div class="movie-list">
    <Movie v-for="movie in movies" :key="movie.id" v-bind:movie="movie"></Movie>
  </div>
</template>

<script>
import Movie from './Movie.vue'
export default {
  name: 'Dashboard',
  components: {
    Movie
  },
  data: function () {
    return {
      movies: []
    }
  },
  mounted () {
    fetch(
      'https://api.themoviedb.org/3/discover/movie?api_key=6d2e1905a9d27de89f756047be0a6c0a&page=2'
    )
      .then(data => data.json())
      .then(data =>
        data.results.map(movie => {
          return {
            id: movie.id,
            stars: movie.vote_average,
            title: movie.title,
            img: `https://image.tmdb.org/t/p/w300/${movie.poster_path}`,
            overview: movie.overview,
            releaseDate: movie.release_date
          }
        })
      )
      .then(results => (this.movies = results))
  }
}
</script>

<style scoped>
.movie-list {
  display: flex;
  overflow-x: scroll;
  margin: 20px;
}
</style>

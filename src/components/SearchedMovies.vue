<template>
  <div class="movie-list">
    <Movie v-for="movie in movies" :key="movie.id" v-bind:movie="movie"></Movie>
  </div>
</template>

<script>
import Movie from './Movie'
export default {
  props: ['query'],
  name: 'SearchedMovies',
  components: {
    Movie
  },
  data: function() {
    return {
      movies: []
    }
  },
  methods: {
    fetchMovies(query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6d2e1905a9d27de89f756047be0a6c0a&query=${query}`
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
        .then(movies => (this.movies = movies))
    }
  },
  watch: {
    query: async function(newVal) {
      await this.fetchMovies(newVal)
    }
  },
  mounted() {
    this.fetchMovies(this.query)
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

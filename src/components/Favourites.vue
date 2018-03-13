<template>
  <div class="movie-list">
    <Movie v-for="movie in favourites" :key="movie.id" v-bind:movie="movie"></Movie>
  </div>
</template>

<script>
import Movie from './Movie.vue'
export default {
  name: 'Favourites',
  computed: {
    favourites() {
      const movies = []
      const favs = this.$store.state.favourites
      for (let id in favs) {
        movies.push(favs[id])
      }
      return movies
    }
  }
}
</script>

<style scoped>

</style>

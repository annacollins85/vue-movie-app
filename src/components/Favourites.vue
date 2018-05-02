<template>
  <div class="movie-list">
    <Movie v-for="movie in favourites" :key="movie.id" v-bind:movie="movie"></Movie>
  </div>
</template>

<script>
import Movie from './Movie.vue'
export default {
  name: 'Favourites',
  components: {
    Movie
  },
  computed: {
    favourites () {
      return this.$store.getters['movies/favMovies']
    }
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

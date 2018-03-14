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
    favourites() {
      const favourites = []
      const favs = this.$store.state.favourites
      for (let id in favs) {
        favourites.push(favs[id])
      }
      return favourites
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

<template>
  <div class="movie-item">
      <img :src="movie.img" v-on:click="goToMovie"></img>
  </div>
</template>

<script>
import router from '../router/index'
export default {
  name: 'Movie',
  props: ['movie'],
  methods: {
    goToMovie() {
      router.push({ name: 'SingleMovie', params: { movieId: this.movie.id, movie: this.movie }})
    }
  }
}
</script>

<style scoped>

.movie-item {
  margin-left: 10px;
  margin-top: 10px;
}

.movie-item:hover {
  cursor: pointer;
}

::-webkit-scrollbar {
    display: none;
}

</style>

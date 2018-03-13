<template>
  <div class="single-movie-page">
    <img class="movie-img" :src="movie.img"></img>
    <div class="single-movie-info">
      <h1>{{movie.title}}</h1>
      <h3>Rating: {{movie.stars}}</h3>
      <h3>Released Date: {{movie.releaseDate}}</h3>
      <p>{{movie.overview}}</p>
      <button v-on:click="addRemoveFavourites" >{{ favourite }}</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie'],
  computed: {
    favourite() {
      console.log('in computed', this.$store.state.favourites[this.movie.id])
      return this.$store.state.favourites[this.movie.id] === undefined
        ? 'Add to Favourites'
        : 'Remove from Favourites'
    }
  },
  methods: {
    addRemoveFavourites() {
      this.$store.commit('changeFavourites', this.movie)
    }
  }
}
</script>

<style scoped>
.single-movie-page {
  display: flex;
  margin: 20px;
}

.single-movie-info {
  margin-left: 20px;
  margin-right: 20px;
}

button {
  padding: 10px;
  background-color: red;
  border-style: none;
  font-size: 16px;
}

button:hover {
  cursor: pointer;
}

button:focus {
  outline: 0;
}
</style>

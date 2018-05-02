<template>
  <div class="single-movie-page">
    <img class="movie-img" :src="movie.img" />
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
    favourite () {
      return this.$store.state.movies.favourites.includes(this.movie.id) === false
        ? 'Add to Favourites'
        : 'Remove from Favourites'
    }
    // image () {
    //   if (!this.movie.img)  {
    //     return 'http://www.reelviews.net/resources/img/default_poster.jpg';
    //   }
    //   return this.movie.image
    // }
  },
  methods: {
    addRemoveFavourites () {
      this.$store.dispatch('movies/CHANGE_FAVOURITES', this.movie.id)
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

img {
  height: 400px;
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

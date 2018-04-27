<template>
  <div class="container">
    <input type="text" v-model="title" placeholder="Movie Title"/>
    <input type="text" v-model="stars" placeholder="Rating"/>
    <input type="text" v-model="releaseDate" placeholder="Released Date"/>
    <textarea type="text" v-model="overview" placeholder="Movie Overview" columns="4" rows="5"/>
    <input type="text" v-model="img" placeholder="Image Url"/>
    <button v-on:click="addMovieToFav" >Add Movie to Favourites</button>
  </div>
</template>

<script>
import router from '../router/index'

export default {
  name: 'AddMovie',
  methods: {
    addMovieToFav () {
      const movie = {
        id: this.title,
        stars: this.stars,
        title: this.title,
        img: this.img,
        overview: this.overview,
        releaseDate: this.releaseDate
      }
      this.$store.commit('addMovies', [movie])
      this.$store.commit('addFavourite', movie)
      router.push({name: 'Favourites'})
    }
  }
}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input, textarea {
  border-radius: 1px;
  margin: 20px;
  padding: 7px;
  width: 300px;
  font-size: 14px;
}

button {
  margin-top: 50px;
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

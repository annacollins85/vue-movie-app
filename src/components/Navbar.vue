<template>
  <nav class="navbar">
    <h1 class="logo" v-on:click="goToHome">Movie App</h1>
    <div class="user-controls">
      <button v-on:click="goToFavourites">My Favourites</button>
      <input class="search-input" @input="showResults" v-model="query" type="text" placeholder="Search..."/>
    </div>
  </nav>
</template>

<script>
import router from '../router/index'
export default {
  data: function () {
    return {
      query: this.query
    }
  },
  methods: {
    goToHome () {
      router.push({name: 'Dashboard'})
      this.query = ''
    },
    showResults () {
      this.$emit('query', this.query)
      if (this.query.length > 1) router.push({name: 'SearchedMovies'})
      else if (this.query.length <= 1) router.push({name: 'Dashboard'})
    },
    goToFavourites () {
      router.push({name: 'Favourites'})
    }
  }
}
</script>

<style scoped>

.navbar {
  background-color: red;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  margin-left: 20px;
}

button {
  margin-right: 20px;
  padding: 10px;
  border-style: none;
  background-color: white;
  font-size: 13px;
}

button:hover {
  cursor: pointer;
}

button:focus {
  outline:0;
}

.search-input {
  margin-right: 30px;
  border-style: none;
  border-radius: 1px;
  padding: 7px;
  font-size: 14px;
  outline: none;
}

.logo:hover {
  cursor: pointer;
}

</style>

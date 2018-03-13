<template>
  <div id="app">
    <Navbar v-on:query="takeQuery"></Navbar>
    <router-view v-bind:query="query"/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data: function () {
    return {
      query: ''
    }
  },
  methods: {
    takeQuery (query) {
      this.query = query
    }
  }
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: column;
}

</style>

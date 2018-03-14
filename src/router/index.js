import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import SearchedMovies from '@/components/SearchedMovies'
import Favourites from '@/components/Favourites'
import SingleMovie from '@/components/SingleMovie'
import AddMovie from '@/components/AddMovie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/movie/:movieId',
      name: 'SingleMovie',
      component: SingleMovie,
      props: true
    },
    {
      path: '/search',
      name: 'SearchedMovies',
      component: SearchedMovies,
      props: true
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: Favourites
    },
    {
      path: '/addMovie',
      name: 'AddMovie',
      component: AddMovie
    }
  ]
})

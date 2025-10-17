import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },
  {
    path: '/Boardtournament',
    name: 'Boardtournament',
    component: function () {
      return import(/* webpackChunkName: "Boardtournament" */ '../views/BoardtournamentView.vue')
    }
  },
  {
    path: '/Cardtournament',
    name: 'Cardtournament',
    component: function () {
      return import(/* webpackChunkName: "Cardtournament" */ '../views/CardtournamentView.vue')
    }
  },
  {
    path: '/Esporttournament',
    name: 'Esporttournament',
    component: function () {
      return import(/* webpackChunkName: "Esporttournament" */ '../views/EsporttournamentView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

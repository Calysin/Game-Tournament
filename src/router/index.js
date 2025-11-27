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
  },

  {
    path: '/Players',
    name: 'Players',
    component: function () {
      return import(/* webpackChunkName: "Players" */ '../views/Players.vue')
    }
  },

  {
    path: '/Games',
    name: 'Games',
    component: function () {
      return import(/* webpackChunkName: "Games" */ '../views/GameView.vue')
    }
  },

  {
    path: '/Login',
    name: 'Login',
    component: function () {
      return import(/* webpackChunkName: "Login" */ '../views/LoginView.vue')
    }
  },

  {
    path: '/JoinTournament',
    name: 'JoinTournament',
    component: function () {
      return import(/* webpackChunkName: "JoinTournament" */ '../views/JoinTournamentView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

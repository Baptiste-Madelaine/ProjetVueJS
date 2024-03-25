import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RankingsView from '../views/RankingsView.vue';
import CreateMatchView from '../views/CreateMatchView.vue'
import HomeMatchView from '../views/MatchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/rankings',
      name: 'rankings',
      component: RankingsView
    },
    {
      path: '/CreateMatch',
      name: 'CreateMatch',
      component: CreateMatchView
    },
    {
      path: '/Match',
      name: 'Match',
      component: HomeMatchView
    }
  ]
})

export default router

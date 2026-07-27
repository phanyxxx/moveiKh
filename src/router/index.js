import { createRouter, createWebHistory } from 'vue-router'
// import Menu from '../components/Menu.vue'
import HomeView from '@/views/HomeView.vue'
import KoreaView from '@/views/KoreaView.vue'
import ChinaView from '@/views/ChinaView.vue'
import DailyUpdateView from '@/views/DailyUpdateView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      name: 'home1',
      component: HomeView,
    },
    {
      path: '/daily-update',
      name: 'daily-update',
      component: DailyUpdateView
    },
    {
      path: '/china',
      name: 'china',
      component: ChinaView
    },
    {
      path: '/korea',
      name: 'korea',
      component: KoreaView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    },
    {
      path: '/movie/:id',
      name: 'movie-detail',
      component: MovieDetailView,
      props: true
    }
  ],
})
export default router
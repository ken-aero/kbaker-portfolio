import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DemoView from '../views/DemoView.vue'
import ProjectsView from '../views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
  },
  {
    path: '/demo',
    name: 'demo',
    component: DemoView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

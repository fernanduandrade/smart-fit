import { createWebHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/appointments', component: import('../appointment/views/index.vue')}
]


const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router;
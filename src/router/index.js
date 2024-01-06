import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard/DashBoard.vue'
import RecordVideo from '../views/Dashboard/partials/RecordVideo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    redirect: '/dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/record-video',
    name: 'record',
    component: RecordVideo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

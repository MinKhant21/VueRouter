import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import JobView from '../views/JobView.vue'
import JobDetail from '../views/JobDetailView.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component:AboutView,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/jobs',
    name:"JobView",
    component:JobView,
  },
  {
    path:'/jobdetail/:id',
    name:'JobDetail',
    component:JobDetail,
    props:true,
  },
  {
    path:'/:catchAll(.*)',
    component:NotFound,
  }
]

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

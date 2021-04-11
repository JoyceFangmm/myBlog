import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tags from '../views/Tags.vue'
import Category from '../views/Category.vue'
// import About from '../views/About.vue'
import Post from '../views/Post.vue'
import Error404 from '../views/404.vue'
import Layout from '../views/Layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Tags
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/404',
    component: Error404
  },
  {
      path: '*',
      redirect: '/404'
  },
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Board from '../views/Board.vue'
import Card from '../views/Card.vue'
import NotFound from '../views/NotFound.vue'
import store from '../store'

Vue.use(VueRouter)

const requireAuth = (to, from, next) => {
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  store.getters.isAuth ? next() : next(loginPath)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      component: Home,
      beforeEnter: requireAuth
    },
    { 
      path: '/login', 
      component: Login 
    },
    { 
      path: '/b/:bid', 
      component: Board,
      beforeEnter: requireAuth,
      children: [{ path: 'c/:cid', component: Card }] 
    },
    { 
      path: '*', 
      component: NotFound 
    }
  ]
})

export default router
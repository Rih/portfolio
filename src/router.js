// Vue
import Vue from 'vue'
import Router from 'vue-router'

// Normal loading
import HelloI18n from './components/HelloI18n.vue'

// Define routes
const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/:lang', name: 'hello2',
    component: HelloI18n,
    beforeEnter:(to, from, next) => {
        Vue.config.lang = to.params.lang;
        next();
    }
  },
  {
    path: '*', name: 'not-found',
    component:  HelloI18n
  }
]

// Router instance
const router = new Router({
  mode: 'history',
  base: '/',
  fallback: false,
  hash: false,
  routes
})

export default router
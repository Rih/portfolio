// Vue
import Vue from 'vue'
import Router from 'vue-router'

// Normal loading
import Resume from './components/Resume.vue'
import Portfolio from './components/Portfolio.vue'

// Define routes
const routes = [
  {
    path: '/home',
    redirect: '/es'
  },
  {
    path: '/:lang', name: 'portfolio',
    component: Portfolio,
    beforeEnter:(to, from, next) => {
        Vue.config.lang = to.params.lang;
        next();
    }
  },
  {
    path: '/:lang/resume', name: 'resume',
    component: Resume,
    beforeEnter:(to, from, next) => {
        Vue.config.lang = to.params.lang;
        next();
    }
  },
  {
    path: '*', name: 'not-found',
    component:  Portfolio
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
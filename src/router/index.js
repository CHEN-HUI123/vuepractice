import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/colourbar',
      name: 'colourbar',
      component: () => import('../views/practices/colourbar')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/practices/test')
    }
  ]
})

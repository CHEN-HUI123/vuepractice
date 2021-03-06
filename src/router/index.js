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
      path: '/fillblanks',
      name: 'fillblanks',
      component: () => import('../views/practices/fillBlank/fillBlanks')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/practices/test')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index')
    },
    {
      path: '/pm/studentList',
      name: 'studentList',
      component: () => import('../views/pm/myStudents/list')
    }
  ]
})

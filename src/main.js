import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import Vuex from 'vuex'
import utils from './assets/js/utils'
import api from './assets/js/api'

Vue.prototype.$axios = axios
Vue.prototype.$utils = utils
Vue.prototype.$api = api

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

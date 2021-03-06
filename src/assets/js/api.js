import {fetch, get} from './fetch'

export default{
  login: (params) => {
    return fetch('/api/auth/login', params)
  },
  // 筛选
  getFilter: (params = {}) => {
    return get('/api/search', params)
  },
  uaLogin: () => fetch('/api/auto/login/cookie')
}

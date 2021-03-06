import axios from 'axios'
import qs from 'qs'
import utils from './utils'
import count from './count'

// axios 配置
axios.defaults.timeout = 30000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.baseURL = 'https://words12kf.thinktown.com:8443/index.php'

// POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data, { arrayFormat: 'indices' })
  }
  return config
}, (error) => {
  utils.showErrorMsg('parameter error')
  console.log(error)
  return Promise.reject(error)
})

// 返回状态判断
axios.interceptors.response.use((res) => {
  if (parseInt(res.data.code) !== 200) {
    return Promise.reject(res.data)
  }
  return res
}, (error) => {
  return Promise.reject(error.data)
})

function fetch (url, params) {
  params = params || {}
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data.data)
      })
      .catch((error) => {
        reject(error.data)
      })
  })
}

function get (url, params = '') {
  params = params || {}
  if (params) {
    let str = count.urlEncode(params).substr(1)
    url = url + '?' + str
  }
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error.data)
      })
  })
}
export { fetch, get }

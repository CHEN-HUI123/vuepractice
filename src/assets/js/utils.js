import {Loading, Notification, Message, MessageBox} from 'element-ui'
import cookie from '../js/lib/cookie'
const uaToken = 'DEV_UA_TOKEN'
let utils = {
  LoadingInstance: '',
  showLoading: function () {
    this.LoadingInstance = Loading.service({ fullscreen: true })
  },
  hideLoading: function () {
    this.LoadingInstance.close()
  },
  showErrorMsg: function (msg) {
    Notification.error({
      title: 'failed',
      message: msg,
      duration: 2000
    })
  },
  showSuccessMsg: function (msg) {
    Notification({
      title: 'success',
      message: msg,
      type: 'success',
      duration: 2000
    })
  },
  showTopWarnMsg: function (msg) {
    Message({
      title: 'warning',
      message: msg,
      type: 'warning'
    })
  },
  showWarnMsg: function (msg) {
    Message({
      message: msg,
      type: 'warning',
      showClose: true,
      duration: 0
    })
  },
  showConfirmMsg: function (msg, title) {
    return new Promise(function (resolve, reject) {
      MessageBox.confirm(msg, title, {
        confirmButtonText: 'confirm',
        cancelButtonText: 'cancel',
        type: 'warning'
      }).then(() => {
        resolve()
      }).catch((err) => {
        reject(err)
      })
    })
  },
  showConfirm: function (msg, title) {
    MessageBox.alert(msg, title, {
      confirmButtonText: '确定',
      type: 'warning'
    })
  },
  showPrompt: function (promptData) {
    return new Promise(function (resolve, reject) {
      MessageBox.prompt(promptData.msg, promptData.title, {
        confirmButtonText: promptData.confirm,
        cancelButtonText: promptData.cancel,
        inputValue: promptData.content
      }).then(({ value }) => {
        resolve(value)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  getQueryString: function (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2]); return null
  },
  freshKey: function (key) {
    let self = this
    let loginInfo = JSON.parse(self.getSession('loginInfo'))
    if ((loginInfo && loginInfo.key !== key) || !loginInfo) {
      let loginInfo = {loginTime: Date.parse(new Date()), key: key}
      self.setSession('loginInfo', JSON.stringify(loginInfo))
    }
  },
  setSession: function (key, value) {
    sessionStorage.setItem(key, value)
  },
  clearSession: function () {
    sessionStorage.clear()
  },
  getSession: function (key) {
    return sessionStorage.getItem(key)
  },
  getUaToken () {
    return cookie.getCookie(uaToken)
  },
  checkUa () {
    const uaToken = sessionStorage.getItem('uaToken')
    return !uaToken || uaToken === this.getUaToken()
  }
}
export default utils

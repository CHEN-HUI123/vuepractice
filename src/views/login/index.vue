<style>
/* #app{
    text-align: -webkit-center;
} */
.el-input__inner {
    width: 280px;
}

.el-input {
    display: inline;
}

#login div span{
    float: left;
    margin-left: 20%;
    margin-right: -20%;
}

#login div{
    margin-bottom: 30px;
}

#login{
    width: 30vw;
    height: 10vw;
    background:#dcdfe6;
    padding-top: 2vw;
    padding-bottom: 1vw;
    font-size: 24px;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 35vh;
    margin: auto;
    text-align: -webkit-center;
}

#loginback{
    height: 100vh;
    background-repeat: no-repeat;
}

</style>
<template>
    <div id="loginback" :style="{backgroundImage: 'url(' + backimg + ')'}" >
        <div id="login">
        <div>
            <span>姓名</span>
            <el-input v-model="loginMessage.yourname" placeholder="请输入内容"></el-input>
        </div>
        <div>
            <span>密码</span>
            <el-input v-model="loginMessage.password" placeholder="请输入密码" show-password></el-input>
        </div>
        <el-button style="font-size:22px;" type="success" class="submit" @click="submit">点击登录</el-button>
    </div>
    </div>
</template>
<script>
import cookie from '../../assets/js/lib/cookie'
export default {
  data () {
    return {
      backimg: require('../../assets/3.jpg'),
      loginMessage: {
        yourname: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      if (!this.validate()) return false
      let params = {
        code: this.loginMessage.password,
        name: this.loginMessage.yourname,
        type: 2,
        user_type_id: 1,
        remember: 0
      }
      this.$api.login(params).then(res => {
        const userInfo = res.userInfo
        const indexPath = userInfo.userType === 'staff' ? '/pm/studentList' : ''

        let path = indexPath
        this.setUaToken(res.token)
        cookie.setCookie('path', path, 0.5, '.thinktown.com')

        this.setData(res)

        this.$router.push(path)
      }).catch(err => {
        this.$utils.showErrorMsg(err.message)
      }).finally(() => {
      })
    },
    validate () {
      let {yourname, password} = this.loginMessage
      if (!yourname) {
        this.$utils.showErrorMsg('请输入用户名')
        return false
      }
      if (!password) {
        this.$utils.showErrorMsg('请输入密码')
        return false
      }

      return true
    },
    setUaToken (token) {
      const uaToken = token || this.$utils.getUaToken()
      if (uaToken) {
        sessionStorage.setItem('uaToken', uaToken)
      }
    },
    setData (data) {
      const token = data.token
      document.cookie = `token=${token}`
      sessionStorage.setItem('token', token)
    }
  }
  // created () {
  //   let uaToken = this.$utils.getUaToken()
  //   sessionStorage.setItem('uaToken', '')

  //   if (uaToken) {
  //     this.$api.uaLogin().then(res => {
  //       // 没有缓存，则存本次的 token
  //       sessionStorage.setItem('uaToken', uaToken)
  //       this.setData(res.data)
  //     }).then(() => {
  //       this.jump2Index()
  //     }).catch(err => {
  //       this.$utils.showErrorMsg(err.message)
  //     }).finally(() => {
  //       this.$utils.hideLoading()
  //     })
  //   } else {
  //     let remenber = Boolean(parseInt(localStorage.getItem('remember')))
  //     if (cookie.getCookie('million_user_token') && remenber) {
  //       this.jump2Index()
  //     }
  //   }
  // }
}
</script>

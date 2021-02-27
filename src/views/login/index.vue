<style>
#app{
    text-align: -webkit-center;
}
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
            <el-input placeholder="请输入内容"></el-input>
        </div>
        <div>
            <span>密码</span>
            <el-input placeholder="请输入密码" show-password></el-input>
        </div>
        <el-button style="font-size:22px;" type="success" class="submit" @click="submit">点击登录</el-button>
    </div>
    </div>
</template>
<script>
export default {
  data: function () {
    return {
      backimg: require('../../assets/3.jpg')
    }
  }
}
</script>

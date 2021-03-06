<style>
.nav{
    background: #2e3138;
    padding: 0 58px 0 12px;
    display: flex;
}
.logo{
    color: white;
    margin-left: 20px;
    width: 300px;
    align-items: center;
    display: flex;
}

.logo-info{
    margin-left: 20px;
    font-weight: 700;
    font-size: 16px;
}
.el-menu.el-menu--horizontal {
    border-bottom: inherit;
}
.el-menu-item{
    border-bottom: inherit;
}
.el-menu-item .is-active {
    border-bottom: inherit;
}

.nav .el-menu-demo .is-active{
    background: #0084ff!important;
    border-color: #0084ff!important;
}
</style>
<template>
    <div class="nav">
        <div class="logo" style="font-weght:700;">
            <img src="../../assets/logo.png" style="width:140px;">
            <span class="logo-info">百万单词后台</span>
        </div>
            <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#2e3138"
                text-color="#fff"
                active-text-color="#ffffff">
                <el-menu-item index="1">待批改</el-menu-item>
                <el-menu-item index="2">我的学生</el-menu-item>
                <el-menu-item index="3">学习计划</el-menu-item>
                <el-submenu index="4">
                    <template slot="title">学习</template>
                    <el-menu-item index="4-1">我的学习计划</el-menu-item>
                    <el-menu-item index="4-2">历史记录</el-menu-item>
                    <el-submenu index="4-3">
                    <template slot="title">我的单词本</template>
                    <el-menu-item index="4-3-1">错词本</el-menu-item>
                    <el-menu-item index="4-3-2">收藏夹</el-menu-item>
                    <el-menu-item index="4-3-3">电子词汇书</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
    </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

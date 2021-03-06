<style>
.list{
    background: #f0f2f5;
    height: 100vh;
}
</style>
<template>
    <div class="list">
        <Nav></Nav>
        <div style="padding:30px 20px 50px 20px;background: #fff;margin: 46px 46px 9px 46px;">
            <Sel></Sel>
            <TestList></TestList>
        </div>
    </div>
</template>

<script>
import Nav from '../../../components/Nav/nav'
import Sel from '../../../components/Stu/sel'
import TestList from '../../../components/Stu/clist'
export default {
  data () {
    return {
    }
  },
  components: {
    Sel,
    Nav,
    TestList
  },
  methods: {

  }
}
</script>

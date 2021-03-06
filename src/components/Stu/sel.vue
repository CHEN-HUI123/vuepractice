<style>
 .searchBar{
    display: flex;
}

.item span{
  margin-left: 20px;
  margin-right: 6px;
}

.el-input{
  width: 210px;
}

</style>
<template>
    <div class="searchBar">
            <div class="item">
                <span style="">学员:</span>
                <el-input style="" placeholder="请输入工号或姓名"></el-input>
            </div>
            <div class="item">
                <span>测试时间:</span>
                <el-select v-model="value" placeholder="请选择">
                  <el-option
                    v-for="item in searchParams"
                    :key="item.id"
                    :label="item.name"
                    :value="item.key">
                    {{item.name}}
                    </el-option>
                </el-select>
            </div>
            <div class="item">
              <span>词汇书</span>
              <!-- <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in "
                ></el-option>
              </el-select> -->
            </div>
    </div>

</template>

<script>

export default {
  data () {
    return {
      searchParams: [
        {'id': 1, 'name': '\u4eca\u5929', 'key': '1', 'text': '\u4eca\u5929', 'value': '1'},
        {'id': 2, 'name': '\u8fd1\u4e03\u5929', 'key': '7', 'text': '\u8fd1\u4e03\u5929', 'value': '7'},
        {'id': 3, 'name': '\u8fd1\u4e00\u4e2a\u6708', 'key': '30', 'text': '\u8fd1\u4e00\u4e2a\u6708', 'value': '30'},
        {'id': 4, 'name': '\u8fd1\u4e09\u4e2a\u6708', 'key': '90', 'text': '\u8fd1\u4e09\u4e2a\u6708', 'value': '90'}
      ],
      value: ''
    }
  },
  components: {
  },
  methods: {
    handleSearch () {

    },
    getData () {
      // this.searchParams = {'time': }
      let params = {}
      this.$api.getFilter(params).then(res => {
      })
      // .catch(err => {
      //   console.log(err)
      //   this.$utils.showErrorMsg('111111')
      // }).finally(() => {
      // })
    }
  },
  created () {
    this.getData()
  }
}
</script>

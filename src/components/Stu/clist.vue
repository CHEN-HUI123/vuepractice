<style>
.el-table th, .el-table tr{
  background-color: #fafafa
}
</style>
<template>
    <div style="margin-left: 10px;margin-top: 26px;">
    <el-table
    :data="tableData"
    style="width: 100%;">
    <el-table-column
        prop="created_at"
        label="测试时间"
        width="160">
    </el-table-column>
    <el-table-column
        prop="test_taker_name"
        label="测试用户"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        label="词汇书"
        width="180">
        <template slot-scope="scope">
          <span>{{scope.row.new_book.bookname}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="description"
        label="学习范围">
      </el-table-column>
      <el-table-column
        prop="address"
        label="抽查方式">
        <template slot-scope="scope">
          <span>{{$GLOBAL.testMethods[scope.row.test_method]}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="测试方式">
        <template slot-scope="scope">
          <span>{{$GLOBAL.testType[scope.row.question_type]}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="测试来源">
        <template slot-scope="scope">
          <span>{{scope.row.source.name}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="wordCount"
        label="抽查数量">
      </el-table-column>
      <el-table-column
        prop="accuracy"
        label="正确率">
      </el-table-column>
      <el-table-column
        label="结果查看">
        <!-- <template slot-scope="scope">
          <template v-if="scope.row.question_type === 1 && scope.row.test_method !== 5">
            <div  v-if="scope.row.is_modified === 0" @click="goDetail(1, scope.row.id)">
              <span class="remind" >等待批改</span>
            </div>
            <div v-else-if=" scope.row.is_modified === 1 && scope.row.is_modified_by_type === 'student'" @click="goDetail(1, scope.row.id)">
              <span class="self">
                {{scope.row.show_type === 2 ? '自查未通过' :'学生已自查'}}
              </span>
            </div>
            <div v-else @click="goDetail(2, scope.row.id)">
              <span class="done">
                查看报告
              </span>
            </div>
          </template>
          <template v-else>
            <div @click="goDetail(2, scope.row.id)">
              <span class="done">
                查看报告
              </span>
            </div>
          </template>
        </template> -->
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: []
    }
  },
  methods: {

  }
}
</script>

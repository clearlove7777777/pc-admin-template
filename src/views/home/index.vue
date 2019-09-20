<template>
  <div class="app-container">
    <div class="company-title">北京阿凡提餐饮有限公司</div>
    <div>

      <!-- 消费看板 -->
      <el-row class="flex" style="marginBottom: 10px">
        <el-col :span="11">
          <div class='board'>
            <div class="content">
              消费看板
            </div>
            <div>

            </div>
          </div>
        </el-col>

        <!-- 员工数量 -->
        <el-col :span="11">
          <div class='board'>
            <div class="content">
              消费看板
            </div>
            <div>

            </div>
          </div>
        </el-col>
      </el-row>

      <!-- 消费看板 -->
      <el-row class="flex">
        <el-col :span="11">
          <div class='board'>
            <div class="content">
              消费看板
            </div>
            <div>

            </div>
          </div>
        </el-col>

        <!-- 员工数量 -->
        <el-col :span="11">
          <div class='board'>
            <div class="content">
              消费看板
            </div>
            <div>

            </div>
          </div>
        </el-col>
      </el-row>

      <!-- 帮助中心 -->
      <!-- <div>

      </div> -->

      <!-- 系统公告 -->
      <!-- <div>

      </div> -->

    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
  .company-title{
    font-size: 24px;
    margin-bottom: 10px;
  }
  .board{
    margin-top: 10px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 10px;
    .content{
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      border-bottom: 1px solid #ccc;
      padding-left: 20px;
    }
  }
  .flex{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
</style>

<template>
    <div>
        <nav class="tab-nav">
            <div class='nav-title'>
                贝塔商旅
                <span class='nav-title-des'>差旅费用的节约专家</span>
            </div>
            <div class="handle">
                <el-button class="btn" style="marginRight: 10px">登录</el-button>
                <el-button class="btn" type="primary" @click.native.prevent="registe">注册</el-button>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
 name: 'headerNav',
 methods: {
   registe() {
     this.$router.push({
       path: '/registe'
     })
   }
 },
};
</script>

<style lang="scss" scoped>
  .tab-nav {
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
    width: 100%;
    height: 50px;
    background: #efefef;
    .nav-title {
      line-height: 50px;
      font-size: 26px;
      .nav-title-des{
        font-size: 16px;
      }
    }
    .handle {
      line-height: 50px;
      .btn{
        width: 100px;
        height: 40px;
        border-radius: 8px;
      }
    }
  }
</style>
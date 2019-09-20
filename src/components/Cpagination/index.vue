<template>
  <div class="c-pagination">
    <el-pagination
      @size-change='onSizeChange'
      @current-change='onCurrentChange'
      :current-page='fromPage'
      :page-sizes='pageSizes'
      :page-size='pageSize'
      background
      layout='total, sizes, prev, pager, next, jumper'
      :total='total'>
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "cPagination",
  props: {
    pageSizes: {
      type: Array,
      default: function() {
        return [10, 20, 50, 100, 200];
      }
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    fromPage: {
      type: Number,
      default: 0
    }
  },

  methods: {
    onSizeChange(pageSize) {
      this.$emit("on-size-change", { pageSize });
    },
    onCurrentChange(fromPage) {
      this.$emit("on-current-change", { fromPage });
    }
  }
};
</script>

<style scoped lang='scss'>
.c-pagination {
  padding: 10px;
  margin-top: 5px;
}
</style>

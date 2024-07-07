<script setup>
const confirm = async () => {
  await this.$confirm('xxx','提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消'
  })
}
</script>

<template>
  <div class="app">
    <el-button @click="confirm">根组件</el-button>
  </div>
</template>

<style lang="scss" scoped>

</style>

<template>
  <el-row>
    <el-col :sm="{span: 22, offset: 1}" :md="{span: 7, offset: 4}">
      <slot name="elsie"></slot>
    </el-col>
    <el-col :sm="{span: 22, offset: 1}" :md="{span: 7, offset: 2}">
      <slot name="elijah"></slot>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "team-content",
  }
</script>

<style scoped>

</style>

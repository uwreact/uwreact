<template>
  <el-row>
    <el-col :sm="{span: 22, offset: 1}" :md="{span: 16, offset: 4}">
      <slot></slot>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    props: {
      content: {
        type: String,
      }
    }
  }
</script>

<style scoped>

</style>

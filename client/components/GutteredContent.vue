<template>
  <el-row>
    <el-col :sm="{span: smSpan, offset: smOffset}" :md="{span: mdSpan, offset: mdOffset}">
      <slot></slot>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'guttered-content',

    props: {
      smSpan: {
        type: Number,
        default: 22,
      },
      smOffset: {
        type: Number,
        default: 1,
      },
      mdSpan: {
        type: Number,
        default: 16,
      },
      mdOffset: {
        type: Number,
        default: 4,
      },
    },
  }
</script>

<style scoped>

</style>

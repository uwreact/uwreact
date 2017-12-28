<template>
  <el-col :sm="{span: 22, offset: 1}" :md="{span: 7, offset: (last ? 2 : 4)}">
    <slot></slot>
  </el-col>
</template>

<script>
  export default {
    name: "sponsor-two-row-image",

    props: {
      last: {
        type: Boolean,
      },
    },
  }
</script>

<style scoped>

</style>

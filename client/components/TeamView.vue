<template>
  <el-dialog
    :visible.sync="visible"
    fullscreen="true">
  </el-dialog>
</template>

<script>
  export default {
    name: "team-view",

    props: {
      visible: {
        type: Boolean,
      },
    },
  }
</script>

<style scoped>

</style>

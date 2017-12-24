<template>
  <el-menu mode="horizontal" class="menu"
           :backgroundColor="backgroundColor"
           :textColor="textColor"
           :activeTextColor="activeTextColor">
    <slot></slot>
  </el-menu>
</template>

<script>
  export default {
    props: {
      backgroundColor: {
        type: String,
        default: '',
      },
      textColor: {
        type: String,
        default: '',
      },
      activeTextColor: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style scoped>
  .menu {
    padding: 0px;
    margin: 0px;
    height: 60px;
    display: flex;
    z-index: 100;
    display: flex;
    border-color: #252525;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)
  }
</style>

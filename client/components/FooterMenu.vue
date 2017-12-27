<template>
  <div class="footer-menu">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "footer-menu",
  }
</script>

<style scoped>
  .footer-menu {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    background-color: #e4b429;
  }
</style>

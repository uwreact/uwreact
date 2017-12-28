<template>
  <p class="section-header">
    <slot></slot>
  </p>
</template>

<script>
  export default {
    name: "section-header",
  }
</script>

<style scoped>
  .section-header {
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;
    margin-top: 36px;
    margin-bottom: 18px;
  }
</style>

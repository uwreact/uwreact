<template>
  <p class="section-lined-header">
    <span><slot></slot></span>
  </p>
</template>

<script>

  export default {
    name: "section-lined-header",
  }
</script>

<style scoped>
  .section-lined-header {
    font-weight: 300;
    font-size: 36px;
    font-style: italic;
    width: 100%;
    text-align: center;
    border-bottom: 8px solid #e4b429;
    line-height: 0.01em;
    margin-top: 72px;
    margin-bottom: 72px;
  }

  .section-lined-header span {
    background: #d5d5d3;
    padding-left: 24px;
    padding-right: 24px;
  }
</style>

<template>
  <el-row>
    <el-col :sm="24" :md="12">
      <slot name="image"></slot>
    </el-col>
    <el-col :sm="24" :md="12">
      <div class="hero-content">
        <slot></slot>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "hero-content",
  }
</script>

<style scoped>
  .hero-content {
    margin-top: 72px;
    margin-bottom: 16px;
    padding: 20px;
    color: #ffffff;
  }
</style>

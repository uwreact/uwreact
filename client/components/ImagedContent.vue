<template>
  <el-row>
    <el-col :xs="{span: 22, offset: 1}" :sm="{span: 4, offset: 5}">
      <slot name="image"></slot>
    </el-col>
    <el-col :xs="{span: 22, offset: 1}" :sm="{span: 9, offset: 1}">
      <section-impact-header>
        <slot name="header"></slot>
      </section-impact-header>
      <p class="justify-content">
        <slot></slot>
      </p>
    </el-col>
  </el-row>
</template>

<script>
  import SectionImpactHeader from './SectionImpactHeader';

  export default {
    name: "imaged-content",

    components: {
      SectionImpactHeader,
    },
  }
</script>

<style scoped>
  .big-image {
    width: 100%;
  }

  .justify-content {
    text-align: justify;
  }
</style>

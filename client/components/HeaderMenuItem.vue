<template>
  <el-menu-item :index="index" :class="(rightStart ? 'right-start' : '') + ' header-menu-item'">
    <a :href="href" :v-scroll-to="href">
      <slot></slot>
    </a>
  </el-menu-item>
</template>

<script>
  import VueScrollTo from 'vue-scrollto'

  export default {
    props: {
      index: {
        type: String,
        default: '',
      },
      rightStart: {
        type: Boolean,
        default: false,
      },
      href: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style scoped>
  .header-menu-item {
    display: flex;
    align-items: center;
    padding: 15px;
  }

  .right-start {
    margin-left: auto;
  }
</style>

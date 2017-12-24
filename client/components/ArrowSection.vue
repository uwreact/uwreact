<template>
  <div :style="`background-color: ${backgroundColor}`" class="section" :id="id">
    <slot></slot>
    <div class="arrow">
      <div :style="`
        border-top: 2000px solid ${backgroundColor};
        background-color: ${nextColor};
      `"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        default: '',
      },
      backgroundColor: {
        type: String,
        default: '',
      },
      nextColor: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style scoped>
  .section {
    width: 100%;
  }

  .arrow {
    width: 100%;
    height: 0;
    padding-left: 50%;
    padding-top: 10%;
    overflow: hidden;
  }

  .arrow div {
    content: "";
    display: block;
    width: 0;
    height: 0;
    margin-left: -10000px;
    margin-top: -2000px;
    border-left: 10000px solid transparent;
    border-right: 10000px solid transparent;
  }
</style>

<template>
  <div :style="`background-color: ${backgroundColor}`" class="section" :id="id">
    <div :class="`${unpadded ? '' : 'padded'}`">
      <slot></slot>
    </div>
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
    name: 'arrow-section',

    props: {
      id: {
        type: String,
      },
      unpadded: {
        type: Boolean,
      },
      backgroundColor: {
        type: String,
      },
      nextColor: {
        type: String,
      },
    },
  };
</script>

<style scoped>
  .section {
    width: 100%;
    font-weight: 400;
    font-size: 15px;
  }

  .padded {
    padding: 24px;
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

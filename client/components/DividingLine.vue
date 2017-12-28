<template>
  <div :style="`
    background-color: ${color};
    width: ${width}px;
    height: ${height}px;
    margin-top: ${spacing}px;
    margin-bottom: ${spacing}px;
  `"></div>
</template>

<script>
  export default {
    name: "dividing-line",
    props: {
      color: {
        type: String,
        default: '#e4b429',
      },
      width: {
        type: Number,
        default: 72,
      },
      height: {
        type: Number,
        default: 8,
      },
      spacing: {
        type: Number,
        default: 24,
      }
    }
  }
</script>

<style scoped>

</style>

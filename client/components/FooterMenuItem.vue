<template>
  <a :href="href">
    <img class="footer-menu-item" :src="`footer/${icon}.svg`"/>
  </a>
</template>

<script>
  export default {

    props: {
      icon: {
        type: String,
      },
      href: {
        type: String,
      },
    },
  }
</script>

<style scoped>
  .footer-menu-item {
    width: 18px;
    margin-left: 18px;
    margin-right: 18px;
  }
</style>

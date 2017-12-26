<template>
  <a :href="href">
    <font-awesome-icon :icon="icon" size="lg">
    </font-awesome-icon>
  </a>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

  export default {
    components: {
      FontAwesomeIcon,
    },
    props: {
      href: {},
      icon: {
        type: string,
      },
    },
  }
</script>

<style scoped>

</style>

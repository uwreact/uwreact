<template>
  <div class="team-content-column">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "team-content-column",
  }
</script>

<style scoped>
  .team-content-column {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
  }
</style>

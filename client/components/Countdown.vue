<template>
  <span>{{twoDigits(days)}}D:{{twoDigits(hours)}}H:{{twoDigits(minutes)}}M:{{twoDigits(seconds)}}S</span>
</template>

<script>
  export default {
    computed: {
      usableDate() {
        return Math.trunc(Date.parse(this.date) / 1000)
      },
      seconds() {
        return (this.usableDate - this.now) % 60
      },
      minutes() {
        return Math.trunc((this.usableDate - this.now) / 60) % 60
      },
      hours() {
        return Math.trunc((this.usableDate - this.now) / 60 / 60) % 24
      },
      days() {
        return Math.trunc((this.usableDate - this.now) / 60 / 60 / 24)
      },
    },
    data() {
      return {
        now: Math.trunc((new Date()).getTime() / 1000),
      }
    },
    methods: {
      twoDigits(number) {
        if (number < 10) {
          return '0' + number;
        }
          return number;
      },
    },
    mounted() {
      window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000)
      }, 1000)
    },
    props: ['date', 'units'],
  }
</script>

<style scoped>

</style>

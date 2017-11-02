<template>
  <p class="button" round>
    APPLY {{countdown}}
  </p>
</template>

<script>
  let interval = null;

  export default {
    data() {
      return {
        date: null,
        now: new Date().getTime() / 1000,
        delta: new Date("Nov 2, 2017 22:00:00").getTime() / 1000 - new Date().getTime() / 1000,
      };
    },

    mounted() {
      this.date = new Date("Nov 2, 2017 22:00:00").getTime() / 1000;

      interval = setInterval(() => {
        this.now = new Date().getTime() / 1000;
      }, 1000);
    },

    computed: {
      seconds() {
        return Math.trunc(this.delta) % 60
      },
      minutes() {
        return Math.trunc(this.delta / 60) % 60
      },
      hours() {
        return Math.trunc(this.delta / 60 / 60) % 24
      },
      days() {
        return Math.trunc(this.delta / 60 / 60 / 24)
      },
      countdown() {
        if (this.delta <= 0)
          return "NOW";
        return "IN " + this.days + "D " + this.hours + "H " + this.minutes + "M " + this.seconds + "S ";
      }
    },

    watch: {
      now(value) {
        this.delta = this.date - this.now;
        if (this.delta <= 0) {
          this.delta = 0;
          clearInterval(interval);
        }
      }
    }
  }
</script>

<style scoped>

</style>

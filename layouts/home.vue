<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      background-color="#252525"
      text-color="#FFFFFF"
      active-text-color="#E4B429"
      class="nav-menu">
      <el-menu-item index="0">
        <img class="logo" src="~/assets/whiteHoriz.svg"/>
      </el-menu-item>
      <div class="nav-right">
        <el-menu-item index="1">About</el-menu-item>
        <el-menu-item index="2">Teams</el-menu-item>
        <el-menu-item index="3">Sponsors</el-menu-item>
        <el-menu-item index="4">Contact</el-menu-item>
        <el-button class="button" round>APPLY {{countdown}}</el-button>
      </div>
    </el-menu>
    <nuxt/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '0',
        countdown: "..."
      };
    },

    mounted() {
      const applicationsOpenDate = new Date("Oct 26, 2017 20:00:00").getTime();

      const timer = setInterval(() => {
        const delta = applicationsOpenDate - new Date().getTime();

        const days = Math.floor(delta / (1000 * 60 * 60 * 24));
        const hours = Math.floor((delta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((delta % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((delta % (1000 * 60)) / 1000);

        this.countdown = "IN " + days + "D " + hours + "H "
          + minutes + "M " + seconds + "S ";

        if (delta < 0) {
          clearInterval(timer);
          this.countdown = "NOW";
        }
      }, 1000);
    },

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  html {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 14px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    overflow: hidden;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>

<style scoped>
  .nav-menu {
    display: flex;
  }

  .nav-right {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
  }

  .button {
    background-color: #E4B429;
    border-color: #E4B429;
    color: #FFFFFF;
    height: 40px;
    width: 300px;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 700;
    margin-left: 20px;
    margin-right: 20px;
  }
</style>

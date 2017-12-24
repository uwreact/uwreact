<template>
  <el-container>
    <el-header class="header">
      <header-menu backgroundColor="#252525"
                   textColor="#FFFFFF"
                   activeTextColor="#E4B429">
          <header-menu-item href="#home" index="logo">
            <img class="logo" src="~/assets/logos/logoWhiteHoriz.svg"/>
          </header-menu-item>
          <header-menu-item href="#about" rightStart index="about">About</header-menu-item>
          <header-menu-item href="#teams" index="teams">Teams</header-menu-item>
          <header-menu-item href="#sponsors" index="sponsors">Sponsors</header-menu-item>
          <header-menu-item href="#contact" index="contact">Contact</header-menu-item>
      </header-menu>
    </el-header>
    <el-main>
      <nuxt></nuxt>
    </el-main>
  </el-container>
</template>

<script>
  import HeaderMenu from '../components/HeaderMenu'
  import HeaderMenuItem from '../components/HeaderMenuItem';

  export default {
    components: { HeaderMenu, HeaderMenuItem },
    data() {
      return {
        screenSize: -1,
      }
    },

    mounted() {
      window.addEventListener('resize', this.handleResize);
      this.screenSize = document.documentElement.clientWidth;
    },

    methods: {
      handleResize() {
        if (!process.browser)
          this.screenSize = 992;
        else
          this.screenSize = document.documentElement.clientWidth;
      },
    },
  }
</script>

<style>
  html {
    font-family: "Montserrat", sans-serif;
    color: #252525;
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

  a {
    text-decoration: none;
  }

  /*darker: #252525;*/
  /*dark: #444444;*/
  /*light: #d5d5d3;*/
  /*white: #ffffff;*/
  /*gold: #e4b429;*/
</style>

<style scoped>
  .header {
    padding: 0;
  }

  .logo {
    width: 200px;
  }
</style>

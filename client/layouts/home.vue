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

      <a href="#home" v-scroll-to="'#home'">
        <el-menu-item index="home">
          <img class="logo" src="~/assets/logos/uwri3d/logoWhiteHoriz.svg"/>
        </el-menu-item>
      </a>
      <div class="nav-right" v-if="screenSize >= 992">
        <a href="#about" v-scroll-to="'#about'">
          <el-menu-item index="about">About</el-menu-item>
        </a>
        <a href="#teams" v-scroll-to="'#teams'">
          <el-menu-item index="teams">Teams</el-menu-item>
        </a>
        <a href="#sponsors" v-scroll-to="'#sponsors'">
          <el-menu-item index="sponsors">Sponsors</el-menu-item>
        </a>
        <a href="#contact" v-scroll-to="'#contact'">
          <el-menu-item index="contact">Contact</el-menu-item>
        </a>
        <a href="/portal">
          <el-menu-item index="apply">
            <el-button class="apply-button" round>
              APPLY NOW
            </el-button>
          </el-menu-item>
        </a>
      </div>
      <div class="nav-right" v-if="screenSize > 0 && screenSize < 992">
        <el-submenu class="submenu" index="submenu">
          <template slot="title"><i class="el-icon-menu menu-icon"></i></template>
          <a href="#about" v-scroll-to="'#about'">
            <el-menu-item index="about-sub">About</el-menu-item>
          </a>
          <a href="#teams" v-scroll-to="'#teams'">
            <el-menu-item index="teams-sub">Teams</el-menu-item>
          </a>
          <a href="#sponsors" v-scroll-to="'#sponsors'">
            <el-menu-item index="sponsors-sub">Sponsors</el-menu-item>
          </a>
          <a href="#contact" v-scroll-to="'#contact'">
            <el-menu-item index="contact-sub">Contact</el-menu-item>
          </a>
          <a href="/portal">
            <el-menu-item index="apply-sub">
              Apply Now
            </el-menu-item>
          </a>
        </el-submenu>
      </div>
    </el-menu>
    <nuxt/>
  </div>
</template>

<script>
  import VueScrollTo from 'vue-scrollto'

  export default {
    data() {
      return {
        activeIndex: "",
        screenSize: -1
      }
    },

    mounted() {
      window.addEventListener('resize', this.handleResize);
      this.screenSize = document.documentElement.clientWidth;
    },

    methods: {
      handleSelect(key, keyPath) {
        this.activeIndex = "";
      },

      handleResize() {
        if (!process.browser)
          this.screenSize = 992;
        else
          this.screenSize = document.documentElement.clientWidth;
      }
    }
  }
</script>

<style>
  html {
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #252525;
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
  .nav-menu {
    z-index: 100;
    display: flex;
    border-color: #252525;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)
  }

  .nav-right {
    margin-left: auto;
    margin-right: 20px;
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
  }

  .apply-button {
    background-color: #E4B429;
    border-color: #E4B429;
    color: #FFFFFF;
    height: 40px;
    width: 300px;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-weight: 700;
  }

  .submenu {
    font-weight: 700;
  }

  .menu-icon {
    margin-left: 50px;
  }

  .apply-menu-item {
    font-size: 10px;
  }
</style>

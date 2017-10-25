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
      <el-menu-item index="home">
        <a href="#home" v-scroll-to="'#home'"><img class="logo" src="~/assets/uwri3dLogos/logoWhiteHoriz.svg"/></a>
      </el-menu-item>
      <div class="nav-right">
        <el-menu-item index="about"><a href="#about" v-scroll-to="'#about'">About</a></el-menu-item>
        <el-menu-item index="teams"><a href="#teams" v-scroll-to="'#teams'">Teams</a></el-menu-item>
        <el-menu-item index="sponsors"><a href="#sponsors" v-scroll-to="'#sponsors'">Sponsors</a></el-menu-item>
        <el-menu-item index="contact"><a href="#contact" v-scroll-to="'#contact'">Contact</a></el-menu-item>
        <countdown-apply-button/>
      </div>
    </el-menu>
    <nuxt/>
  </div>
</template>

<script>
  import CountdownApplyButton from '~/components/CountdownApplyButton.vue'

  export default {
    data() {
      return {
        activeIndex: 0
      }
    },

    components: {
      CountdownApplyButton
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
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
  }

  .nav-right {
    margin-left: auto;
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
  }
</style>

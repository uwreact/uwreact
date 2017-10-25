<template>
  <div class="page">
    <div class="hero">
      <el-row id="home">
        <el-col :sm="24" :md="12">
          <img class="hero-logo" src="~/assets/hero/heroLogo.jpg"/>
        </el-col>
        <el-col :sm="24" :md="12">
          <div class="hero-text">
            <p class="hero-header">
              ROBOT IN 3 DAYS <span class="yellow-text">AT</span>
              <br/>
              <span class="hero-header-small">THE UNIVERSITY OF WATERLOO</span>
            </p>
            <div class="yellow-line"/>
            <p class="hero-date">January 6 - 9, 2018</p>
            <p class="hero-applications">Applications open October 27, 2017</p>
          </div>
        </el-col>
      </el-row>
      <img class="hero-leaf" src="~/assets/hero/heroLeafBottom.svg"/>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    layout: 'home'
  }
</script>

<style scoped>
  .page {
    position: absolute;
    top: 60px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    overflow: auto;
  }

  .hero {
    z-index: 10;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: #444444;
  }

  .hero-logo {
    width: 90%;
  }

  .hero-text {
    margin-top: 72px;
    margin-bottom: 72px;
    padding: 20px;
    color: #ffffff;
  }

  .hero-header {
    font-weight: 700;
    font-size: 41px;
    line-height: 30px;
  }

  .hero-header-small {
    font-size: 26px;
  }

  .yellow-text {
    color: #e4b429;
  }

  .yellow-line {
    background-color: #e4b429;
    width: 72px;
    height: 8px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .hero-date {
    font-size: 24px;
    font-weight: 300;
  }

  .hero-applications {
    font-size: 18px;
    font-weight: 300;
  }

  .hero-leaf {
    width: 100%;
    background-color: #ffffff;
  }
</style>

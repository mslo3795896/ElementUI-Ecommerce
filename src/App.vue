<template>
  <div id="app">
    <!-- <Main/> -->
    <el-container>
      <custom-header></custom-header>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <el-footer>Copyright © Shopping. All Rights Reserved</el-footer>
    </el-container>
  </div>
</template>

<script>
// import Main from './views/Main.vue'
import CustomHeader from './components/custom-header.vue'

export default {
  components: {
    // Main
    'custom-header': CustomHeader
  }
}
</script>

<style>
#app, button, input {
  font-family: arial,"Microsoft JhengHei","微軟正黑體", "Open Sans",sans-serif !important;
}
.el-main{
  /* min-height: 90vh; */
  margin-top: 60px;
}
footer {
  background-color: black;
  color: aliceblue;
  line-height: 60px;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity 0.1s, -webkit-transform 0.2s;
  transition: opacity 0.1s, transform 0.2s;
  transition: opacity 0.2s, transform 0.5s, -webkit-transform 0.2s;
}

.slide-fade-enter, .slide-fade-leave-active {
  opacity: 0;
  -webkit-transform: translateX(100vw);
          transform: translateX(100vw);
}
</style>

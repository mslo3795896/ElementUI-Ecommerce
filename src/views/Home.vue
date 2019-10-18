<template>
  <!-- <el-container>
    <custom-header></custom-header>
    <el-main>
      <carousel></carousel>
      <product-list></product-list>
    </el-main>
    <router-view></router-view>
    <el-footer>Copyright © Shopping. All Rights Reserved</el-footer>
  </el-container> -->

  <el-main>
    <carousel :showAd="true"></carousel>
    <product-list></product-list>
  </el-main>
</template>

<script>
import { mapActions } from 'vuex'
import carousel from '../components/carousel.vue'
import ProductList from '../components/product-list.vue'

export default {
  mounted () {
    this.addMenuIndex('home')
  },
  components: {
    carousel,
    'product-list': ProductList
  },
  methods: {
    ...mapActions([
      'addMenuIndex'
    ])
  }
}
</script>

<style>

</style>

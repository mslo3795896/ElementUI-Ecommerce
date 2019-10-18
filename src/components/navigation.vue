<template>
  <el-menu
    ref="navi"
    :default-active="getNavigationIndex"
    class="el-menu-vertical-demo"
    @select="handleSelect">
    <el-menu-item key="home" index="home" @click="goHome">
      <i class="el-icon-s-home"></i>
      <span slot="title">首頁</span>
    </el-menu-item>
    <el-menu-item v-for="(prod, index) in getAllProducts" :key="index" :index="prod.name" @click="addCurrentProduct(prod)">
      <i class="el-icon-s-goods"></i>
      <span slot="title">{{ prod.name }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getAllProducts',
      'getNavigationIndex'
    ])
  },
  methods: {
    ...mapActions([
      'currentProduct',
      'addMenuIndex'
    ]),

    goHome () {
      if (document.location.href.indexOf('/home') < 0) { this.$router.push({ path: '/' }) }
    },
    addCurrentProduct (product) {
      this.currentProduct(product)
      if (document.location.href.indexOf('/prod') < 0) { this.$router.push({ path: '/prod' }) }
    },

    handleSelect (key) {
      this.addMenuIndex(key)
      this.$emit('closeDrawer')
    }
  }
}
</script>

<style>
.el-menu {
  border-right: none;
}
</style>

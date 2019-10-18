<template>
  <el-header class="flex">
    <el-drawer
      :key="'menu'"
      title="產品清單"
      :visible.sync="isOpenMenu"
      :append-to-body="true"
      :size="isMobile === true ? '100%' : '30%' "
      direction="ltr"
      ref="drawer"
      :destroy-on-close="true">
      <navigation @closeDrawer="closeDrawer"></navigation>
    </el-drawer>
    <el-button class="hd" type="text" icon="el-icon-menu" @click="isOpenMenu = true"></el-button>
    <el-autocomplete
      ref="search"
      class="inline-input"
      prefix-icon="el-icon-search"
      v-model="state"
      value-key="name"
      :fetch-suggestions="querySearch"
      placeholder="請輸入商品名稱"
      style="width: 60%;"
      @select="handleSelect"
      @clear="handleClear"
      clearable
    ></el-autocomplete>
    <router-link to="/cart">
      <el-badge :value="getProductsInCart.length" class="item">
        <el-button class="hd" type="text" icon="el-icon-shopping-cart-2"></el-button>
      </el-badge>
    </router-link>
  </el-header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import navigation from './navigation.vue'

export default {
  data () {
    return {
      isOpenMenu: false,
      state: ''
    }
  },
  components: {
    navigation
  },
  computed: {
    ...mapGetters([
      'getProductsInCart',
      'getAllProducts'
    ]),

    isMobile () {
      return /Mobi/.test(navigator.userAgent)
    }
  },
  methods: {
    ...mapActions([
      'currentProduct'
    ]),

    addCurrentProduct (prod) {
      this.currentProduct(prod)
    },

    closeDrawer () {
      this.$refs.drawer.closeDrawer()
    },

    querySearch (queryString, cb) {
      var results = queryString ? this.getAllProducts.filter(this.createFilter(queryString)) : this.getAllProducts
      cb(results)
    },
    createFilter (queryString) {
      return (prod) => {
        return (prod.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    handleSelect (item) {
      this.addCurrentProduct(item)
      if (document.location.href.indexOf('/prod') < 0) { this.$router.push({ path: '/prod' }) }
    },
    handleClear () {
      this.$refs.search.activated = true
    }
  }
}
</script>

<style>
.el-header.flex {
  position: fixed;
  padding: 8px 28px 8px 28px;
  left: 0;
  right: 0;
  line-height: 60px;

  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;

  box-shadow: 1px 0px 8px 0px #d3d3d37a;
  background-color: white;
  z-index: 3;
}
.hd{
  font-size: 30px;
  padding: 0;
}
.el-badge {
  display: flex;
}
.el-badge__content.is-fixed {
  top: 5px;
}
.el-drawer__header>:first-child {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
}
@media (max-width: 768px) {
  .el-drawer {
    width: 100% !important;
  }
}
</style>

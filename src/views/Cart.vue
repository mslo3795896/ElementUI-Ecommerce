<template>
  <el-main style="overflow: inherit;">
    <h1 style="margin-top: 0;">購物車</h1>
    <el-row v-if="hasProduct()" :gutter="20">
      <el-col :md="16">
        <el-card v-for="(prod, index) in getProductsInCart" :key="index" shadow="never" style="margin-bottom: 20px;" body-style="cursor: auto;">
          <product-info-cart :prod="prod" :index="index"></product-info-cart>
        </el-card>
      </el-col>
      <el-col class="total" :md="8">
        <el-card shadow="always" body-style="cursor: auto;">
          <div style="display: flex;justify-content: space-between;font-size: 24px;">
            <span>總計</span>
            <span style="color: rgb(255, 0, 102)">${{ this.$formatCurrency(totalPrice()) }}</span>
          </div>
          <el-divider class="sm"></el-divider>
          <el-button class="add-cart" type="success" style="width: 100%;">結  帳</el-button>
        </el-card>
      </el-col>

    </el-row>
    <el-row v-else type="flex" style="justify-content: center;flex-direction: column;align-items: center;padding: 7rem 0;">
      <h1>您的購物車是空的</h1>
      <router-link to="/">
        <el-button type="primary" style="font-size: 20px;width: 256px;">前往購物</el-button>
      </router-link>
    </el-row>

    <el-row type="flex" style="flex-wrap: wrap;margin-bottom: 20px;">
      <el-col>
        <h3>相關產品</h3>
        <div class="el-divider--horizontal" style="margin: 20px 0;background-color: lightgray;"></div>
        <carousel :showAd="false"></carousel>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductInfoCart from '../components/product-info-cart'
import carousel from '../components/carousel'

export default {
  /* data(){
    return{
      isEmpty: this.getProductsInCart.length > 0
    }
  }, */
  components: {
    'product-info-cart': ProductInfoCart,
    carousel
  },
  computed: {
    ...mapGetters([
      'getProductsInCart'
    ])
  },
  methods: {
    ...mapActions([
      'showOrHiddenPopupCart'
    ]),
    hasProduct () {
      return this.getProductsInCart.length > 0
    },
    totalPrice () {
      return this.getProductsInCart.reduce((current, next) =>
        current + next.price * next.amount, 0)
    },
    showPopupCart () {
      this.showOrHiddenPopupCart()
    }
  },
  watch: {
    $route (to, from) {

    }
  }

}
</script>

<style>
.el-divider.sm {
  margin: 20px 0;
}
.total {
  position: -webkit-sticky;
  position: sticky;
  top: 90px;
}
@media only screen and (max-width: 767px){
  .total {
    top: auto;
    bottom: 0;
  }
}
</style>

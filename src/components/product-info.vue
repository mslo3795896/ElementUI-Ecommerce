<template>
  <div class="product-info">
    <h1>{{ currentProduct.name }}</h1>
    <div class="el-divider--horizontal" style="margin: 20px 0;background-color: lightgray;"></div>
    <p style="font-size: 18px;">{{ currentProduct.info }}</p>
    <el-row type="flex" :gutter="20" justify="space-between" align="bottom" style="flex-wrap: wrap;">
      <el-col :xs="24" :md="12">
        <div class="el-form-item" style="margin: 0;">
          <label class="el-form-item__label">價格
            <span style="font-size: 1.5em;color: rgb(255, 0, 102);margin-left: 5px;">${{ this.$formatCurrency(currentProduct.price) }}</span>
          </label>
        </div>
        <el-rate
          v-model="currentProduct.stars"
          disabled
          text-color="#ff9900"
          :icon-classes="['large el-icon-star-on','large el-icon-star-on','large el-icon-star-on']">
        </el-rate>
      </el-col>
      <el-col :xs="24" :md="12" style="text-align: right;">
        <!-- <div class="el-form-item">
          <label class="el-form-item__label" style="float: none;">數量</label>
          <el-input-number v-model="amount" :min="1" :max="10"></el-input-number>
        </div> -->
        <div class="el-form-item" style="margin-top: 22px;">
          <el-select v-model="currentProduct.amount" placeholder="請選擇" style="width: 100%">
            <el-option
              v-for="item in 10"
              :key="item"
              :label="'數量：' + item"
              :value="item">
            </el-option>
          </el-select>
        </div>
        <el-button class="add-cart" @click.native="addProductToCart(currentProduct)" type="primary" icon="el-icon-shopping-cart-2" style="width: 100%;">加入購物車</el-button>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      amount: 1
    }
  },
  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct'
    })
  },

  methods: {
    ...mapActions([
      'addProduct',
      'showOrHiddenModal'
    ]),
    addProductToCart (product) {
      this.addProduct(product)
      this.$message({
        message: '成功加入購物車',
        type: 'success'
      })
    }
  }
}
</script>

<style>
.product-info .el-form-item__label{
  font-size: 18px;
}
.large{
  font-size: 22px;
}
@media only screen and (max-width: 767px){
  .el-input-number{
    width: 100%;
  }
  .product-info .el-form-item__label{
    padding: 0;
  }
}
</style>

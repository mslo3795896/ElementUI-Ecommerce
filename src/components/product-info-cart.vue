<template>
  <div class="product-info">
    <el-row type="flex" :gutter="20" justify="space-between" align="top" style="flex-wrap: wrap;">
      <el-col :xs="24" :md="5">
        <el-image
          class="no-blur"
          :src="require(`@/assets/static/prod/${prod.name}-removebg-preview.png`)"
          fit="fill">
        </el-image>
      </el-col>
      <el-col :xs="24" :md="11">
        <h1 style="margin-top: 0;">{{ prod.name }}</h1>
        <div class="el-form-item" style="margin: 0;">
          <label class="el-form-item__label">價格
            <span style="font-size: 20px;color: rgb(255, 0, 102);margin-left: 5px;">${{ this.$formatCurrency(prod.price) }}</span>
          </label>
        </div>
        <el-rate
          v-model="prod.stars"
          disabled
          text-color="#ff9900"
          :icon-classes="['large el-icon-star-on','large el-icon-star-on','large el-icon-star-on']">
        </el-rate>
      </el-col>
      <el-col class="cart-total" :xs="24" :md="8">
        <el-button type="danger" @click.native="remove(index)" plain icon="el-icon-delete">移除</el-button>
        <div class="el-form-item">
          <el-select v-model="prod.amount" placeholder="請選擇" style="width: 100%">
            <el-option
              v-for="item in 10"
              :key="item"
              :label="'數量：' + item"
              :value="item">
            </el-option>
          </el-select>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    index: Number,
    prod: {
      type: Object,
      required: true
    }
  },
  computed: {
  },

  methods: {
    ...mapActions([
      'removeProduct'
    ]),

    remove (index) {
      this.$confirm('確定將此商品從購物車中移除?', '提示', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.removeProduct(index)
        this.$message({
          type: 'success',
          message: '移除成功!'
        })
      }).catch(() => { })
    }
  }
}
</script>

<style>
.no-blur img{
  filter: none !important;
}
.product-info .el-form-item__label{
  font-size: 18px;
}
.large{
  font-size: 22px;
}
.cart-total{
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
}
.cart-total .el-form-item{
  margin: 0;
  width: 100%;
}
@media only screen and (max-width: 767px){
  .el-input-number{
    width: 100%;
  }
  .product-info .el-form-item__label{
    padding: 0;
  }
  .cart-total{
    flex-direction: row-reverse;
  }
  .cart-total .el-form-item{
    margin-top: 22px;
  }
  .cart-total .el-button--danger{
    margin-left: 10px;
  }
}

</style>

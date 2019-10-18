<template>
  <el-main class="prod">
    <el-row type="flex" :gutter="20" style="flex-wrap: wrap;margin-bottom: 20px;">
      <el-col :xs="24" :md="12">
        <el-image
          :src="require(`@/assets/static/prod/${currentProduct.name}-removebg-preview.png`)"
          :preview-src-list="[require(`@/assets/static/prod/${currentProduct.name}-removebg-preview.png`)]"
          fit="fill">
        </el-image>
      </el-col>
      <el-col :xs="24" :md="12">
        <product-info></product-info>
      </el-col>
    </el-row>
    <div class="el-divider--horizontal hidden-sm-and-up" style="margin: 20px 0;background-color: lightgray;"></div>
    <el-row type="flex" :gutter="20" style="flex-wrap: wrap;margin-bottom: 20px;">
      <el-col>
        <product-detail></product-detail>
      </el-col>
    </el-row>
    <el-row type="flex" :gutter="20" style="flex-wrap: wrap;margin-bottom: 20px;">
      <el-col>
        <h3>相關產品</h3>
        <div class="el-divider--horizontal" style="margin: 20px 0;background-color: lightgray;"></div>
        <carousel :showAd="showAd"></carousel>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ProductInfo from '../components/product-info.vue'
import ProductDetail from '../components/product-detail.vue'
import carousel from '../components/carousel.vue'

export default {
  data () {
    return {
      showAd: false
      /* url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ] */
    }
  },
  components: {
    'product-info': ProductInfo,
    'product-detail': ProductDetail,
    carousel
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
    },
    openModal () {
      this.showOrHiddenModal()
    }
  }
}
</script>

<style>
.el-main.prod{
    padding: 20px 200px;
}
@media only screen and (min-width: 768px){

}
@media only screen and (max-width: 767px){
  .el-main.prod{
    padding: 20px;
  }
}
</style>

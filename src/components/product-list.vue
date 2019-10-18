<template>
  <el-row type="flex" :gutter="20" justify="center" style="flex-wrap: wrap;margin-top: 25px;">
    <el-col :key="87">
      <el-divider>
        <span style="font-size: 30px;">
          熱銷商品
        </span>
      </el-divider>
    </el-col>
    <product-card v-for="(prod, index) in getAllProducts" :key="index" :prod="prod"></product-card>
  </el-row>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from './product-card.vue'

export default {
  components: {
    'product-card': ProductCard
  },
  computed: {
    ...mapGetters([
      'getAllProducts'
    ])
  }
}
</script>

<style>
.el-divider--horizontal{
  margin: 40px 0;
}
.el-menu {
  border-right: none;
}
</style>

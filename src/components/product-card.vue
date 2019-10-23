<template>
  <el-col :xs="xs || 24" :sm="sm || 8" :md="md || 8" style="margin-bottom: 20px;">
    <router-link to="/prod">
      <el-card :body-style="{ padding: '0px' ,height: '400px'}" shadow="hover" :style="prod.bg" >
        <img :src="require(`@/assets/static/prod/${prod.name}-removebg-preview.png`)" alt="" class="image" style="width: 100%;" @click="addCurrentProduct(prod)">
        <div style="" class="card-content">
          <div style="display: flex;justify-content: space-between;align-items: baseline;">
            <span style="font-size: 24px;font-weight: 600;">{{prod.name}}</span>
            <span style="font-size: 24px;font-weight: 600;color: #ff0066;">{{'$' + this.$formatCurrency(prod.price)}}</span>
          </div>
          <p style="color: #4f5f74bf;font-size: 20px;font-weight: 600;text-align: left;">{{prod.info}}</p>
        </div>
      </el-card>
    </router-link>
  </el-col>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    prod: {
      type: Object
      // required: true
    },
    xs: {
      type: Number
    },
    sm: {
      type: Number
    },
    md: {
      type: Number
    }
  },
  methods: {
    ...mapActions([
      'currentProduct'
    ]),

    addCurrentProduct (prod) {
      this.currentProduct(prod)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-divider--horizontal{
  margin: 40px 0;
}
.el-menu {
  border-right: none;
}
.card-content {
    padding: 14px;
    background-color: white;
    height: 372px;
    position: absolute;
    bottom: -338px;
    right: 0;
    left: 0;
    transition: .5s all;
    pointer-events: none;
}
::v-deep .el-card__body{
  position: relative;
  cursor: pointer;
  & img{
    transition: .5s all;
  }
  &:hover img{
    filter: blur(5px);
  }
  &:hover .card-content{
    bottom: 0px;
    background: #ffffffd1;
  }
}
</style>

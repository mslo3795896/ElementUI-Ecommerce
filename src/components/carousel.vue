<template>
  <div class="related-prod">
    <el-carousel trigger="click" height="51vh" v-if="showAd">
      <el-carousel-item v-for="path in imgPath" :key="path">
        <!-- <img :src="'~@/assets/static/carousel/' + path + '.jpg'" /> -->
        <img :src="require(`@/assets/static/carousel/${path}.jpg`)" alt />
      </el-carousel-item>
    </el-carousel>
    <owl-carousel
      :autoplay="true"
      :responsive="responsive"
      :margin="10"
      :dots="false"
      :loop="true"
      v-else
    >
      <template slot="prev">
        <el-button class="prev" icon="el-icon-arrow-left" circle></el-button>
      </template>
      <product-card
        :xs="24"
        :sm="24"
        :md="24"
        v-for="(prod, index) in getAllProducts"
        :key="index"
        :prod="prod"
      ></product-card>
      <template slot="next">
        <el-button class="next" icon="el-icon-arrow-right" circle></el-button>
      </template>
    </owl-carousel>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCard from './product-card'
import OwlCarousel from 'vue-owl-carousel'

export default {
  data () {
    return {
      imgPath: ['Camera', 'Earbuds', 'NeckSpeaker', 'Turntable'],
      responsive: {
        0: { items: 1, nav: false },
        767: { items: 3, nav: false }
      }
      /* list:[
        {name:'4K電視',price:'89,900',info:'OLED 擁有超過 800 萬個自發光且可精準個別控制的像素，呈現最純粹的黑色。超極真影像處理器 X1 進階版™，使鮮豔色彩、極致細節與明暗對比提升至令人驚豔的全新境界，讓影像比你想像得更真實。',bg:'background-image: linear-gradient(to left bottom, #d65db1, #e861a2, #f46993, #fc7486, #ff827b, #ff8f73, #ff9d6d, #ffac69, #ffbe66, #ffd166, #ffe469, #f9f871);'},
        {name:'音響',price:'11,900',info:'感受您最喜愛的音樂以精準平衡的姿態在整個空間中展現。此款喇叭包括廣域指向性的全新超高音喇叭。高頻音符能在寬闊的音場中精準重現，您甚至能感受到樂器所在的位置，獲得身歷其境的體驗。',bg:'background-image: linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);'},
        {name:'單眼相機',price:'58,980',info:'拍攝細節更豐富，層次更自然的相片及影片。35mm 全片幅 1220 萬像素*3 感光元件擁有從 ISO 50 至 409600*1 的寬廣動態範圍，雜訊超低。高像素、無間隙感光元件濾光鏡結構，以及其他捕捉光線的先進技術，讓您可以在低光條件下使用超高快門速度拍攝。',bg:'background: -webkit-radial-gradient(right bottom, rgb(250, 87, 165), rgb(197, 254, 120));'},
        {name:'智慧型手機',price:'25,990',info:'最新的顯示幕、相機和音訊技術都收錄在精美設計的智慧型手機中。擁有 21:9 CinemaWide 6.1 吋 FHD+ HDR OLED 顯示幕、三鏡頭相機和劇院級 Dolby Atmos® 多維音效，Xperia 5 帶來唯有 Sony 可提供的最佳體驗。',bg:'background: -webkit-radial-gradient(right bottom, rgb(244, 120, 104), rgb(25, 194, 66));'},
        {name:'無線藍芽耳機',price:'2,980',info:'降噪功能可嚴密地阻絕外界聲音，效果前所未有，讓您體驗全世界只剩下您自己和音樂聲的感覺。此外，自動降噪偵測模式等進階降噪技術，以及快速注意模式、語音助理相容性和觸控等便利的智慧功能，讓您享受更聰明的智慧型手機體驗。',bg:'background: -webkit-radial-gradient(right bottom, rgb(109, 199, 153), rgb(174, 174, 215));'},
        {name:'遊戲主機',price:'12,980',info:'與世界各地的好友一同遊玩您喜愛的遊戲，即使好友沒有那款遊戲亦可同樂。在分享遊玩*中您可讓擁有 PS4 主機的好友觀看您的遊玩過程，也可以讓他們負責操控，甚至邀請他們以第二位玩家的身分，與您在單機多人遊戲中合作或對戰。您只需按住 SHARE 按鈕並選擇「開始分享遊玩」即可使用此功能。',bg:'background: -webkit-radial-gradient(right bottom, rgb(244, 200, 248), rgb(189, 167, 76));'},
        {name:'運動攝影機',price:'10,980',info:'出色音效讓影片更精采。內建立體聲麥克風可將您的冒險旅程中各種聲音收錄成自然的雙軌立體聲。降低雜音的純淨聲音讓您製作出最細緻的電影作品。',bg:'background: -webkit-radial-gradient(right bottom, rgb(134, 239, 232), rgb(201, 203, 232));'},
        {name:'聯名T恤',price:'780',info:'商品皆為人工車縫，尺寸因布料水洗、測量起訖點等因素，實際尺寸正負 2cm 內的差距為合理範圍，敬請見諒。',bg:'background: -webkit-radial-gradient(right bottom, rgb(187, 245, 100), rgb(84, 49, 163));}'}
      ] */
    }
  },
  props: {
    showAd: {
      type: Boolean
    }
  },
  components: {
    'product-card': ProductCard,
    'owl-carousel': OwlCarousel
  },
  computed: {
    ...mapGetters(['getAllProducts'])
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.el-carousel__item {
  & img {
    width: 100%;
    height: 100%;
  }
}
.related-prod {
  & button.is-circle {
    position: absolute;
    top: 50%;
    z-index: 2;
    opacity: 0;
    transition: 0.2s opacity;
  }
  &:hover button.is-circle {
    opacity: 1;
  }
  & button.prev {
    left: 0;
  }
  & button.next {
    right: 0;
  }
  & ::v-deep span[id*="carousel_prev"] {
    display: inline !important;
  }
}
@media only screen and (max-width: 767px) {
  ::v-deep .el-carousel__container {
    height: 25vh !important;
  }
  .related-prod {
    & button.is-circle {
      opacity: 1 !important;
    }
  }
}
</style>

<template>
  <el-tabs type="border-card" v-model="activeName">
    <el-tab-pane label="產品介紹" name="first">
      <h1>感受如臨其境的真實感</h1>
      <p>見證色彩、清晰度與對比的全新視界，沉浸在豐富飽滿的劇院音效中。 A8G 搭載超極真影像處理器 X1 進階版™，Acoustic Surface™ 平面聲場技術與 Dolby Vision™， 讓您體驗前所未有的臨場感。</p>
      <h1>極致非凡 唯有 BRAVIA OLED</h1>
      <p>Sony 獨家超極真影像處理器 X1 進階版™，能將 OLED 面板效能發揮至淋漓盡致，創造出令人歎為觀止的畫面，將您的影音觀賞體驗提升至全新境界。</p>
      <h1>無與倫比的真實感</h1>
      <p>有了功能強大的影像處理器驅動，Sony 4K HDR 電視才能呈現如此栩栩如生的影像細節。採用強大的資料演算法及精準的面板控制技術，降低雜訊並提升清晰度，能夠產生銳利、清晰的影像。</p>
      <h1>前所未有的絕佳音質</h1>
      <p>與大多數電視喇叭不同，Sony BRAVIA 將揚聲器直接整合於螢幕內，您能身歷其境地沉浸於絕佳音效及全新的娛樂體驗中，影像和聲音達到完美合一。</p>
    </el-tab-pane>
    <el-tab-pane label="產品規格" name="second">
      <el-table
      :data="tableData"
      style="width: 100%"
      :show-header="false">
      <el-table-column
        prop="date"
        label=""
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label=""
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="">
      </el-table-column>
    </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first',
      tableData: [{
        date: '高畫質',
        name: '影像處理器',
        address: '超極真影像處理器 X1 進階版'
      }, {
        date: '高畫質',
        name: '面板背光技術',
        address: 'OLED'
      }, {
        date: '高畫質',
        name: '最佳可視範圍',
        address: '178 度 (上下左右)'
      }, {
        date: '音效',
        name: 'Clear Audio+ 真實音訊處理技術',
        address: '平面聲場技術'
      }, {
        date: '音效',
        name: '音效模式',
        address: '標準 / 對話 / 電影  / 音樂 / 體育'
      }, {
        date: '外觀',
        name: '底座寬度',
        address: '657 mm'
      }, {
        date: '外觀',
        name: '壁掛孔距 (左右 X 上下)',
        address: '300x300 mm'
      }, {
        date: '輸入輸出',
        name: 'HDMI / 色差 (輸入)',
        address: '4 組 / 0 組'
      }, {
        date: '輸入輸出',
        name: 'USB 輸入',
        address: '3 組'
      } ]
    }
  }
}
</script>

<style>

</style>

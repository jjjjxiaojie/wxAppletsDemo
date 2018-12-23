<template>
<div class="container">
  <div class="banner">
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular"  >
      <div v-for="item in bannerList" :key="item.img_id">
        <swiper-item>
          <image :src="'/static/imgs/' + item.url" class="slide-image"  @click="product(item.key_word)" />
        </swiper-item>
      </div>
    </swiper>
  </div>

  <div class="home-main-theme">
    <div class="home-main-header">精选主题</div>
    <div class="theme-box">
        <block v-for="theme in themeList" :key="theme.topic_img_id">
            <div v-if="theme.index==2" class="theme-item big" @click="onThemesItemTap"  v-model="theme.name">
                <image :src="'/static/imgs' + theme.url"></image>
            </div>
            <div v-else class="theme-item" @click="onThemesItemTap"  v-model="theme.name">
                <image :src="'/static/imgs' + theme.url"></image>
            </div>
        </block>
    </div>
    <div class="home-main-products">
      <div class="home-main-header">最近新品</div>
      <products :productInfoList="productInfoList"></products>
  </div>
  </div>
</div>
</template>

<script>
import {
  Home
} from './index-model.js'
import products from '../tpls/products/index.vue'
export default {
  components: {
    products
  },
  data () {
    return {
      kkk: '123456789',
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      themeList: [],
      bannerList: [],
      productInfoList: []
    }
  },
  methods: {
    onThemesItemTap () {
    },
    product (res) {
      wx.navigateTo({
        url: '../product/main?productId=' + res
      })
    },
    dataInit () {
      var home = new Home()
      home.getBannerData((res) => {
        this.bannerList = res.data.info
      })
      home.getThemeData((res) => {
        this.themeList = res.data.info
      })
      home.getProductList((res) => {
        this.productInfoList = res.data.info
      })
    }
  },
  created () {
    this.dataInit()
  }
}
</script>
@import "../tpls/base.wxss"
@import "../tpls/products/products-tpl.wxss"
<style scoped>
.index {
  font-size: 75px
}
.swiper{
  height: 180px
}
.slide-image {
  width: 100%;
  height: 100%;
}
.banner {
}
.banner-item{
  height: 100%;
  width: 100%;
}
.banner-item image{
  height: 100%;
  width: 100%;
}

.home-main-header{
  display: flex;
  height: 60rpx;
  color: #AB956D;
  background-color: #fff;
  font-size: 32rpx;
  align-items: center;
  justify-content: center;
  margin: 20rpx 0;
}

.home-main-theme{
  /*margin: 20rpx 0;*/
}
.theme-box{
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
.theme-item{
  display: flex;
  height:375rpx;
  width: 50%;
  border-bottom: 4rpx solid #fff;
  position: relative;
  box-sizing: border-box;
}
.theme-item:first-child{
  border-right:4rpx solid #fff;
}
.theme-item.big{
  width: 100%;
}
.theme-item.big .theme-icon view{
  margin: 0 auto;
  width: 150rpx;
  height: 60rpx;
  border-radius: 60rpx;
  line-height: 60rpx;
  border:1rpx solid #fff;
  text-align: center;
  font-size: 24rpx;
}
.theme-item image{
  height: 100%;
  width: 100%;
}
.theme-icon{
  margin-top:10rpx;
  height: 48rpx;
}
.theme-icon image{
  height: 48rpx;
  width: 48rpx;
}
</style>

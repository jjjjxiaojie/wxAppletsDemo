<template name="categorydetail">
  <div class="category-detail-box">
    <div class="category-header">
      <image v-if="categoryInfo.topImgUrl" :src="'/static/imgs' + categoryInfo.topImgUrl" mode="aspectFill"></image>
    </div>
    <div class="category-title">
      <span>{{categoryInfo.title}}</span>
    </div>
    <div class="category-main">
      <block v-for="product in categoryInfo.productList" :key="product.id">
        <div class="index%3 == 1 ? 'category-goods-items middle':'category-goods-items'" @click="onProductsItemTap">
          <image :src="'/static/imgs' + product.mainImgUrl" mode="aspectFill"></image>
          <div>{{product.name}}</div>
        </div>
      </block>
    </div>
  </div>
</template>
<script>
export default {
  name: 'category',
  props: {
    categoryInfo: String
  },
  data () {
    return {
      categoryInfo: this.categoryInfo
    }
  },
  methods: {
    onProductsItemTap () {

    }
  }
}
</script>
<style scoped>
.category-detail-box{
    overflow: hidden;
    padding: 20px;
}
.category-header{
    height: 200rpx;
    text-align: center;
}
.category-header image{
    border-radius: 5rpx;
    width: 520rpx;
    max-height: 100%;
}
.category-title{
    margin: 30rpx;
    display: flex;
    align-items: center;
    justify-content: center;
}
.category-title text{
    font-size: 24rpx;
    color:#AB956D;
}
.category-title text::before,.category-title text::after{
    content: '';
    display: inline-block;
    position: relative;
    top: -6rpx;
    width: 70rpx;
    height: 2rpx;
    margin: 0 20rpx;
    background-color:#979797;
}
.category-main{
    display: flex;
    flex-wrap: wrap;
}
.category-goods-items{
    width: 25%;
    margin-bottom: 20rpx;
    text-align: center;
}
.category-goods-items.middle{
    margin:0 20rpx;
}
.category-goods-items image{
    height: 120rpx;
    width: 120rpx;
    border-radius: 120rpx;
}
.category-goods-items div {
    color:#444452;
    font-size: 20rpx;
}
</style>

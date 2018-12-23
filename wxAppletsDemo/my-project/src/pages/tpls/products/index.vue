<template name="products">
    <div class="products-box">
        <block v-for="product in productInfoList" :key="product.id">
            <div class="products-item" @click="onProductsItemTap(product.id)">
                <image v-if="product.mainImgUrl" class="products-image" :src="'/static/imgs' + product.mainImgUrl" mode="aspectFill"></image>
                <div class="products-item-bottom">
                    <span class="name">{{product.name}}</span>
                    <div class="price">￥{{product.price}}</div>
                </div>
            </div>
        </block>
    </div>
</template>
<script>
export default {
  name: 'products',
  props: {
    productInfoList: String
  },
  data () {
    return {
      productInfoList: this.productInfoList
    }
  },
  methods: {
    onProductsItemTap (res) {
      wx.navigateTo({
        url: '../product/main?productId=' + res
      })
    }
  }
}
</script>
<style scoped>
.products-box{
  margin:0 20rpx 20rpx 20rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
}
.products-item{
  min-height:300rpx;
  width: 49%;
  border-radius: 10rpx;
  margin-right: 0;
  margin-bottom: 10rpx;
  background-color: #F5F6F5;
  text-align: center;
}
.products-image{
  margin: 10rpx auto 0 auto;
  width:80%;
  height:220rpx;
  border-radius: 10rpx;
}

.products-item-bottom{
  text-align: center;
  margin-bottom:20rpx;
  color: #333;
}
.products-item-bottom .name{
  font-size: 28rpx;
}
.products-item-bottom .price{
  font-size: 24rpx;
}
</style>

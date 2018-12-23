<template>
  <div class="container detail-container">
      <div class="detail-header-box">
        <div class="fixed-btns-box" @click="onCartTap">
            <div class="isShake ? 'fiexd-cart animate' : 'fiexd-cart'">
                  <image src="/static/imgs/icon/cart@top.png"/>
                  <div v-if="cartTotalCounts > 0">{{cartTotalCounts}}</div>
            </div>
          </div>
          <div class="detail-topic-img">
              <image v-if="productDetailInfo.product.mainImgUrl" :src="'/static/imgs' + productDetailInfo.product.mainImgUrl" mode="aspectFit"/>
          </div>
          <div class="cart-box">

              <div class="product-counts">
                  <picker :class="productDetailInfo.product.stock == 0 ? 'disabled' : ''" @change="bindPickerChange" :value="index" :range="countsArray">
                      <div>
                          <span class="counts-tips">数量</span>
                          <span class="counts-data">{{productCounts}}</span>
                          <image class="counts-icon" src="/static/imgs/icon/arrow@down.png"/>
                      </div>
                  </picker>
              </div>

              <div class="middle-border"></div>
              <div :class="productDetailInfo.product.stock == 0 ? 'add-cart-btn disabled' : 'add-cart-btn'" @click="onAddingToCartTap">
                  <span>加入购物车</span>
                  <image class="cart-icon" src="/static/imgs/icon/cart.png"/>
                  <image v-if="productDetailInfo.product.mainImgUrl"
                   id="small-top-img" :class="isFly? 'small-top-img animate' : 'small-top-img'"
                   :src="productDetailInfo.product.mainImgUrl" mode="aspectFill" :style="translateStyle"/>
              </div>
          </div>

          <div class="basic-info-box">
              <div class="stock" v-if="productDetailInfo.product.stock>0">有货</div>
              <div class="stock no" v-else>缺货</div>
              <div class="name">{{productDetailInfo.product.name}}</div>
              <div class="price">￥{{productDetailInfo.product.price}}</div>
          </div>

      </div>

      <div class="detail-bottom-box">

        <div class="tabs-box">
            <block v-for="item in tabList" :key = "index">
                <div :class="currentTabsIndex == index ? 'tabs-item selected' : 'tabs-item'" @click="onTabsItemTap(index)">
                    {{item}}
                </div>
            </block>
        </div>

        <div class="product-detail-box">
            <div class="product-detail-imgs" v-show="currentTabsIndex == 0">
                <block v-for="productImage in productDetailInfo.productImageList" :key="productImage.id">
                    <image v-if="productImage.url" :src="'/static/imgs' + productImage.url" mode="aspectFill"></image>
                </block>
            </div>

            <div class="product-detail-properties"  v-show="currentTabsIndex == 1">
                <block v-for="productProperty in productDetailInfo.productPropertyList" :key="productProperty.id">
                    <div class="properties-item">
                        <div class="properties-name">{{productProperty.name}}</div>
                        <div class="properties-detail">{{productProperty.detail}}</div>
                    </div>
                </block>
            </div>

            <div class="product-detail-protect" v-show="currentTabsIndex  == 2">
                <div>七天无理由免费退货</div>
            </div>

        </div>
    </div>
  </div>
</template>
<script>
import {Product} from './index-model.js'
export default {
  data () {
    return {
      tabList: ['商品详情', '产品参数', '售后保障'],
      productId: '',
      productDetailInfo: '',
      countsArray: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      productCounts: 1,
      isFly: '',
      translateStyle: '',
      isShake: '',
      cartTotalCounts: '',
      dataindex: '',
      currentTabsIndex: 0,
      index: 0
    }
  },
  methods: {
    onTabsItemTap (res) {
      this.currentTabsIndex = res
    },
    bindPickerChange (res) {
      var index = res.target.value
      this.productCounts = this.countsArray[index]
      console.log()
    },
    dataInit () {
      var product = new Product()
      product.getProductDetailData(this.productId, (res) => {
        this.productDetailInfo = res.data.info
      })
    },
    onAddingToCartTap: function () {
      if (this.isFly) {
        return
      }
      this.flyToCartEffect()
    // this.addToCart()
    },
    // _flyToCartEffect:function(events){
    //     //获得当前点击的位置，距离可视区域左上角
    //     var touches=events.touches[0];
    //     var diff={
    //             x:'25px',
    //             y:25-touches.clientY+'px'
    //         },
    //         style='display: block;-webkit-transform:translate('+diff.x+','+diff.y+') rotate(350deg) scale(0)';  //移动距离
    //         this.isFly = true,
    //         this.translateStyle = style
    //     }
    //     var that=this
    //     setTimeout(() => {
    //             this.isFly = false,
    //             this.translateStyle = '-webkit-transform: none;',  //恢复到最初状态
    //             this.isShake = true,
    //         setTimeout(()=>{
    //             var counts=that.data.cartTotalCounts+that.data.productCounts;
    //                 this.isShake = false,
    //                 this.cartTotalCounts = counts
    //         },200)
    //     },1000)
    // },
    onCartTap () {

    }
  },
  onLoad (options) {
    this.productId = options.productId
    this.dataInit()
  }
}
</script>

@import "../tpls/base.wxss";
<style scoped>
.detail-container {
  background-color:#F9F9F9
}
.detail-header-box,.detail-bottom-box{
  background-color: #fff;
}
.detail-topic-img{
  display: flex;
  justify-content: center;
}
.detail-topic-img image{
  width: 100%;
}
.fixed-btns-box{
  position: fixed;
  top:50rpx;
  right:12px;
  width: 80rpx;
}
.fiexd-cart image{
  height: 64rpx;
  width: 64rpx;
}
.fiexd-cart div{
  font-size: 24rpx;
  background-color: #AB956D;
  color: white;
  position: absolute;
  right: 64rpx;
  top: 0rpx;
  height: 36rpx;
  width: 36rpx;
  line-height: 36rpx;
  border-radius: 36rpx;
  text-align: center;
}
.fiexd-cart.animate{
  animation: aCartScale 200ms cubic-bezier(.17,.67,.83,.67);
  animation-fill-mode: backwards;
}

@-webkit-keyframes aCartScale{
  0%{
    -webkit-transform: scale(1.1);
  }
  100% {
    -webkit-transform: scale(1);
  }
}

/*选择数量和添加到购物车*/
.cart-box{
  width: 660rpx;
  height: 100rpx;
  margin: 30rpx auto;
  border-radius: 100rpx;
  background-color: #AB956D;
  color: #fff;
  display: flex;
  align-items: center;
}

.product-counts,.add-cart-btn{
  height: 100%;
  display: flex;
  font-size: 24rpx;
  align-items: center;
  justify-content: center;
}
.product-counts{
  width: 50%;
}
.add-cart-btn{
  position: relative;
  flex: 1;
}
.add-cart-btn:active{
  color: #fff;
}
.add-cart-btn.disabled{
  color: #D5D5DB;
}

/*中间分割线*/
.middle-border{
  width: 2rpx;
  height: 30rpx;
  border-right: 1rpx #fff dotted;
}

.small-top-img{
  height: 160rpx;
  width: 160rpx;
  right:6rpx;
  position: absolute;
  opacity: 0;
}
.small-top-img.animate{
  opacity: 1;
  /*-webkit-transition:all 1000ms cubic-bezier(.4,.46,.3,1.31);*/
  -webkit-transition:all 1000ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}


/*数量选择器*/
.product-counts picker{
  margin: 0 auto;
  height: 100rpx;
  width: 100%;
  color: #fff;
}
.product-counts picker.disabled{
  color: #D5D5DB;
}
.product-counts picker div{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100rpx;
}
.counts-tips,.counts-data,.counts-icon{
  margin: 0 20rpx;
}
.counts-data{
  font-size: 28rpx;
}
.counts-icon{
  height: 48rpx;
  width: 48rpx;
}

.add-cart-btn .cart-icon{
  margin-left: 40rpx;
  height: 32rpx;
  width: 32rpx;
}

/*价格和名称*/
.basic-info-box{
  padding: 15rpx 0;
  color: #454552;
  text-align: center;
}
.basic-info-box>div{
  margin: 20rpx auto;
}
.basic-info-box .stock{
  font-size: 24rpx;
}
.basic-info-box .stock.no{
  color:#B42F2D;
}
.basic-info-box .name{
  font-size: 40rpx;
}
.basic-info-box .price{
  font-size: 38rpx;
}

/*商品详情*/
.detail-bottom-box{
  margin-top: 30rpx;
}
.tabs-box{
  height: 90rpx;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15rpx;
}
.tabs-item{
  width: 33.3%;
  color: #C7C7CB;
  font-size: 28rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  border-bottom: 1rpx solid #D0D0D7;
}
.tabs-item.selected{
  /*color: #AB956D;*/
  color: rgba(171,149,109,.8);
  /*border-bottom: 2px solid #AB956D;*/
  border-bottom: 2px solid rgba(171,149,109,.8);
}
.product-detail-box{
  padding-bottom: 20rpx;
}
.product-detail-imgs image{
  width: 100%;
  height:400rpx;
  float: left;
}

.product-detail-properties,.product-detail-protect{
  min-height: 80vh;
}

.properties-item{
  display: flex;
  margin: 25rpx 0;
  font-size:24rpx;
}
.properties-name{
  width: 160rpx;
  color:#808080;
  text-align: center;
}
.properties-detail{
  flex:1;
  color: #333;
  padding-right: 40rpx;
}


.product-detail-protect div{
  font-size: 24rpx;
  color:808080;
  text-align: center;
  margin-top: 30rpx;
}
</style>

<template>
  <div class="container category-container">
    <div class="category-box">
        <div class="left-box">
          <block v-for="(category,index) in categoryList" :key="category.id">
            <div :class="currentMenuIndex == index ? 'menu-item selected':'menu-item'" @click="changeCategory(index)">
              {{category.name}}
            </div>
          </block>
      </div>
      <div class="right-box">

        <div class="foods-type-box">
          <category :categoryInfo = "productListByCategoryId"></category>
        </div>
        <!-- <div class="foods-type-box">
          <category :categoryInfo = "categoryInfo:categoryInfo1"></category>
        </div>
        <div class="foods-type-box">
          <category :categoryInfo = "categoryInfo:categoryInfo2"></category>
        </div>
        <div class="foods-type-box">
          <category :categoryInfo = "categoryInfo:categoryInfo3"></category>
        </div>
        <div class="foods-type-box">
          <category :categoryInfo = "categoryInfo:categoryInfo4"></category>
        </div>
        <div class="foods-type-box">
          <category :categoryInfo = "categoryInfo:categoryInfo5"></category>
        </div> -->

      </div>

    </div>
    <!-- <loading hidden="{{loadingHidden}}">
      加载中...
    </loading> -->
  </div>
</template>
<script>
import {
  Category
} from './index-model.js'
import category from '../tpls/category/index.vue'
export default {
  components: {
    category
  },
  data () {
    return {
      categoryList: '',
      currentMenuIndex: 0,
      productListByCategoryId: ''
    }
  },
  methods: {
    changeCategory (res) {
      var index = res
      this.currentMenuIndex = index
    },
    dataInit () {
      var category = new Category()
      category.getCategoryList((res) => {
        this.categoryList = res.data.info
        category.getProductListByCategoryId(this.categoryList[0].id, (res) => {
          var dataObj = {
            topImgUrl: this.categoryList[0].url,
            title: this.categoryList[0].name,
            productList: res.data.info
          }
          this.productListByCategoryId = dataObj
        })
      })
    }
  },
  onLoad () {
    this.dataInit()
  }
}
</script>
@import "../tpls/category/category-tpl.wxss";
<style scoped>
.category-container{
    /*min-height: 100vh;*/
}
.category-box{
    display: flex;
    height: 100vh;
    overflow: hidden;
}
.left-box{
    flex: 0 0 150rpx;
    border-right:1rpx solid #D8D8D8;
}
.menu-item{
    height: 50rpx;
    padding: 20rpx 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:28rpx;
    border-left: 6rpx solid #fff;
}
.menu-item.selected{
    color: #AB956D;
    border-left-color:#AB956D;
}

.right-box{
    flex: 1;
    transition: all 500ms ease-in-out;
}
.tanslate0{
    transform:translate(0,0);
}
.tanslate1{
    transform:translate(0,-100vh);
}
.tanslate2{
    transform:translate(0,-200vh);
}
.tanslate3{
    transform:translate(0,-300vh);
}
.tanslate4{
    transform:translate(0,-400vh);
}
.tanslate5{
    transform:translate(0,-500vh);
}
.foods-type-box{
    height: 100vh;
}
</style>

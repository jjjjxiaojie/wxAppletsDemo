import {Base} from '../../../utils/base.js'
class Product extends Base {
  getProductDetailData (productId, callBack) {
    var params = {
      url: 'product/' + productId,
      sCallBack: function (res) {
        callBack && callBack(res)
      }
    }
    this.request(params)
  }
}
export {Product}

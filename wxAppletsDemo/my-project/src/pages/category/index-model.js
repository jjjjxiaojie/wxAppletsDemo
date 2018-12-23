import {Base} from '../../../utils/base.js'
class Category extends Base {
  getCategoryList (callBack) {
    var params = {
      url: 'category',
      sCallBack: function (res) {
        callBack && callBack(res)
      }
    }
    this.request(params)
  }

  getProductListByCategoryId (categoryId, callBack) {
    var params = {
      url: 'product/by/' + categoryId,
      sCallBack: function (res) {
        callBack && callBack(res)
      }
    }
    this.request(params)
  }
}
export {Category}

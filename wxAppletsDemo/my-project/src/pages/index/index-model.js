import {Base} from '../../../utils/base.js'
class Home extends Base {
  getBannerData (callBack) {
    var params = {
      url: 'banner',
      sCallBack: function (res) {
        callBack && callBack(res)
      }
    }
    this.request(params)
  }

  getThemeData (callBack) {
    var params = {
      url: 'theme',
      sCallBack: function (res) {
        callBack && callBack(res)
      }
    }
    this.request(params)
  }

  getProductList (callBack) {
    var params = {
      url: 'product',
      sCallBack: function (res) {
        callBack && callBack(res)
      }
    }
    this.request(params)
  }
}
class UserInfo extends Base {
  getUserInfo (userInfoCallBack) {
    var params = {
      sCallBack: function (res) {
        userInfoCallBack && userInfoCallBack(res)
      }
    }
    this.userInfo(params)
  }
}
export {Home, UserInfo}

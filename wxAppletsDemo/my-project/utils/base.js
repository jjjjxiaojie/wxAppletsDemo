import {Config} from './config.js'
class Base {
  constructor() {
    this.baseRequestUrl = Config.restUrl
  }

  request (params) {
    var url = this.baseRequestUrl + params.url
    if(!params.type) {
      params.type = 'GET'
    }
    wx.request ({
      url: url,
      data: params.data,
      methods: params.type,
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync('token')
      },
      success:function(res) {
        params.sCallBack && params.sCallBack(res)
      },
      fail:function(err) {

      }
    })
  }

  userInfo (params) {
      // 查看是否授权
      wx.getSetting({
        success(res) {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success(res) {
                params.sCallBack && params.sCallBack(res.userInfo)
              }
            })
          } else {
            console.log('获取用户信息时，用户未授权，获取用户信息失败')
          }
        }
      })
    }
}
export {Base}

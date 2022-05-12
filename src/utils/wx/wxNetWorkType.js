/**
 * Created by huweijian on 2018/5/7.
 * @title
 */
import wx from 'weixin-js-sdk'

export default () => {
  return new Promise((resolve, reject) => {
    wx.getNetworkType({
      success: function (res) {
        resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}

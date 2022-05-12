/**
 * Created by huweijian on 2017/9/7.
 * @title
 */
import wx from 'weixin-js-sdk'
import Promise from 'es6-promise'

/**
 * 调用微信sdk打开二维码功能
 * @param config
 */
export default (config) => {
  return new Promise(function (resolve, reject) {
    wx.scanQRCode({
      needResult: config.needResult || 1,
      desc: config.desc || '',
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(JSON.stringify(err))
      }
    })
  })
}

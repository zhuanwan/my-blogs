/**
 * Created by huweijian on 2017/9/7.
 * @title
 */
import wx from 'weixin-js-sdk'
// import { Toast } from 'antd-mobile'
// import Promise from 'es6-promise'

/**
 * 注册微信配置
 * @param config
 */
export default config => {
  // 注入权限验证配置
  return new Promise(function(resolve, reject) {
    wx.config({
      debug: false,
      appId: config.appId, // 必填，公众号的唯一标识
      timestamp: config.timestamp, // 必填，生成签名的时间戳
      nonceStr: config.nonceStr, // 必填，生成签名的随机串
      signature: config.signature, // 必填，签名
      jsApiList: [
        'checkJsApi',
        'chooseImage',
        'uploadImage',
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'updateAppMessageShareData',
        'updateTimelineShareData',
        'startRecord',
        'stopRecord',
        'playVoice',
        'uploadVoice',
        'hideOptionMenu',
        'showOptionMenu',
        'getNetworkType',
        'scanQRCode',
        'hideMenuItems',
        'showMenuItems',
        'openLocation'
      ]
    })
    // 微信分享
    wx.ready(function() {
      wx.checkJsApi({
        jsApiList: [
          'updateAppMessageShareData',
          'updateTimelineShareData',
          'onMenuShareTimeline',
          'onMenuShareAppMessage',
          'startRecord',
          'stopRecord',
          'playVoice',
          'uploadVoice',
          'chooseImage',
          'previewImage',
          'getNetworkType',
          'openLocation',
          'hideOptionMenu',
          'showOptionMenu',
          'hideMenuItems',
          'showMenuItems',
          'scanQRCode'
          // 'onMenuShareQQ',
          // 'onMenuShareWeibo',
          // 'onMenuShareQZone',
          // 'onVoiceRecordEnd',
          // 'pauseVoice',
          // 'stopVoice',
          // 'onVoicePlayEnd',
          // 'downloadVoice',
          // 'uploadImage',
          // 'downloadImage',
          // 'translateVoice',
          // 'getLocation',
          // 'hideAllNonBaseMenuItem',
          // 'showAllNonBaseMenuItem',
          // 'closeWindow',
          // 'chooseWXPay',
          // 'openProductSpecificView',
          // 'addCard',
          // 'chooseCard',
          // 'openCard'
        ],
        success() {},
        fail() {}
      })

      wx.hideMenuItems({
        menuList: [
          // 传播类
          // 'menuItem:share:appMessage',
          // 'menuItem:share:timeline',
          'menuItem:favorite',
          'menuItem:share:qq',
          'menuItem:share:weiboApp',
          'menuItem:share:facebook',
          'menuItem:share:QZone',

          // 保护类
          'menuItem:editTag',
          'menuItem:delete',
          'menuItem:copyUrl',
          'menuItem:originPage',
          'menuItem:readMode',
          'menuItem:openWithQQBrowser',
          'menuItem:openWithSafari',
          'menuItem:share:email',
          'menuItem:share:brand'
        ]
      })

      wx.getNetworkType({
        success: res => {
          resolve(res)
        }
      })
    })

    wx.error(res => reject(res.errMsg))
  })
}

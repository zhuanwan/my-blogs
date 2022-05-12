/**
 * Created by huweijian on 2017/9/15.
 * @title
 */
import wx from 'weixin-js-sdk'
import { getStorage } from 'utils/storage'
import { basename } from 'config'
import { pushFixedSearch } from 'router/history'

/**
 * 微信分享信息更新
 * @param params 分享内容参数
 */
// 参考文档
// 部分api即将废弃
// https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html
// 微信分享
export default function wxShare(params) {
  wx.ready(() => {
    const link = getShareLink(params)
    console.log('分享参数', link, params)
    const { title, desc, imgUrl, success = () => {} } = params

    // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容 wx.onMenuShareAppMessage 即将废弃
    wx.onMenuShareAppMessage({
      title,
      desc,
      imgUrl,
      link,
      success: () => success()
    })
    // 如果废弃使用下面的方法即可
    // wx.updateAppMessageShareData({ title, desc, imgUrl, link })

    // 自定义“分享到朋友圈”按钮的分享内容 wx.onMenuShareTimeline 即将废弃
    wx.onMenuShareTimeline({
      title,
      link,
      imgUrl,
      success: () => success()
    })
    // 如果废弃使用下面的方法即可
    // wx.updateTimelineShareData({ title, desc, imgUrl, link })
  })

  wx.error(res => {
    params.fail && params.fail(res)
  })
}

// 自动根据当前链接获取分享链接及参数配置
// 分享可能包含以下参数
// 分享人Id（forwardUserId）
// 来源Id(originId)
// 来源类型 sourceType
const getShareLink = function({ queryParams, link, path }) {
  // 来源参数必填 后期统一添加
  // if (!queryParams.originId) throw new Error('缺少来源Id参数(originId)')

  // link 会有多种情景
  // 默认情况下不需要传递link参数 直接获取当前页面url进行分享 并添加和检查必须参数及额外的参数
  // 也可以传递完整的分享链接地址 通常不需要 一般跳转到外部项目会使用到
  // 第三种情况是 分享项目内的页面 只需要传递页面的path和额外参数即可 这里会自动拼接完整的url及参数
  const url =
    link ||
    (path &&
      `${window.location.protocol}//${window.location.host}${basename}/${path}`) ||
    window.location.href
  const urlObject = new URL(url)

  if (queryParams) {
    Object.keys(queryParams).forEach(key => {
      const value = queryParams[key]
      const isInvalidValue = value === null || value === undefined
      const newValue = isInvalidValue ? '' : value
      urlObject.searchParams.set(key, newValue)
    })
  }

  const cid = getStorage('cid')
  const uid = getStorage(`${cid}_uid`)
  urlObject.searchParams.set('forwardUserId', uid)
  // urlObject.searchParams.set('sourceType', 1)

  const [resultUrl, queryString] = urlObject.href.split('?')

  return `${resultUrl}?${pushFixedSearch(queryString || '')}`
}

// 禁用分享
function wxShareDisable() {
  wx.ready(() => {
    wx.hideMenuItems({
      menuList: ['menuItem:share:appMessage', 'menuItem:share:timeline']
    })
  })
}

// 启用分享
function wxShareEnable() {
  wx.ready(() => {
    wx.showMenuItems({
      menuList: ['menuItem:share:appMessage', 'menuItem:share:timeline']
    })
  })
}

export function updateWxShareStatus(canShare) {
  if (canShare) {
    wxShareEnable()
  } else {
    wxShareDisable()
  }
}

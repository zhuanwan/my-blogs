import { effect } from 'store'
import * as types from 'store/mutation-types'
import { getRandomCardId } from 'api/card'

// 初始化依赖相关内容 统计之类的内容也可以放在这里
export default function dispatchEntrance(route) {
  const queryParams = new URLSearchParams(route.location.search.slice(1))
  const token = queryParams.get('token')
  if (!token) {
    // 有token 是从小程序来的，不要初始化微信分享
    dispatchWxConfig(window.location.href)
  }

  const cardId = queryParams.get('cardId')
  if (!cardId) throw new Error('缺少cardId')

  getUserAuthInfo()
  getMasterBindInfo()
  getCompanyInfo(queryParams.get('cid'))
  // getMallSetting()

  // 获取名片基本信息
  getCardInfo(cardId, queryParams.get('cid'))

  // const shareId = queryParams.get('routeId') // 待添加参数
  // 作为入口必须要有originId
  // const originId = queryParams.get('originId')
  // if (originId) {
  //   // 来源发送 暂无
  //   // 需要考虑有些来源需要带参数
  //   // 但是有些参数依赖接口的请求，所以可能只能在业务代码中去发送。。。。
  //   // sendSourceStat(originId)
  // } else {
  //   console.warn('当前如果作为入口可能缺少originId参数')
  // }
}

// 路由监听
// history.listen(() => { })

// 路由钩子
// export function routerBeforeEach(route) {
//   console.log('render', route)
// }

// 对必填参数进行检测
// 如果非依赖参数可在路由配置
//  withoutCid: true
//  withoutCardId: true
// function urlParamsCheck(search, meta) {
//   const queryParams = new URLSearchParams(search.slice(1))

//   if (!meta.withoutCid && !queryParams.get('cid')) {
//     throw new Error('缺少CompanyId(cid)')
//   }

//   if (!meta.withoutCardId && !queryParams.get('cardId')) {
//     throw new Error('缺少cardId')
//   }
// }

// 名片Id检测
export async function requestCardId() {
  const data = await getRandomCardId()
  const urlInstance = new URL(window.location.href)
  urlInstance.searchParams.set('cardId', data.cardId)
  window.location.href = urlInstance.href
  // window.history.replaceState(
  //   { path: urlInstance.href },
  //   '',
  //   urlInstance.href
  // )
}

// 查询是否绑定名片主人
function getMasterBindInfo() {
  effect({
    type: types.USER_BIND_STATUS_GET,
    payload: {
      params: {}
    }
  })
}

/**
 * 发起请求微信config的异步dispatch
 */
export function dispatchWxConfig(url) {
  effect({
    type: types.SYS_WX_CONFIG_GET,
    payload: {
      params: {
        url
      }
    }
  })
}

/**
 * 发起用户信息查询请求
 */
export function dispatchUserInfo(cid) {
  effect({
    type: types.SYS_USERINFO_GET,
    payload: {
      params: {
        cid
      }
    }
  })
}

/**
 * 发起企业基本信息查询请求
 */
function getCompanyInfo(companyId) {
  effect({
    type: types.COMPANY_INFO_GET,
    payload: {
      params: {
        companyId
      }
    }
  })
}

/**
 * 获取用户授权信息
 */
function getUserAuthInfo() {
  effect({
    type: types.USER_AUTH_INFO_STATUS_GET,
    payload: {
      params: {}
    }
  })
}

/**
 * 发起企业商城配置查询请求
 */
// function getMallSetting() {
//   effect({
//     type: types.MALL_SETTING_GET,
//     payload: {}
//   })
// }

/**
 * 发起名片基础信息请求
 */
function getCardInfo(cardId, companyId) {
  effect({
    type: types.CARD_BASE_GET,
    payload: {
      params: {
        cardId,
        companyId
      }
    }
  })
}

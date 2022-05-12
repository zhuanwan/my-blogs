/**
 * @Author: huweijian
 * @Date: 2019-09-27 11:10:35
 * @Desc: 微信H5授权
 */

import { searchToObj } from 'utils/tools'
// import { effect } from 'store/index'
// import * as types from 'store/mutation-types'
import config from 'config/index'
import { getToken, setToken } from 'utils/storage'

export function login(cid) {
  const companyId = cid
  if (!companyId) {
    throw new Error('公司Id缺失')
  }

  if (retryLimitCheck()) {
    // @todo 跳转异常页
    throw new Error('授权出现异常')
  }

  const queryParams = {
    redirectUrl: appendRetryLimit(window.location.href),
    companyId
  }

  const qs = Object.keys(queryParams).map(
    k => `${k}=${encodeURIComponent(queryParams[k])}`
  )
  // 如果是本地浏览器环境则不去授权
  const ua = window.navigator.userAgent.toLowerCase()
  if (process.env.NODE_ENV !== 'development' || ua.includes('micromessenger')) {
    window.location.href = `${config.authUrl}?${qs.join('&')}`
  }
}

// 限制失败重试次数
const RETRY_LIMIT = 3
const RETEY_LIMIT_KEY = 'authRetryCount'

// 添加重试参数
function appendRetryLimit(url) {
  const urlIns = new URL(url)
  const val = urlIns.searchParams.get(RETEY_LIMIT_KEY)
  urlIns.searchParams.set(RETEY_LIMIT_KEY, +val + 1 || 1)
  urlIns.searchParams.delete('status')
  return urlIns.href
}

// 检测是否重试次数过多 避免进入登录异常死循环
function retryLimitCheck() {
  const searchIns = new URLSearchParams(window.location.search.slice(1))
  const count = searchIns.get(RETEY_LIMIT_KEY)
  return count && +count > RETRY_LIMIT
}

// 授权状态检测
export default function authInit(cid) {
  // 获取查询参数
  const search = searchToObj()
  const {
    token
    // status
  } = search

  // 检查参数是否带Token
  // 如果带Token存储token并更新授权状态
  if (token) {
    setToken(token)
    // effect({
    //   type: types.SYS_LOG_PUT,
    //   payload: {
    //     params: {
    //       type: 3,
    //       content: { message: '登录成功', status }
    //     }
    //   }
    // })

    const urlInstance = new URL(window.location.href)
    urlInstance.searchParams.delete(RETEY_LIMIT_KEY)
    urlInstance.searchParams.delete('status')
    urlInstance.searchParams.delete('token')
    // window.location.href = urlInstance.href
    window.history.replaceState(
      { path: urlInstance.href },
      '',
      urlInstance.href
    )
    return token
  }

  // 检查是否有过授权会话
  const localToken = getToken()
  if (localToken) return localToken

  // effect({
  //   type: types.SYS_LOG_PUT,
  //   payload: {
  //     params: {
  //       type: 3,
  //       content: { message: '跳转登录status', status }
  //     }
  //   }
  // })

  // 登录重定向
  login(cid)
}

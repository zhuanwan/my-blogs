import axios from 'axios'
import { clearStorage, getStorage } from '@/utils/storage'
import storageKey from '@/utils/storageKey'

/**
 * 自定义实例默认值
 */

const instance = axios.create({ timeout: 10000, baseURL: '/bromake_celcd-cmp-ie' }) // 请求超时

const getToken = (() => {
  return () => getStorage(storageKey.TOKEN)
})()

instance.interceptors.request.use(
  (config) => {
    const extendConfig = config

    // 获取token，配置请求头
    const TOKEN = getToken()

    if (TOKEN) {
      extendConfig.headers = extendConfig.headers || {}
      // 配置请求头 token
      extendConfig.headers['Content-Type'] = 'application/json'
      extendConfig.headers.Authorization = TOKEN
    }

    return extendConfig
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    const { status } = response
    if (status === 401) {
      clearStorage()
      // toLogin()
    }
    return response.data
  },
  (error) => {
    // 对响应错误做点什么
    const { status } = error.response
    if (status === 401) {
      clearStorage()
      // toLogin()
    }
    return Promise.reject(error)
  }
)

export default instance

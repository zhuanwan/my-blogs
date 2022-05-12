// 跳转获客文章h5页面
import config from 'config'

export default function toArticle(path, params = {}) {
  const queryParams = Object.keys(params).map(
    key => `${key}=${encodeURIComponent(params[key])}`
  )

  const href = `${config.api.hostArt}${path}?${queryParams.join('&')}`

  window.location.href = href
}

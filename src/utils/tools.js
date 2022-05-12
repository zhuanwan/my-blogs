import { Toast } from 'antd-mobile'
/**
 * @Author: huweijian
 * @Date: 2019-11-08 16:04:48
 * @Desc: 工具类方法
 */
/**
 * 解析url查询参数
 * @export
 * @returns
 */
export function searchToObj() {
  let search = window.location.href.split('?')[1]
  if (!search) {
    return {}
  }
  let arr = search.split('&')
  let obj = {}
  arr.forEach(item => {
    let r = item.split('=')
    obj[r[0]] = r[1]
  })
  // console.log(obj)
  return obj
}

/**
 * 组合链接参数
 *
 * @export
 * @param {*} url
 * @param {*} searchInfo
 * @returns
 */
export function joinUrl(url, searchInfo) {
  let arr = []
  for (const key in searchInfo) {
    arr.push(`${key}=${searchInfo[key]}`)
  }
  return `${url}?${arr.join('&')}`
}

/**
 * 查询目标对象在数组中的位置
 * @export
 * @param {*} array
 * @param {*} key
 * @param {*} val
 * @returns
 */
export function findObjIndexInArray(array, key, val) {
  let index = null
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] && array[i][key] === val) {
      index = i
    }
  }
  return index
}

/**
 * 通过制定key删除删除数组中的目标对象
 * @export
 * @param {*} array
 * @param {*} key
 * @param {*} val
 * @returns
 */
export function delObjInArray(array, key, val) {
  const arr = Array.from(array)
  let index = findObjIndexInArray(arr, key, val)
  if (index !== null) {
    arr.splice(index, 1)
  }
  return arr
}

/**
 * 获取实时随机字符串
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536, 10) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * 获取随机字符串
 * @export
 * @param {*} len 目标字符长度
 * @param {string} [mode='all'] 模式
 * @param {number} [radix=0] 随机数
 * @returns
 */
export function getRandom(len, mode = 'all', radix = 0) {
  // 返回多位随机字符
  const charMap = {
    letterLower: 'abcdefghijklmnopqrstuvwxy',
    letterUpper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    letterAll: 'abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ',
    number: '0123456789',
    numberLetterLower: '0123456789abcdefghijklmnopqrstuvwxy',
    numberLetterUpper: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    all: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  }
  let chars = (charMap[mode] || charMap.all).split('')
  let uuid = []
  let i
  radix = radix || chars.length
  if (len) {
    // Compact form
    for (i = 0; i < len; i++) {
      uuid[i] = chars[0 | (Math.random() * radix)]
    }
  } else {
    // rfc4122, version 4 form
    let r
    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'
    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}

/**
 * 检查环境是否支持webb格式
 *
 * @export
 * @returns
 */
export function checkWebpSupport() {
  if (typeof document === 'undefined') {
    return false
  }
  const CANVAS = document.createElement('canvas')
  return CANVAS.toDataURL('image/webp').indexOf('data:image/webp;') === 0
}
/**
 * 转化腾讯云万象图片请求模式为webp
 *
 * @export
 * @param {*} url
 * @returns
 */
export function translateTxImgToWebp(url) {
  if (!url) return ''
  if (!checkWebpSupport()) {
    return url
  }
  const [content, search] = url.split('?')
  // 没有search内容， 则拼接webp设置
  if (search === '' || search === undefined) {
    return `${content}?imageMogr2/format/webp`
  }
  // 如果search内容包含 imageMogr2
  if (/imageMogr2/.test(search)) {
    // 如果 已配置了的图片转化方案
    if (/format/.test(search)) {
      return `${content}?${search.replace(/(format\/)[a-z]+/, '$1webp')}`
    }
    return `${content}?${search.replace(/(imageMogr2)/, '$1/format/webp')}`
  }
  return `${content}?imageMogr2/format/webp&${search}`
}

/**
 * 复制内容到粘贴板
 * @param {String} content : 需要复制的内容
 * @param {String} message : 复制完后的提示，不传则默认提示"复制成功"
 */
export function copyToClip(content, message = '内容已复制') {
  var aux = document.createElement('input')
  aux.setAttribute('value', content)
  aux.style.position = 'absolute'
  aux.setAttribute('readonly', '')
  document.body.appendChild(aux)
  aux.select()
  document.execCommand('copy')
  document.body.removeChild(aux)
  Toast.success(message, 2)
}

/**
 * 对图片进行扶正和缩略处理
 * @param {String} src : 图片原地址
 * @param {String} isThumbnail : 是否缩略
 * @param {String} width : 图片宽度
 * @param {String} height : 图片高度
 */
export function iamgeThumbnail(src, isThumbnail, width, height) {
  const [url, params] = `${src}?`.split('?')
  const formatParams = params.split('&')
  const imageMogr2 = formatParams.find(item => /^imageMogr2/.test(item))
  const index = imageMogr2
    ? formatParams.indexOf(imageMogr2)
    : formatParams.length
  const isGif = /\.gif$/i.test(url)

  // 如果没有添加过处理参数 初始化
  if (!formatParams[index]) formatParams[index] = 'imageMogr2'

  // 未添加扶正参数 添加
  if (formatParams[index].indexOf('/auto-orient') === -1)
    formatParams[index] += '/auto-orient'

  // 未添加缩略图参数
  // 腾讯云处理gif图片速度太慢太慢不添加裁剪参数
  if (
    !isGif &&
    isThumbnail &&
    formatParams[index].indexOf('/thumbnail') === -1
  ) {
    // 最大宽度为设备宽度
    formatParams[index] += `/thumbnail/${width ||
      window.innerWidth * (window.devicePixelRatio || 1)}x`
    // 指定高度
    if (height) formatParams[index] += `${height}`
  }

  return translateTxImgToWebp(`${url}?${formatParams.join('&')}`)
}

/**
 * 函数节流
 * @param {Function} fn : 原函数
 * @param {Number} gapTime : 间隔
 */
export function throttle(fn, gapTime = 1500) {
  let _lastTime = 0
  // 返回新的函数
  return function() {
    let _nowTime = +new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn.apply(this, arguments) //将this和参数传给原函数
      _lastTime = _nowTime
    }
  }
}

/**
 * 函数防抖
 * @param {Function} fn : 原函数
 * @param {*} wait : 间隔
 * @returns Function
 */
export function debounce(fn, wait = 1500) {
  let timeout
  return function() {
    let context = this
    let args = arguments

    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

import {
  GOODS_PATH,
  GOODS_DETAIL_PATH,
  CARD_PATH,
  WEBSITE_PATH
} from '../jt/mpPath'
import { getCid } from '../storage'
import { getQrCode } from 'api/sys'
import store from 'store'
// originId 待定
const config = [
  {
    id: 1001, // 名片页关联商品
    params: {
      page: GOODS_DETAIL_PATH,
      qrCodeType: 2,
      extAttribute: { sourceType: 2, originId: null }
    }
  },
  {
    id: 1002, // 名片页查看更多商品
    params: {
      page: GOODS_PATH,
      qrCodeType: 2,
      extAttribute: { sourceType: 2, originId: null }
    }
  },
  {
    id: 1003, // 名片页跳转官网 @todo 临时
    params: {
      page: WEBSITE_PATH,
      qrCodeType: 2,
      extAttribute: { originId: null, sourceType: 2 }
    }
  },
  {
    id: 1101,
    params: {
      page: CARD_PATH, // 所有案例跳转名片 @todo 可能不需要
      qrCodeType: 18,
      extAttribute: { originId: 1026, sourceType: 23 }
    }
  },
  {
    id: 1201, // 案例详情跳转名片 @todo 可能不需要
    params: {
      page: CARD_PATH,
      qrCodeType: 18,
      extAttribute: { originId: 1026, sourceType: 23 }
    }
  },
  {
    id: 1301, // 文件首页跳转名片 @todo 可能不需要
    params: {
      page: CARD_PATH,
      qrCodeType: 18,
      extAttribute: { originId: 1027, sourceType: 23 }
    }
  },
  {
    id: 1401, // 官网轮播图跳转商品
    params: {
      page: GOODS_DETAIL_PATH,
      qrCodeType: 2,
      extAttribute: { sourceType: 2, originId: null }
    }
  },
  {
    id: 1501, // 直播详情底部跳转名片
    params: {
      page: CARD_PATH,
      qrCodeType: 18,
      extAttribute: { originId: null, sourceType: 23 }
    }
  },
  {
    id: 1601, // 直播播放器结束跳转名片
    params: {
      page: CARD_PATH,
      qrCodeType: 18,
      extAttribute: { originId: null, sourceType: 23 }
    }
  },
  {
    id: 1701, // 名片页关联商品
    params: {
      page: GOODS_DETAIL_PATH,
      qrCodeType: 2,
      extAttribute: { sourceType: 2, originId: null }
    }
  }
]

const configMap = {}
config.forEach(item => {
  configMap[item.id] = item.params
})

export function getMpCodeConfig(id, options = {}) {
  // 自定义参数
  const { extAttribute, ...params } = options

  // 配置参数
  const { extAttribute: fixedExtAttribute, ...fixedParams } = configMap[id]

  const {
    sys: { userInfo }
  } = store.getState()

  return {
    companyId: getCid(),
    ...fixedParams,
    ...params,
    extAttribute: {
      forwardUserId: userInfo.userId,
      ...fixedExtAttribute,
      ...extAttribute
    }
  }
}

export function getMpCode(id, options, config = {}) {
  return getQrCode(getMpCodeConfig(id, options), config)
}

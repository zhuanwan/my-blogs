import { effect } from 'store'
import * as types from 'store/mutation-types'
import { getFeedsSessionId } from 'api/request'

/**
 * @Author: huweijian
 * @Date: 2019-11-13 16:18:21
 * @Desc: 处理feeds
 */
const actionsMap = {
  // 未知或者不存在部分
  // SAVEPHONE_FEED: 262404, // 保存电话 262404 H5暂时没有
  // SEND_CARD_CODE: 280, // 点击名片码 H5暂时没有
  // NOTRELIABLE_FEED: 0x2003, // 取消靠谱 8195 没有
  // LOOKSTOREDETAIL_FEED: 8301, // 查看门店详情 8301
  // AUTHLOCATION_FEED: 8302, // 门店授权位置
  // SHARECOMPANYDYNAMIC_FEED: 1309, // 企业动态转发 被注释 已拆分不同类型
  // SHAREPERSONNYDYNAMIC_FEED: 0x113, // 转发个人动态 275 被注释 已拆分不同类型
  // SHARE_USER_LINK_DYNAMIC: 262424, // 转发个人链接动态 个人似乎没有链接动态?
  // THUMBS_UP_USER_LINK_DYNAMIC: 262428, // 点赞个人带标题动态 个人似乎没有链接动态?
  // LIKEPERSONSIGNATURE: 0x4010e, // 赞了个性签名 似乎未使用？
  // LIKECOMPANYNYDYNAMIC_FEED: 0x40d, // 赞企业动态 1037 已使用更详细分类替代
  // COMMENTCOMPANYDYNAMIC_FEED: 0x40c, // 评论企业动态 1036 已使用更详细分类替代
  // COMMENTPERSONDYNAMIC_FEED: 0x40106, // 评论个人动态 262406 已使用更详细分类替代
  // LIKEPERSONNYDYNAMIC_FEED: 0x111, // 赞个人动态 273 已使用更详细分类替代
  // LOOKCOMPANYDYNAMIC_FEED: 1308, // 企业动态详情查看 废弃
  // WATCH_USER_DYNAMIC: 262421, // 个人图片动态查看 未使用
  // WATCH_COMPANY_DYNAMIC: 262419, // 公司图片动态查看  未使用
  // WATCH_USER_LINK_DYNAMIC: 262420, // 查看个人链接动态 个人没有链接动态

  // 已添加部分
  SEECARD_FEED: 257,
  SHARECARD_FEED: 258, // 转发名片 258
  CALLPHONE_FEED: 0x40103, // 拨打电话 262403
  DIAL_FEED: 0x40108, // 拨打座机262408
  COPYWXID_FEED: 265, // 复制微信号 265
  COPY_CARD_ADDRESS: 262416, // 复制名片上地址
  COPYEMAIL_FEED: 266, // 复制邮箱 266
  PLAYVOICE_FEED: 271, // 播放语音 271
  WATCH_CARD_VR: 285, // 查看名片vr
  PLAY_VIDEO: 268, // 播放视频 268
  RELIABLE_FEED: 262413, // 点击靠谱 262413
  LIKELEBEL_FEED: 262405, // 点赞个性标签 262405
  IS_FELLOW_TOWNSMAN: 281, // 是同乡
  IS_SAME_SCHOOL: 282, // 是同校
  VIEW_CARD_ALBUM_FEED: 267, // 查看相册
  WATCH_COLLEAGUE: 284, // 查看我的同事
  PUBLIC_COMMENT: 283, // 发布名片评论
  VIEW_CLUB_CARD: 18689, // 查看商会名片
  LOOKDYNAMIC_FEED: 0x110, // 动态首页查看 272
  SHARENYDYNAMIC_FEED: 0x114, // 动态首页转发 276
  COMMENT_COM_LINK_DYNAMIC: 262430, // 评论公司链接动态
  COMMENT_COM_IMG_DYNAMIC: 262431, // 评论公司图片动态
  COMMENT_VIDEO_DYNAMIC: 262439, // 评论个人视频动态
  COMMENT_USER_LINK_DYNAMIC: 262432, // 评论个人带标题动态
  COMMENT_USER_IMG_DYNAMIC: 262433, // 评论个人图片动态
  SHARE_COMPANY_IMG_DYNAMIC: 262423, // 转发公司图动态
  SHARE_COMPANY_LINK_DYNAMIC: 262422, // 转发公司链接动态
  SHARE_USER_IMG_DYNAMIC: 262425, // 转发个人图片动态
  SHARE_VIDEO_DYNAMIC: 262438, // 转发视频动态
  THUMBS_UP_COM_IMG_DYNAMIC: 262427, // 点赞公司图片动态
  THUMBS_UP_COM_LINK_DYNAMIC: 262426, // 点赞公司链接动态
  THUMBS_UP_USER_IMG_DYNAMIC: 262429, // 点赞个人图片动态
  THUMBS_UP_VIDEO_DYNAMIC: 262437, // 点赞个人视频动态
  WATCH_USER_IMG_DYNAMIC: 262421, // 查看个人图片动态
  WATCH_COM_IMG_DYNAMIC: 262419, // 查看企业图文动态
  WATCH_USER_VIDEO_DYNAMIC: 262436, // 查看个人视频动态
  WATCH_COM_LINK_DYNAMIC: 262418, // 查看链接带标题动态

  LOOKWEBSITE_FEED: 0x401, // 查看官网 1025
  LOOKCOMPANYVIDEO_FEED: 0x403, // 播放官网视频 1027
  SHAREWEBSITE_FEED: 0x414, // 转发公司官网 1044
  WATCH_WEBSITE_VR: 1048, // 查看官网 VR

  // 未添加部分
  FORM_LOOK: 8199, // 浏览表单
  FORM_SUBMIT: 8196, // 提交表单
  FORM_LOOK_WEB: 8306, // 查看官网表单
  FORM_LOOK_DY: 8307, // 查看动态表单
  FORM_LOOK_PRODUCT: 8308, // 查看产品表单
  FORM_LOOK_MSG: 8309, // 聊天中查看表单
  FORM_SUB_WEB: 8310, // 提交官网表单
  FORM_SUB_DY: 8311, // 提交动态表单
  FORM_SUB_PRODUCT: 8312, // 提交产品表单
  FORM_SUB_MSG: 8313, // 聊天中提交表单

  AUTHORPHONE_FEED: 8198, // 授权手机号 8198
  SAVECARDPOSTER_FEED: 0x115, // 保存名片海报 277
  CHAT_TIP: 0x802, // 点击聊一聊
  LOOKINFOMATION_FEED: 0x40a, // 查看企业资讯 1034
  SHAREINFOMATION_FEED: 0x413, // 转发企业资讯 1043
  LOOKEMPLOYMENT_FEED: 0x40f, // 查看公司招聘信息1039
  SHAREEMPLOYMENT_FEED: 0x410, // 转发公司招聘信息 1040
  // CALLCOMPANYPHONE_FEED: 0x404,
  CALLCOMPANYPHONE_FEED: 1028, // 官网拨打公司电话 1028
  LOOKCOMPANYLOACTION: 0x409, // 官网查看公司地理位置 1033

  CHATPRODUCT_FEED: 0x40202, // 咨询产品 262658
  CHATMALL_FEED: 0x4050b, // 咨询商城 263435
  LOOKPRODUCT_FEED: 0x201, // 查看产品 513
  SHAREPRODUCT_FEED: 0x203, // 转发产品 515
  LOOKEMALL_FEED: 0x501, // 查看商城 1281
  LOOKGOODSDETAIL_FEED: 0x509, // 查看商品详情 1289
  LOOKRECOMMENDPRO_FEED: 279, // 查看推荐商品
  SHAREGOODSDETAIL_FEED: 1292, // 0x50c, // 转发商品 1292
  PLAYGOODSRECOMMENDVOICE_FEED: 0x502, // 播放商品推荐语 1282
  ADDGOODSINSHAOPPINGCART_FEED: 0x503, // 添加进购物车 1283
  BUYINGGOODS_FEED: 0x504, // 正在购买商品 1284
  SUBMITORDER_FEED: 0x505, // 提交订单 1285
  SUBMITORDERAFTERMTENM_FEED: 0x50d, // 提交订单10分钟未支付 1293
  COMPLETEPAYMENT_FEED: 0x506, // 完成支付 1286
  CALLSTOREPHONE_FEED: 8303, // 拨打门店电话 8303
  WATCH_PRODUCT_LIST: 520, // 查看产品列表
  SHARE_PRODUCT_LIST: 521, // 转发产品列表
  SHARE_MALL_LIST: 1312, // 转发商品品列表
  GO_CARD_BY_MANAGEMENT: 1046, // 官网管理团队跳转名片
  GO_CARD_BY_CARD: 1047, // 官网名片列表跳转名片
  SAVE_COLLECT_COUPONS: 1311, // 商城领取优惠券
  WATCH_MALL_VIDEO: 1313, // 查看商品视频
  ASK_MALL_DETAIL: 1314, // 咨询商品
  PAY_GROUPS: 1317, // 拼团支付成功 发送拼团feeds流
  WATCH_FORM_BY_NOTICE: 8314, // 服务通知中的表单
  SAVE_PRODUCT_POSTER: 27702, // 保存商品海报 0x6C36
  AFTER_SALE: 1320, // 申请售后 0x528
  SUBMITORDER_FEED_COLLECT_COUPONS: 1322, // 使用优惠券下单
  WATCH_FILE: 262440, // 客户浏览文件
  SHARE_FILE: 262441, // 客户分享文件

  CASE_CALL: 17154, // 案例拨打电话
  CASE_WECHAT: 17155, // 案例微信
  CASE_LOOK_MALL: 17156, // 案例浏览商品
  CASE_ENTRY: 17157, // 案例详情
  CASE_LIST: 17158, // 多个案例

  VIDEO_IN: 17665, // 进入视频
  VIDEO_OUT: 17666, // 退出视频
  VIDEO_CALL: 17667, // 视频-拨打电话
  VIDEO_WECHAT: 17668, // 视频-微信
  VIDEO_GOODS: 17669, // 视频-商品弹窗
  VIDEO_THUMB: 17670, // 视频-点赞
  VIDEO_COMMENT: 17671 // 视频-评论
}

/**
 * 重组feedsReport所需参数
 * @export
 * @param {*} actionKey
 * @param {*} params
 * @param {*} [options={}]
 * @returns
 */
export default function getFeedsParams(actionKey, options = {}) {
  const templateId = actionsMap[actionKey]

  if (!templateId) throw new Error('缺少feeds类型')
  if (!options.to) throw new Error('缺少参数cardId(to)')
  // const { sys } = store.getState()
  return {
    templateId,
    feedsSessionId: getFeedsSessionId(),
    cilent: 'web',
    params: {},
    ...options
  }
}

// 默认读取链接上的cardId
// 如果不存在会抛异常
// 如果需要自定义在传 params = { to: cardId } 即可
export function sendFeeds(key, { to, ...params } = {}, options = {}) {
  const searchParams = new URLSearchParams(window.location.search.slice(1))
  effect({
    type: types.SYS_FEEDS_PUT,
    payload: {
      key,
      params: {
        ...options,
        to: to || searchParams.get('cardId') || null,
        params
      }
    }
  })
}

import { getOneTimeSubscribeAuth, saveLongPathMap } from 'api/chat'

/**
 * 打开旧 H5 的 IM
 * @param {*} params
 * params.sourceType 使用源：1=>获客文章 2=>公文包 3=>案例库 4=>表单 5=>宣传册
 * params.sourceId 业务id
 * params.isAutoJump 页面是否有自己的跳转方法
 * params.path 页面路径
 * params.query 页面参数
 * @param {*} cb
 */
export async function navigateToChat(
  { sourceType, sourceId, path, query, isAutoJump = false },
  cb = () => {}
) {
  const grayCompanyIds = [
    '585862873129979904', // 测试环境-康宏
    '639048765872893952' //  生产 深圳吉乐物流网络科技有限公司
  ]
  const { cid: companyId, cardId } = query

  if (isAutoJump && grayCompanyIds.includes(companyId)) {
    cb()
    return
  }

  const infoString = {
    type: sourceType,
    id: sourceId,
    path,
    query,
    cardId,
    companyId
  }

  let res = await saveLongPathMap({
    infoString: JSON.stringify(infoString)
  })

  const id = res.id
  res = await getOneTimeSubscribeAuth({
    reserved: id
  })
  window.location.href = res.authUrl
}

/**
 * @Author: huweijian
 * @Date: 2019-09-26 15:34:50
 * @Desc: 日志相关操作
 */
import { getRandom } from 'utils/tools'
import { getStorage, setStorage } from '../storage'

const systemInfo = window.navigator.userAgent
const typeMsgMap = {
  '1': '请求异常',
  '2': 'feedsSessionId',
  '3': 'log'
}
/**
 * 获取uuid
 * @returns
 */
function getUuid() {
  let uuid = getStorage('logReportUUID')
  if (!uuid) {
    uuid = getRandom(5, 'number') + +new Date()
    setStorage('logReportUUID', uuid)
  }
  return uuid
}

export default function getLogParams(options) {
  const uuid = getUuid()
  const companyId = getStorage('cid')
  const userId = getStorage(`${companyId}_uid`)

  const data = {
    createDate: Date.now(),
    env: process.env.NODE_ENV,
    systemInfo,
    host: window.location.host,
    companyId,
    cardId: null,
    route: window.location.href,
    options: null,
    userInfo: userId ? JSON.stringify({ userId }) : null
  }
  if (!options.content) {
    return null
  }
  data.exception = JSON.stringify({
    uuid,
    content: options.content,
    type: options.type,
    desc: typeMsgMap[options.type] || '未定义'
  })
  return data
}

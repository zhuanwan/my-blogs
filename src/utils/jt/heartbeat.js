/**
 * @Author: huweijian
 * @Date: 2019-09-26 16:21:03
 * @Desc: 心跳
 */
import { effect } from 'store'
import * as types from 'store/mutation-types'
/**
 * 心跳
 */
function sendHeartbeat() {
  effect({
    type: types.SYS_HEARTBEAT_PUT,
    payload: {
      params: {}
    }
  })
}

const heartbeatDelay = 5000
function runHeartbeatSend() {
  // 2021年01月29日 不上报心跳了，和阙点等人商量后，认为政府这边不关心阅读时长。
  // sendHeartbeat()
  // setTimeout(runHeartbeatSend, heartbeatDelay)
}

// runHeartbeatSend()
export default runHeartbeatSend

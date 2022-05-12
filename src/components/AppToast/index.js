// 全局toast

import React from "react"
import { useSelector } from "react-redux"

function AppToast() {
  const sys = useSelector((state) => state.sys)
  // return <ActivityIndicator toast text={sys.LOADTEXT} animating={sys.LOADING} />
  return <Spin tip={sys.LOADTEXT} />
}

export default AppToast

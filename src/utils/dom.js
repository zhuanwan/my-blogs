/**
 * @Author: huweijian
 * @Date: 2019-11-11 15:01:18
 * @Desc:  dom操作方法
 */
export function findParentNode(socure, className, flag, flagVal) {
  if (socure.getAttribute(flag) !== flagVal) {
    return null
  }
  if (
    socure.parentNode &&
    socure.parentNode.getAttribute('class') === className
  ) {
    return socure.parentNode.getAttribute('index') || null
  } else {
    findParentNode(socure.parentNode, className)
  }
}

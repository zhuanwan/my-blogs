const localStorage = window.localStorage

// 保存数据
export function setStorage(name: string, val = "") {
  return localStorage.setItem(name, val)
}

// 获取缓存数据
export function getStorage(name: string) {
  return name ? localStorage.getItem(name) : ""
}

// 删除缓存数据
export function removeStorage(name: string) {
  return localStorage.removeItem(name)
}

// 清空全部缓存数据
export function clearStorage() {
  return localStorage.clear()
}

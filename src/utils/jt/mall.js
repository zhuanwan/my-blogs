export function toDeluxeMall(storeId) {
  // if (!storeId) return alert('缺少storeId')
  window.location.href = `/shop/wap.php?c=store&a=index&store_id=${storeId}`
}

export function toDeluxeMallDetail(storeId, pid, queryParams = {}) {
  // if (!storeId) return alert('缺少storeId')
  // if (!pid) return alert('缺少商品Id')
  const queryString = Object.keys(queryParams).map(key => {
    return `${key}=${encodeURIComponent(queryParams[key])}`
  })
  window.location.href = `/shop/wap.php?c=product&a=index&id=${pid}&store_id=${storeId}&${queryString.join(
    '&'
  )}`
}

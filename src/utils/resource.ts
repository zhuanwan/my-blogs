const reader = new FileReader()
const image = new Image()
image.setAttribute('crossOrigin', '')

/**
 * 转读取本地文件为同步
 * @param file
 * @returns {Promise<*>}
 */
export async function readFile(file: File, returnType = 'dataurl') {
  if (returnType === 'dataurl') {
    reader.readAsDataURL(file)
  }
  if (returnType === 'buffer') {
    reader.readAsArrayBuffer(file)
  }
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.onerror = () => {
      reject(-1)
    }
  })
}

/**
 * 加载图片
 * @param img {string} 图片地址url
 * @returns {Promise<any>}
 */
export function loadImg(img: string) {
  image.src = img
  return new Promise((resolve, reject) => {
    image.onload = () => {
      resolve(image)
    }
    image.onerror = () => {
      reject(-1)
    }
  })
}

/**
 * 转base64文件为file文件
 * @param data {string} base64数据字符串
 * @param filename {string} 文件名
 * @returns {File}
 */
export function dataURLtoFile(data: string, filename = 'file') {
  const arr = data.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const suffix = mime.split('/')[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${filename}.${suffix}`, {
    type: mime,
  })
}

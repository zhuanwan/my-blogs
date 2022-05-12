// 一些常用的判断封装一下

export function checkIdCard(idCard: string) {
  if (idCard.length !== 18) {
    return false
  }
  const list = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const lastList = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]
  let sum = 0
  for (let i = 0; i < list.length; i += 1) {
    if (+idCard[i] >= 0 && +idCard[i] <= 9) {
      sum += +idCard[i] * list[i]
    } else {
      return false
    }
  }
  sum %= 11
  if (lastList[sum] === 10) {
    if (idCard[17].toLowerCase() === 'x') {
      return true
    }
  } else if (lastList[sum] === +idCard[17]) {
    return true
  }

  return false
}

const regex = /^\d+(\.\d{1,2})?$/

// 验证数字是否是整数
export function validateInteger(value: any) {
  if (value === '' || !Number.isInteger(Number(value))) {
    return false
  }
  return true
}

// 验证数字是否在min-max范围内, 保留两位小数
export function validateTwoDecimal(value: any) {
  if (!value || Number.isNaN(value) || !regex.test(value)) {
    return false
  }
  return true
}

// 体温校验
export function temperatureValid(temp: string) {
  const temperature = parseFloat(temp)
  const reg = /^\d+$|^\d*\.\d+$/g
  if (reg.test(temperature + '')) {
    if (temperature < 36 || temperature > 41) {
      return false
    } else if (temperature >= 36 && temperature <= 37.3) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

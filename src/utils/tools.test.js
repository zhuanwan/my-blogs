/**
 * @Author: huweijian
 * @Date: 2019-11-19 14:21:18
 * @Desc:  tools单元测试用例
 */
import assert from 'assert'
import { translateTxImgToWebp } from './tools.js'
// const { message } = new assert.AssertionError({
//   actual: 1,
//   expected: 2,
//   operator: 'strictEqual'
// })

try {
  // console.log('1)验证空字符串返回')
  const srt = translateTxImgToWebp('')
  assert.strictEqual(srt, '')
  console.log('1)验证空字符串返回 ✅')
} catch (err) {
  console.log('1)验证空字符串返回 ❌')
}

try {
  // console.log('2)没有search部分的url')
  const srt = translateTxImgToWebp(
    'https://c-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.thumb.700_0.jpeg'
  )
  // console.log('2)', srt)
  assert.strictEqual(
    srt,
    'https://c-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.thumb.700_0.jpeg?imageMogr2/format/webp'
  )
  console.log('2)没有search部分的url ✅')
} catch (err) {
  console.log('2)没有search部分的url ❌')
}

try {
  // console.log('3)有search部分，没有imageMogr2')
  const srt = translateTxImgToWebp(
    'https://c-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.thumb.700_0.jpeg?x=1'
  )
  assert.strictEqual(
    srt,
    'https://c-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.thumb.700_0.jpeg?imageMogr2/format/webp&x=1'
  )
  console.log('3)有search部分，没有imageMogr2 ✅')
} catch (err) {
  console.log('3)有search部分，没有imageMogr2 ❌')
}

try {
  // console.log('4)有search部分，有imageMogr2, 没有farmat')
  const srt = translateTxImgToWebp(
    'https://c-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.thumb.700_0.jpeg?imageMogr2/cgif/1&x=1'
  )
  assert.strictEqual(
    srt,
    'https://c-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.thumb.700_0.jpeg?imageMogr2/format/webp/cgif/1&x=1'
  )
  console.log('4)有search部分，没有imageMogr2, 没有farmat ✅')
} catch (err) {
  console.log('4)有search部分，没有imageMogr2, 没有farmat ❌')
}

try {
  // console.log('4)有search部分，有imageMogr2, 有farmat')
  const srt = translateTxImgToWebp(
    'https://c-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.thumb.700_0.jpeg?imageMogr2/format/jpg/cgif/1&x=1'
  )
  assert.strictEqual(
    srt,
    'https://c-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.thumb.700_0.jpeg?imageMogr2/format/webp/cgif/1&x=1'
  )
  console.log('5)有search部分，没有imageMogr2, 有farmat ✅')
} catch (err) {
  console.log('5', err)
  console.log('5)有search部分，没有imageMogr2, 有farmat ❌')
}
try {
  // console.log('4)有search部分，有imageMogr2, 有farmat')
  const srt = translateTxImgToWebp(
    'https://c-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.thumb.700_0.jpeg?imageMogr2/cgif/1/format/jpg&x=1'
  )
  assert.strictEqual(
    srt,
    'https://c-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.thumb.700_0.jpeg?imageMogr2/cgif/1/format/webp&x=1'
  )
  console.log('6)有search部分，没有imageMogr2, 有farmat2 ✅')
} catch (err) {
  console.log('6', err)
  console.log('6)有search部分，没有imageMogr2, 有farmat2 ❌')
}

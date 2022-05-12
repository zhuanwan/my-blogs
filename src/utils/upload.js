// import axios from 'axios'
// import COS from 'cos-js-sdk-v5'
// import TcVod from 'vod-js-sdk-v6'
// import config from 'config/index'
// import { createUniqueString } from './tools.js'
// const cosAccount = config.cosAccount
// const host = config.api.host

import { fileUpload } from 'api/sys'

export async function tencentCloud({ files: likeArrayFiles }) {
  const files = Array.from(likeArrayFiles)
  return new Promise((resolve, reject) => {
    const result = []
    const upload = file => {
      let formData = new FormData()
      formData.append('file', file)
      fileUpload(formData)
        .then(res => {
          let fileUrls = res.fileUrls
          try {
            result.push(fileUrls[0])
            if (files.length) {
              upload(files.shift())
              return
            }
            resolve(result)
          } catch (error) {
            reject(error)
          }
        })
        .catch(() => {})
    }
    upload(files.shift())
  })
}
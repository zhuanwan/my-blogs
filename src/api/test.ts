import axios from './service'

// 示例一
export type dataOneT = {
  name: string
  age: number
}

export type dataOneParams = {
  id: string
}
export async function testOneApi(params: dataOneParams) {
  return axios.get<API.Response<dataOneT>>('xxxURL', { params })
}

// 示例二
export type dataTwoT = {
  id: string
  label: string
}

export async function testTwoApi(params: { s: number }) {
  return axios.post<API.Response<API.PagingData<dataTwoT>>>('xxxURL', params)
}

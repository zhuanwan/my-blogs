import axios from './service'

// 示例一
export type UserInfoDataT = {
  name: string
  age: number
}

export async function getUserInfo(params: { xx: string }) {
  return axios.get<API.Response<UserInfoDataT>>('/api/example/testOne', { params })
}

// 示例二
export type PointItemT = {
  name: string
  point_id: number
}

export async function getPointList() {
  return axios.get<API.Response<API.PagingData<PointItemT>>>('/api/example/points-list')
}

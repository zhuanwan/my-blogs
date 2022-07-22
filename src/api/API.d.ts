// eslint-disable-next-line no-unused-vars
declare namespace API {
  export type PageParamT = {
    pageNum: number
    pageSize: number
  }

  export type Response<T = any> = {
    success: boolean // if request is success
    data: T // response data
    code?: number // code for errorType
    message?: string // message display to user
    showType?: number // error display type： 0 silent; 1 message.warn; 2 message.error; 4 notification; 9 page
    traceId?: string // Convenient for back-end Troubleshooting: unique request ID
    host?: string // onvenient for backend Troubleshooting: host of current access server
    msg?: string // message
    exts?: any
  }

  export type PagingData<T = any> = {
    current: number
    pageSize: number
    total: number
    list: T[]
  }

  export type LoginUserInfoT = {
    depParentId: string
    departmentId: string
    departmentName: string
    dptMemberType: string
    memberType: string
    phone: string
    portrait: string
    position: string
    realName: string
    relationId: null
    unitId: string
    unitName: string
    unitType: string
    userId: string
    subtype: 'DISTRICT' | 'DISTRICT_BUSINESS' | 'SUB_DISTRICT' | 'COMMUNITY' | 'GRID'
  }

  export type CurrentUser = {
    access?: 'user' | 'guest' | 'admin'
    userPermissions: string[]
  } & LoginUserInfoT

  export type NoticeIconData = {
    id: string
    key: string
    avatar: string
    title: string
    datetime: string
    type: string
    read?: boolean
    description: string
    clickClose?: boolean
    extra: any
    status: string
  }
}

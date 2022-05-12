import type { RouteObject } from 'react-router-dom'
import NoMatch from '../pages/NoMatch'

// 示例代码
import demo from './demo'

// 个人中心
import admin from './admin'

const routes: RouteObject[] = [
  ...demo,
  ...admin,
  { path: '*', element: <NoMatch /> },
]

export default routes

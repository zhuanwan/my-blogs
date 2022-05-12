// 个人中心
import type { RouteObject } from 'react-router-dom'
import loadable from '@loadable/component'

// 小程序webview表单
const Admin = loadable(() => import('../pages/admin'), {
  fallback: <h1>Loading Admin</h1>,
})




const routes: RouteObject[] = [
  {
    path: '/admin',
    element: <Admin />,
  },

]

export default routes

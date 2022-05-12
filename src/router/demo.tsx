import type { RouteObject } from 'react-router-dom'

// 示例代码
import Demo from '../pages/demo/index'
import Test1 from '../pages/demo/Test1'
import Test2 from '../pages/demo/Test2'
import Test3 from '../pages/demo/Test3'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Demo />,
    children: [
      { index: true, element: <Test1 /> },
      {
        path: '/test1',
        element: <Test1 />,
      },
      {
        path: '/test2',
        element: <Test2 />,
      },
      {
        path: '/test3',
        element: <Test3 />,
      },
    ],
  },
]

export default routes

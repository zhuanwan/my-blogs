import type { RouteObject } from 'react-router-dom'
import NoMatch from '@/pages/NoMatch'
import Main from '@/pages/main'
import MainContent from '@/pages/main/Content'
import Post from '@/pages/post'
import Course from '@/pages/course'
import Activity from '@/pages/activity'

// 个人中心
import admin from './admin'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      { index: true, element: <MainContent /> },
      {
        path: '/post',
        element: <Post />,
      },
      {
        path: '/course',
        element: <Course />,
      },
      {
        path: '/activity',
        element: <Activity />,
      },
    ],
  },
  ...admin,
  { path: '*', element: <NoMatch /> },
]

export default routes

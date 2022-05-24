import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/antd.variable.min.css'
import '@/less/theme.css'
import '@/less/index.less'

const basename = REACT_APP_IS_BUILD ? 'react-h5' : ''

createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider locale={zhCN}>
    <React.StrictMode>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ConfigProvider>
)

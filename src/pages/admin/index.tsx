import { Button } from 'antd'
import { Link, Outlet } from 'react-router-dom'
import Header from './components/header'
function Component() {
  return (
    <div>
      <Header />
      <hr />
      ssss
      <div style={{ height: 30, backgroundColor: '#0f0' }}>
        sdfasdsdfsadfa
      </div>
      <Button type='primary'>HAHA</Button>
      {/* <Outlet /> */}
    </div>
  )
}

export default Component

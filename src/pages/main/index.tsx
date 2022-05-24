import { Outlet } from 'react-router-dom'
import Header from '@/components/header'

function Component() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Component

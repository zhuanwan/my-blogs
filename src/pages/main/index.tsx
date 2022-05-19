import { Link, Outlet } from 'react-router-dom'
import Header from '@/components/header'

function Component() {
  return (
    <div>
      <Header />

      <hr />
      <Outlet />
    </div>
  )
}

export default Component

import { Link, Outlet } from 'react-router-dom'

function Component() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/test1">test1</Link>
          </li>
          <li>
            <Link to="/test2">test2</Link>
          </li>
          <li>
            <Link to="/test3">test3</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  )
}

export default Component

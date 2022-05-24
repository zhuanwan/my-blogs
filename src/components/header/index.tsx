import { useState } from 'react'
// import { Menu } from "antd"
// import { Link } from "react-router-dom"
// import type { MenuProps } from "antd"
import classnames from 'classnames'
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons"
import styles from './index.module.less'

const menu = [
  {
    name: '首页',
    link: '/',
  },
  {
    name: '文章',
    link: '/post',
  },
  {
    name: '课程',
    link: '/course',
  },
  {
    name: '活动',
    link: '/activity',
  },
]
function Component() {
  const [current] = useState('/')

  // const onClick: MenuProps["onClick"] = (e) => {
  //   console.log("click ", e)
  //   setCurrent(e.key)
  // }
  // test

  return (
    <div className={styles['header-box']}>
      <div className={styles.container}>
        <div className={styles.left}>
          <ul className={styles.menu}>
            {menu.map((item) => (
              <li
                key={item.link}
                className={classnames(styles['menu-item'], {
                  active: item.link === current,
                })}
              >
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.right}>登录</div>
      </div>
    </div>
  )
}

export default Component

import { useEffect, useState } from 'react'
import classnames from 'classnames'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './index.module.less'
import { Drawer, Input } from 'antd'
import ThemeSwitch from '../ThemeSwitch'
import { CaretRightOutlined } from '@ant-design/icons'

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
  const location = useLocation()
  const navigate = useNavigate()
  const [current, setCurrent] = useState('/')
  const [userInfo, setUserInfo] = useState<null | {
    userName: string
    userId: string
    avatar: string
  }>(null)

  const [drawVisible, setDrawVisible] = useState(false)

  // 路由切换
  const go = (link: string) => {
    setCurrent(link)
    navigate(link)
  }
  // 登录
  const login = () => {
    setUserInfo({
      userId: '1',
      userName: 'hahaha',
      avatar: 'https://static.oschina.net/uploads/user/508/1017341_50.jpg',
    })
  }

  const onSearch = (v: string) => {
    console.log(v)
  }

  useEffect(() => {
    setCurrent(location.pathname)
  }, [])
  return (
    <>
      <div className={styles['header-box']}>
        <div className={styles['header-box-wrapper']}>
          <div className={styles['header-box-inner']}>
            <ul className={styles['nav']}>
              {menu.map((item) => (
                <li
                  key={item.link}
                  className={classnames(styles['nav-item'], {
                    [styles.active]: item.link === current,
                  })}
                >
                  <span className={styles['nav-item-link']} onClick={() => go(item.link)}>
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
            <div className={styles['search-box']}>
              <Input.Search
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                className={styles['search-input']}
              />
            </div>
            <div className={styles['theme-box']}>
              <ThemeSwitch />
            </div>
            <div className={styles['user-box']}>
              {userInfo ? (
                <div className={styles['logined']} onClick={() => setDrawVisible(true)}>
                  <img
                    src={userInfo.avatar}
                    alt={userInfo.userName}
                    title={userInfo.userName}
                    srcSet=""
                    className={styles['avatar']}
                  />
                  <CaretRightOutlined className={styles['arrow']} />
                </div>
              ) : (
                <span onClick={login} className={styles['login-btn']}>
                  登录
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={() => setDrawVisible(false)}
        visible={drawVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  )
}

export default Component

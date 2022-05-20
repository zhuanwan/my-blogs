import { useEffect, useState } from "react"
import { Menu } from "antd"
import { Link } from "react-router-dom"
import type { MenuProps } from "antd"
import classnames from "classnames"
import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons"
import styles from "./index.module.less"

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
]

const menu = [
  {
    name: "首页",
    link: "/",
  },
  {
    name: "文章",
    link: "/post",
  },
  {
    name: "课程",
    link: "/course",
  },
  {
    name: "活动",
    link: "/activity",
  },
]
function Component() {
  const [current, setCurrent] = useState("/")
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e)
    setCurrent(e.key)
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <ul className={styles.menu}>
            {menu.map((item) => (
              <li
                key={item.link
                }
                className={classnames(styles["menu-item"], {
                  active: item.link === current,
                })
              }
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

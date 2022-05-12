import { Dropdown, Menu, Space } from 'antd'
import { DownOutlined, SmileOutlined } from '@ant-design/icons'
import { ConfigProvider } from 'antd'
import './index.less'
function Component() {

  const changeTheme = (theme: string) => {
    console.log(6666, window.less.modifyVars)
    if (!window.less || !window.less.modifyVars) {
      return
    }

    ConfigProvider.config({
      theme: {
        primaryColor: '#25b864',
      },
    })

    window.less.modifyVars({
      '@header-bg-color': '#f0f'
    }).then((res: any) => {
      console.log(333, res)
    }).catch((res: any) => {
      console.log(4444, res)
    })

    console.log(theme)
  }
  const menu = () => {
    const items = [{
      label: (
        <a onClick={() => changeTheme('dark')}>
          黑色主题
        </a>
      ),
      children: null,
      key: 'dark'
    },
    {
      label: (
        <a onClick={() => changeTheme('white')}>
          白色主题
        </a>
      ),
      children: null,
      key: 'white'
    },
    ]
    return <Menu
      items={items}
    />
  }

  return (
    <div className="admin-header">
      <div className='left'>hahaha</div>
      <div className="right">
        <Dropdown overlay={menu}>
          <a onClick={e => e.preventDefault()}>
            <Space>
              主题
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}

export default Component
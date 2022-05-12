import { Switch } from 'antd'
import { ConfigProvider } from 'antd'
import './index.less'
function Component() {

  // 切换主题
  const changeTheme = (checked: boolean) => {
    ConfigProvider.config({
      theme: {
        primaryColor: checked ? '#234988' : '#1890ff',
      },
    })

    if (checked) {
      document.body.classList.add('dark')
      document.body.classList.remove('bright')
    } else {
      document.body.classList.add('bright')
      document.body.classList.remove('dark')
    }
  }


  return (
    <div className="admin-header">
      <div className='left'>hahaha</div>
      <div className="right">
        <Switch onChange={changeTheme} checkedChildren="暗黑主题" unCheckedChildren="明亮主题" />
      </div>
    </div>
  )
}

export default Component
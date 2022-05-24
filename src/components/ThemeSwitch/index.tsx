import { Switch } from "antd"
import { ConfigProvider } from "antd"
import { useEffect, useState } from "react"
import { getStorage, setStorage } from "@/utils/storage"
import storageKey from "@/utils/storageKey"

function Component() {
  const [theme, setTheme] = useState("1")
  // 切换主题
  const changeTheme = (checked: boolean) => {
    ConfigProvider.config({
      theme: {
        primaryColor: checked ? "#234988" : "#1890ff",
      },
    })

    if (checked) {
      document.body.classList.add("dark")
      document.body.classList.remove("bright")
      setTheme("2")
      setStorage(storageKey.THEME, "2")
    } else {
      document.body.classList.add("bright")
      document.body.classList.remove("dark")
      setTheme("1")
      setStorage(storageKey.THEME, "1")
    }
  }

  useEffect(() => {
    changeTheme(getStorage(storageKey.THEME) === "2")
  }, [])

  return (
    <Switch checked={theme === "2"} onChange={changeTheme} checkedChildren="暗黑主题" unCheckedChildren="明亮主题" />
  )
}

export default Component

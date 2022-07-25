import { getUserInfo } from '@/api'
import { useEffect, useState } from 'react'

function Component() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)

  const fetchUserInfo = async () => {
    const { data } = await getUserInfo({ xx: 'ss' })
    setName(data.data.name)
    setAge(data.data.age)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])
  return (
    <div>
      name:{name}
      <br />
      age: {age}
    </div>
  )
}

export default Component

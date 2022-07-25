import { getPointList, PointItemT } from '@/api'
import { Table } from 'antd'
import { useEffect, useState } from 'react'

function Component() {
  const [list, setList] = useState<PointItemT[]>([])

  const fetchPointList = async () => {
    const { data } = await getPointList()
    setList(data.data.list)
  }

  useEffect(() => {
    fetchPointList()
  }, [])

  const columns = [
    {
      title: '监测点id',
      dataIndex: 'point_id',
    },
    {
      title: '监测点name',
      dataIndex: 'name',
    },
  ]
  return (
    <div>
      <Table columns={columns} dataSource={list} />
    </div>
  )
}

export default Component

import React, { useEffect, useState } from 'react'
import { Button, Form, Input, Radio, Table } from 'antd';
import { MenuItem, routes } from '../router/routes'
import { SearchOutlined } from '@ant-design/icons';
import { useAntdTable } from 'ahooks';
import { useAppDispatch, useAppSelector } from '../hooks'
import { decrement, increment } from '../store/test'
interface Result {
  total: number;
  list: MenuItem;
}
interface TypeHandleList {
  [K: string]: (record: MenuItem) => void
}
// get-datasource
const getTableData = (params?: { current: number, pageSize: number }): Promise<Result> => {
  return new Promise((resolve) => {
    resolve({
      list: routes,
      total: routes?.length
    })
  })
};


const actions = ['编辑', '删除', '查看', '菜单日志']
const columns = [
  {
    title: '菜单名称',
    dataIndex: 'label',
  },
  {
    title: '菜单图标',
    dataIndex: 'icon',
  },
  {
    title: '菜单编号',
    dataIndex: 'key',
  },
  {
    title: '操作',
    width: '400px',
    render: (record: MenuItem) => (
      <>
        {actions.map(item => <Button type='text' className='text-link' onClick={() => handleList(item, record)} key={item}>{item}</Button>)}
      </>
    )
  },
];

// handleList
const handleList = (item: typeof actions[number], record: MenuItem): void => {
  let handleObj: TypeHandleList = {
    '编辑': handleEdit,
    '删除': handleDelete,
    '查看': handleView,
    '菜单日志': handleMenuLog
  };
  handleObj[item](record)
}
const handleEdit = (record: MenuItem) => {
  console.log(record);
}
const handleDelete = (record: MenuItem) => {
  console.log(record);
}
const handleView = (record: MenuItem) => {
  console.log(record);
}
const handleMenuLog = (record: MenuItem) => {
  console.log(record);
}


// row-select
const rowSelection = {
  onChange: (selectKey: React.Key[]) => {
    console.log(selectKey);
  }
};
const Test = () => {
  // test redux-toolkit
  const count = useAppSelector((state) => state.count.value)
  const dispatch = useAppDispatch()
  const [form] = Form.useForm();
  const onFormLayoutChange = (): void => {
    console.log(111);
  }
  useEffect(() => {
    fetch('/api/get').then(res => res.json().then(req => {
      console.log(req);
    }))
  }, [])
  const { tableProps } = useAntdTable(getTableData)

  return (
    <div>
      <Form
        layout={'inline'}
        className="bg-white p-8"
        form={form}
        initialValues={{ menuName: '', menuNum: '' }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="菜单名称" name='menuName'>
          <Input placeholder="菜单名称" />
        </Form.Item>
        <Form.Item label="菜单编号" name='menuName'>
          <Input placeholder="菜单编号" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" icon={<SearchOutlined />} className="rounded-md sm:mt-4 md:mt-0">
            搜索
          </Button>
        </Form.Item>
      </Form>
      <div className='flex justify-end space-x-4 p-4'>
        <Button type="primary" className='rounted-md' onClick={() => dispatch(increment())} >
          新增{count}
        </Button>
        <Button type="primary" className='rounted-md'  >
          批量删除
        </Button>
        <Button type="primary" className='rounted-md'>
          菜单配置
        </Button>
        <Button type="primary" className='rounted-md' >
          查看删除日志
        </Button>
      </div>
      <div>
        <Table rowSelection={rowSelection} columns={columns} rowKey="key" {...tableProps} />
      </div>
    </div>
  )
}

export default Test
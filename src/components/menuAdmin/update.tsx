import React, { useState } from 'react'
import { MenuItem } from '../../router/routes'
import { StepBackwardOutlined, UpOutlined } from '@ant-design/icons'
import { Button, Modal, Form, Input, message } from 'antd';
interface TypeProps {
  updateShow: boolean,
  checkShow: () => void,
  addDispatch: (p: MenuItem[number]) => void
}
const Update = (props: TypeProps) => {
  const [count, setCount] = useState(1)
  const [form] = Form.useForm();
  const { updateShow, checkShow, addDispatch } = props
  const showModal = () => {
  };

  const handleOk = () => {
    const info = form.getFieldsValue(true)
    addDispatch(info)
    message.success('添加成功')
    handleCancel()
  };

  const handleCancel = () => {
    form.resetFields()
    checkShow()
  };
  const handleKeychange = () => {
    const key = form.getFieldsValue().key
    form.setFieldsValue({ name: key })
  }


  return (
    <>
      <Modal title="Basic Modal" visible={updateShow} onOk={handleOk} onCancel={handleCancel}>
        <Form
          layout={'inline'}
          className=""
          form={form}
          initialValues={{ name: '', key: '', label: '', icon: '' }}
        >
          <Form.Item label="菜单名称" name='label' tooltip="为左侧显示菜单" rules={[{ required: true }, { type: 'string', min: 4 }]}>
            <Input placeholder="菜单名称" maxLength={15} />
          </Form.Item>
          <Form.Item label="菜单路径" name='key' tooltip="路由路径" className='mt-3' rules={[{ required: true }, { type: 'string', min: 4 }]}>
            <Input placeholder="菜单路径" onChange={handleKeychange} />
          </Form.Item>
          <Form.Item label="菜单图标" tooltip="菜单图标" className='mt-3 ml-2' >
            <span className='border-2 border-rose-600 border-solid  inline  p-2'><StepBackwardOutlined /></span>
            <span className='border-2 border-rose-600 border-solid  inline  p-2'><UpOutlined /></span>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default Update
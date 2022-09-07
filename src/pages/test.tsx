import React, { useState } from 'react'
import { Button, Form, Input, Radio } from 'antd';
const Test = () => {
  const [form] = Form.useForm();
  const onFormLayoutChange = (): void => {
    console.log(111);

  }
  return (
    <div>
      <Form
        layout={'inline'}
        form={form}
        initialValues={{ menuName: '', menuNum: '' }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="菜单名称" name='menuName'>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item label="菜单编号" name='menuName'>
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Test
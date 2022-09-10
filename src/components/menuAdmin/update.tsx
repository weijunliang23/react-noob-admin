import React, { useState } from 'react'
import { MenuItem } from '../../router/routes'
import { Button, Modal } from 'antd';
interface TypeProps {
  updateShow: boolean,
  checkShow: () => void,
  addDispatch: (p: MenuItem[number]) => void
}
const Update = (props: TypeProps) => {
  const [count, setCount] = useState(1)
  const { updateShow, checkShow, addDispatch } = props
  const showModal = () => {
  };

  const handleOk = () => {
    // addDispatch()
  };

  const handleCancel = () => {
    checkShow()
  };
  return (
    <>
      <Modal title="Basic Modal" visible={updateShow} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <Button onClick={() => setCount(e => e + 1)}>{count}</Button>
      </Modal>
    </>
  )
}

export default Update
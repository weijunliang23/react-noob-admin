import { Button, Modal } from 'antd';
import React, { useState, useRef } from 'react';
import Navbar from '../components/dingdingAdmin/navbar'
import Siderbar from '../components/dingdingAdmin/siderbar'
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';

const dingdingAdmin = () => {
  const [open, setOpen] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
  const draggleRef = useRef<HTMLDivElement>(null);
  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  const handleOk = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };

  const handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <div id='dingding'>
      {!open ?
        <Button onClick={() => setOpen(true)}>点击开启钉钉</Button> : <></>
      }
      <Modal
        className='h-100'
        title={
          <div
            style={{
              width: '100%',
              cursor: 'move',
            }}
            onMouseOver={() => {
              if (disabled) {
                setDisabled(false);
              }
            }}
            onMouseOut={() => {
              setDisabled(true);
            }}

            onFocus={() => { }}
            onBlur={() => { }}
          >
            <Navbar setOpen={setOpen}></Navbar>
          </div>
        }
        visible={open}
        width={"100%"}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        maskClosable={false}
        modalRender={modal => (
          <Draggable
            disabled={disabled}
            bounds={bounds}
            onStart={(event, uiData) => onStart(event, uiData)}
          >
            <div ref={draggleRef}>{modal}</div>
          </Draggable>
        )}
      >
        <Siderbar></Siderbar>
      </Modal>

    </div>
  )
}

export default dingdingAdmin
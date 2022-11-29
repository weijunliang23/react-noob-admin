import { Input } from 'antd'
import type { Dispatch, SetStateAction } from 'react';
import React from 'react'
import { LineOutlined, MinusSquareOutlined, CloseOutlined } from '@ant-design/icons'
const { Search } = Input;
interface PropsType {
  setOpen: Dispatch<SetStateAction<boolean>>
}
const navbar = (props: PropsType) => {
  const onSearch = (value: string) => console.log(value);
  return (
    <div id="container">
      <div className='h-9 bg-dblue flex justify-between'>
        <div className='ml-5  w-9 h-7 text-xs bg-blue-500 text-white rounded-md text-center leading-7'>
          贤坤
        </div>
        <Search placeholder="搜索(Ctrl + Shift + F)" className='w-2/5 my-px bg-gray-50 ring-opacity-0' onSearch={onSearch} />
        <div className='flex item-center space-x-4 mr-2'>
          <LineOutlined style={{ color: '#d9e6fd', fontSize: '16px', marginTop: '8px' }} />
          <MinusSquareOutlined style={{ color: '#d9e6fd', fontSize: '16px', marginTop: '8px' }} />
          <CloseOutlined style={{ color: '#d9e6fd', fontSize: '16px', marginTop: '8px' }} onClick={() => props.setOpen(false)} />
        </div>
      </div>
    </div>
  )
}

export default navbar
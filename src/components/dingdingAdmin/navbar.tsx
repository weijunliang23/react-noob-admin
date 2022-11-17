import { Input } from 'antd'
import React from 'react'
import { LineOutlined, MinusSquareOutlined, CloseOutlined } from '@ant-design/icons'
const { Search } = Input;
const navbar = () => {
  const onSearch = (value: string) => console.log(value);
  return (
    <div id="container">
      <div className='h-9 bg-dblue flex justify-between'>
        <div className='ml-5 w-11 h-9 bg-blue-500 text-white rounded-md text-center leading-9'>
          贤坤
        </div>
        <Search placeholder="搜索(Ctrl + Shift + F)" className='w-2/5 my-px' onSearch={onSearch} />
        <div className='flex item-center space-x-4 mr-2'>
          <LineOutlined style={{ color: '#d9e6fd', fontSize: '16px', marginTop: '8px' }} />
          <MinusSquareOutlined style={{ color: '#d9e6fd', fontSize: '16px', marginTop: '8px' }} />
          <CloseOutlined style={{ color: '#d9e6fd', fontSize: '16px', marginTop: '8px' }} />
        </div>
      </div>
    </div>
  )
}

export default navbar
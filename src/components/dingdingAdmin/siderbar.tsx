import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { SiderbarFeatureList } from '../../utils/dingdingCommon';

const siderbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div className='flex border-blue-200 border-solid border-2'>
      <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={SiderbarFeatureList} />
      <article className='w-52'>2222</article>
      <main className='flex-1 bg-black'>1111</main>
    </div>
  )
}

export default siderbar
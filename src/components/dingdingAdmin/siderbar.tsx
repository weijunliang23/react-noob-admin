import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Info from './info/info';
import InfoMain from "./info/infoMain";
import React, { ReactNode, useEffect, useState } from 'react';
import { SiderbarFeatureList } from '../../utils/dingdingCommon';

const siderbar = () => {
  const [current, setCurrent] = useState('1');
  const [template, setTemplate] = useState(Info);
  const [templateMain, setTemplateMain] = useState(InfoMain);
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  useEffect(() => {
    switch (current) {
      case '1':
        setTemplate(Info)
        setTemplateMain(InfoMain)
        break;
      default:
        setTemplate(() => (<>1</>))
        setTemplateMain(() => (<>1</>))
        break;
    }
  }, [current])

  return (
    // <div className='flex border-blue-200 border-solid border-2'>
    <div className='flex '>
      <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={SiderbarFeatureList} />
      <article className='w-52 bg-white'>
        {template}
      </article>
      <main className='flex-1 bg-dgray'>
        {templateMain}
      </main>
    </div>
  )
}

export default siderbar
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Info from './info/info';
import InfoMain from "./info/infoMain";
import React, { ReactNode, useEffect, useState } from 'react';
import { SiderbarFeatureList } from '../../utils/dingdingCommon';

const siderbar = () => {
  const [current, setCurrent] = useState('1');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<API1.DataType[]>([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  useEffect(() => {
    loadMoreData();
  }, [])


  return (
    // <div className='flex border-blue-200 border-solid border-2'>
    <div className='flex'>
      <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={SiderbarFeatureList} />
      <article className=' flex-1 bg-white'>
        {current === '1' ? <Info loading={loading} data={data} loadMoreData={loadMoreData}></Info> : <>1</>}
      </article>
    </div>
  )
}

export default siderbar
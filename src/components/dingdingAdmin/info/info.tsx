import React, { useEffect, useRef, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd';
import InfoMain from "./infoMain";
import InfiniteScroll from 'react-infinite-scroll-component';

interface PropsInteface {
  loading?: boolean
  data: API1.DataType[]
  loadMoreData(): void
}

const Info = (props: PropsInteface) => {
  const { data, loading, loadMoreData } = props;
  const [source, setSource] = useState(data[0]);
  useEffect(() => {
    console.log(data[0]);
    setSource(data[0])
  }, []
  )

  const handleClickList = (item: API1.DataType) => {
    setSource(item)
  }
  return (
    <div className='flex'>
      <div
        id="scrollableDiv"
        style={{
          border: '1px solid rgba(140, 140, 140, 0.35)',
          overflowX: 'visible'
        }}
        className="overflow-y-auto py-0 px-4 h-70vh w-52"
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 50}
          loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
          className='overflow-x-hidden'
        >
          <div className='w-52'>
            {data.map((item, key) => (<div key={key} className='flex item-center py-3' onClick={() => handleClickList(item)}>
              <img src={item.picture.large} alt="" className='w-10 h-10 rounded-md' />
              <div className='pl-2'>
                <div className='text-black font-semibold'>{item.name.last}</div>
                <p className='truncate'>{item.email.slice(13)}...</p>
              </div>
            </div>))}
          </div>

        </InfiniteScroll>
      </div>
      <div className='flex-1'>
        <InfoMain item={source}></InfoMain>
      </div>
    </div>
  );
};

export default Info;
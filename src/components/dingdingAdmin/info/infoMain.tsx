import React from 'react'

interface PropsInfoMian {
  item?: API1.DataType
}

const infoMain = (props: PropsInfoMian) => {
  const { item } = props;
  console.log(item);

  return (
    <div>
      <div className=' h-15 flex items-center py-2 pl-2 justify-between border-slate-700 border-solid border'>
        <div>
          <img src={item?.picture.large} alt="" className='w-10 h-10 rounded-md' />
          <span className='pl-3'>{item?.name.last}</span>
        </div>
        <div className='space-x-5 mr-6'>
          <span className="tt tt-lishi"></span>
          <span className="tt tt-shipin"></span>
          <span className="tt tt-fenxiang"></span>
          <span className="tt tt-wode"></span>
        </div>
      </div>
    </div>
  )
}

export default infoMain
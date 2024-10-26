import React from 'react';

const Title = ({text1, text2}) => {
  return (
    <div className='flex items-center gap-2 justify-center '>
        <p className='font-medium text-3xl text-gray-700 '><span className='text-gray-500'>{text1}</span> {text2}</p>
        <hr className='w-14 h-[2.5px] bg-black '/>
        </div>
  );
};

export default Title;
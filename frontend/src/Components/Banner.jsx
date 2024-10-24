import React from 'react';
import { assets } from '../../public/assets/frontend_assets/assets';

const Banner = () => {
  return (
    <div className='border my-8 border-gray-500 w-full flex justify-between items-center'>
      <div className='w-1/2 flex justify-center items-center'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
        <hr className='w-14 h-[2.5px] bg-black '/>
        <p className='font-medium text-[16px] text-gray-700'>OUR BESTSELLER</p>
        </div>
      <span className='font-prata text-5xl text-gray-800'>Latest Arrivals</span>
      <div className='flex items-center gap-2'>
        <p className='font-medium text-[16px] text-gray-700'>SHOP NOW</p>
        <hr className='w-14 h-[2.5px] bg-black '/>
        </div>
      </div>
      
    </div>
    <div className='w-1/2 '>
        <img src={assets.hero_img} alt="Banner image" />
      </div>
    </div>
  );
};

export default Banner;
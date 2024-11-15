import React from 'react';
import { assets } from '../../public/assets/frontend_assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../public/assets/dress (1).jpg'
import image2 from '../../public/assets/dress (2).jpg'
import image3 from '../../public/assets/dress (3).jpg'
import image4 from '../../public/assets/dress (4).jpg'
// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination } from 'swiper/modules';



const Banner = () => {
  return (
    <div className='border my-8 border-gray-500 w-full flex flex-col md:flex-row justify-between items-center'>
      <div className='w-full md:w-1/2 py-10 md:py-0 flex justify-center items-center'>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
        <hr className='w-14 h-[2.5px] bg-black '/>
        <p className='font-medium text-[16px] text-gray-700'>OUR BESTSELLER</p>
        </div>
      <span className='font-prata text-3xl md:text-5xl text-gray-800'>Latest Arrivals</span>
      <div className='flex items-center gap-2'>
        <p className='font-medium text-[16px] text-gray-700'>SHOP NOW</p>
        <hr className='w-14 h-[2.5px] bg-black '/>
        </div>
      </div>
      
    </div>
    <div className='w-full md:w-1/2 h-[400px]'> {/* Add height */}
  <Swiper
    direction={'vertical'}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 3000, // Time in milliseconds between slides (adjust as needed)
      disableOnInteraction: false, // Keeps autoplay running even after user interaction
    }}
    modules={[Pagination, Autoplay]}
    className="mySwiper"
    style={{ height: '100%' }} // Ensure it fills its container
  >
    <SwiperSlide>
      <img className='h-full w-full object-cover' src={assets.hero_img} alt="Banner 1" />
    </SwiperSlide>
    <SwiperSlide>
      <img className='h-full w-full object-cover' src={image2} alt="Banner 2" />
    </SwiperSlide>
    <SwiperSlide>
      <img className='h-full w-full object-cover' src={image3} alt="Banner 3" />
    </SwiperSlide>
    <SwiperSlide>
      <img className='h-full w-full object-cover' src={image4} alt="Banner 4" />
    </SwiperSlide>
    <SwiperSlide>
      <img className='h-full w-full object-cover' src={image1} alt="Banner 1" />
    </SwiperSlide>
  </Swiper>
</div>

    </div>
  );
};

export default Banner;
import React from 'react';
import { assets } from '../../../public/assets/frontend_assets/assets';

const About = () => {
  return (
    <div className='my-8'>
      <div className='flex items-center gap-2 justify-center '>
        <p className='font-medium text-3xl text-gray-700 '><span className='text-gray-500'>ABOUT</span> US</p>
        <hr className='w-14 h-[2.5px] bg-black '/>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center my-5 gap-10'>
          <img src={assets.about_img} alt="" className='w-1/3 rounded-sm'/>
          <div className='w-2/3 flex flex-col justify-center text-gray-500  text-[18px]'>
          <p>
          Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes. <br /> <br />

Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
            <h4 className='font-medium text-xl my-5 text-gray-700'>Our Mission</h4>
            
            <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
        </div>
        <div className='flex items-center gap-2 mt-10 '>
        <p className='font-medium text-2xl text-gray-700 '><span className='text-gray-500'>WHY</span>CHOOSE US</p>
        <hr className='w-14 h-[2.5px] bg-black '/>
        </div>
        <div className='my-6 py-10 px-10 flex flex-col md:flex-row border items-center justify-between'>
          <div>
            <h3 className='font-bold mb-10'>Quality Assurance:</h3>
            <p className='text-gray-600 font-thin text-[16px]'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className='border-x px-10'>
            <h3 className='font-bold mb-10'>Convenience:</h3>
            <p className='text-gray-600 font-thin text-[16px]'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className='pl-10'>
            <h3 className='font-bold mb-10'>Exceptional Customer Service:</h3>
            <p className='text-gray-600 font-thin text-[16px]'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
          </div>
        </div>
    </div>
  );
};

export default About;
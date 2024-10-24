import React from 'react';
import { assets } from '../../../public/assets/frontend_assets/assets';

const Contact = () => {
  return (
    <div className='my-8'>
      <div className='flex items-center gap-2 justify-center '>
        <p className='font-medium text-3xl text-gray-700 '><span className='text-gray-500'>CONTACT</span> US</p>
        <hr className='w-14 h-[2.5px] bg-black '/>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center my-5 gap-10'>
          <img src={assets.contact_img} alt="" className='w-1/2 rounded-lg px-10'/>
          <div className='w-1/2 flex flex-col justify-center text-gray-500 font-medium text-[18px]'>
            <h4 className='font-medium text-xl my-5 text-gray-700'>Our Store</h4>
            <p className='my-5 '>54709 Willms Station <br />
            Suite 350, Washington, USA</p>
            <a href="tel:+8801937392767">+8801937392767</a>
            <a href="mailto:dinu.webdev@gmail.com">Email: admin@foreverfir.com</a>
            <h4 className='font-medium text-xl my-5 text-gray-700'>Careers at Forever</h4>
            <p>Learn more about our teams and job openings.</p>
            <button className='px-8 py-4 border border-black w-fit my-3'>Explore Jobs</button>
          </div>
          
        </div>
    </div>
  );
};

export default Contact;
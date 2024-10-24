import React from 'react';
import { assets } from '../../public/assets/frontend_assets/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between space-y-3'>
      <div className='flex flex-col gap-5 w-full md:w-2/5'>
        <img src={assets.logo} alt="" className='w-36' />
        <p className='text-[15px] text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum laboriosam optio a perferendis assumenda quidem veniam facilis fugit quisquam sed iusto unde nemo, ipsa praesentium temporibus quam quaerat harum. Assumenda reprehenderit iste officiis atque nisi accusamus a! Nobis id illum sunt a expedita, placeat quos magni dolorem ullam, dolor ea?</p>
      </div>
      <div className='space-y-4'>
        <h3 className='text-xl font-medium'>COMPANY </h3>
        <ul className='flex flex-col gap-3 text-gray-500'>
         
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>About</Link>
          <Link to={'/'}>Delivery</Link>
          <Link to={'/'}>Privacy</Link>
        </ul>
      </div>
      <div className='space-y-4'>
        <h3 className='text-xl font-medium'>GET IN TOUCH</h3>
        <ul className='flex flex-col gap-3 text-gray-500 text-[16px]'>
        <a href="tel:+8801937392767">+8801937392767</a>
        <a href="mailto:dinu.webdev@gmail.com">dinu.webdev@gmail.com</a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
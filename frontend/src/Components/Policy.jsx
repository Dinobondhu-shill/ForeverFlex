import React from 'react';
import { assets } from '../../public/assets/frontend_assets/assets';

const Policy = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center py-3 md:py-10'>
      <div className='flex flex-col gap-3 items-center justify-center'>
<img src={assets.quality_icon} alt="" />
<h2>Easy Exchange Policy</h2>
<p>We offer hassle free exchange policy</p>
      </div>
      <div className='flex flex-col gap-3 items-center justify-center'>
<img src={assets.exchange_icon} alt="" />
<h2>Easy Exchange Policy</h2>
<p>We offer hassle free exchange policy</p>
      </div>
      <div className='flex flex-col gap-3 items-center justify-center'>
<img src={assets.support_img} alt="" />
<h2>Easy Exchange Policy</h2>
<p>We offer hassle free exchange policy</p>
      </div>
    </div>
  );
};

export default Policy;
import React from 'react';
import Title from '../../Components/Title';

const PlaceOrder = () => {
  return (
    <div className='flex gap-10 my-10'>
      {/* form data  */}
      <div className='py-5 text-xl flex flex-col items-start'>
        <Title text1={'DELIVERY'} text2={"INFORMATION"} />
        <div className=' my-5 md:my-10'>
          <form className='flex flex-col gap-3'>
            <div className='flex gap-4'>
              <input className='  border rounded-md px-2 py-1' type="text" placeholder='First Name' name='firstName' />
              <input className='  border rounded-md px-2 py-1' type="text" placeholder='Last Name' name='lastName'/>
            </div>
            <input className='  border rounded-md px-2 py-1' type="text" placeholder='Email' name='email'/>
            <input className='  border rounded-md px-2 py-1' type="text" placeholder='Street' name='street'/>
            <div className='flex gap-4'>
              <input className='  border rounded-md px-2 py-1' type="text" placeholder='City' name='city' />
              <input className='  border rounded-md px-2 py-1' type="text" placeholder='State' name='state'/>
            </div>
            <div className='flex gap-4'>
              <input className='  border rounded-md px-2 py-1' type="text" placeholder='Zipcode' name='zipcode' />
              <input className='  border rounded-md px-2 py-1' type="text" placeholder='Country' name='country'/>
            </div>
            <input className=' border rounded-md px-2 py-1' type="number" placeholder='Phone' name='phone'/>
          </form>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
};

export default PlaceOrder;
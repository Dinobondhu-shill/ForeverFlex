import React, { useContext, useState } from 'react';
import Title from '../../Components/Title';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext';
import { assets } from '../../../public/assets/frontend_assets/assets';

const PlaceOrder = () => {
  const {total, delivery_fee, currency} = useContext(ProductContext)
  const [active, setActive] = useState([])
  console.log(active)

  const handleActiveMethod = (name)=>{
    if(name ==='stripe'){
      setActive({
        name:'stripe',
      })
    }
    else if(name==='cash'){
      setActive({
        name:'cash'
      })
    }
  }
  return (
    <div className='flex flex-col md:flex-row gap-10 my-10 items-center'>
      {/* form data  */}
      <div className='py-5 text-xl flex flex-col items-start'>
        <Title text1={'DELIVERY'} text2={"INFORMATION"} />
        <div className=' my-5 md:my-10'>
          <form className='flex flex-col gap-3 border-gray-600'>
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
      {/* cart total */}
      <div className='w-full'>
      <div className="flex justify-start my-8 text-xl"><Title text1={"CART"} text2={"TOTAL"} /></div>
    <div className="space-y-1">
      <div className="flex justify-between border-b border-black py-1">
        <p>Subtotal</p>
        <p>{currency}{total}.00</p>
      </div>
      <div className="flex justify-between border-b-2 border-black py-1">
        <p>Delivery Fee</p>
        <p>{currency}{delivery_fee}.00</p>
      </div>
      <div className="flex justify-between font-bold">
        <p>Total</p>
        <p>{total+delivery_fee}.00</p>
      </div>
      <div className='flex gap-4'>
        <div onClick={()=> handleActiveMethod('stripe')} className='flex border p-2 w-fit items-center gap-3 cursor-pointer'>
        <span className={`w-5 h-5 rounded-full border ${active.name === 'stripe' ? 'bg-green-600' : ''}`}></span>
          <img src={assets.stripe_logo} alt="" />
        </div>
        <div onClick={()=> handleActiveMethod('cash')} className='flex border text-gray-400 p-2 w-fit items-center gap-3 cursor-pointer'>
        <span className={`w-5 h-5 rounded-full border ${active.name === 'cash' ? 'bg-green-600' : ''}`}></span>
          <h4>CASH ON DELIVERY</h4>
        </div>
      </div>
      <div className="flex justify-end">
      <Link to={'/place-order'} className="border bg-black text-white py-3 px-8 my-5">Place Order</Link>
      </div>
    </div>
    </div>
    </div>
  );
};

export default PlaceOrder;
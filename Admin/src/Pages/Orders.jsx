import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BackendUrl } from '../Layout/Root';
import { toast } from 'react-toastify';
import percel from '../../public/parcel_icon.svg'

const Orders = () => {

const token = localStorage.getItem("token");
const [data, setData] = useState([]);
console.log(token)

const fetchOrders =async (token)=>{
 try {
  const res = await  axios.post(BackendUrl + "api/order/all-order",{}, {headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },})
  console.log(res)
  if(res.data.success){
    setData(res.data.orderData)
  }
 } catch (error) {
  console.log(error)
  toast.error(error.message)
 }
  
}

useEffect(()=>{
  fetchOrders(token)
},[token])

console.log(data)
  return (
    <div className='flex flex-col gap-5 my-5 md:my-10 w-full text-[15px]'>
      <h2 className='text-gray-400 text-2xl'>Order Page</h2>
      <div className='flex flex-col gap-5'>
      {
        data.map((item , index)=>(
          <div key={index} className='border-2 py-5 px-3 gap-4 flex justify-between items-center'>
            <img className=' h-12' src={percel} alt="" />
            {/* product name and address */}
            <div className='flex-[4] flex flex-col gap-2 ' >
              <div>
                {
                  item.items.map((product, index) =>(
                    <h2 key={product._id}> {index+1 + ': '+ product.name}</h2> 
                  ))
                }
              </div>
              <div className=''>
                <h2 className='font-medium'>{item.address.firstName +' ' + item.address.lastName}</h2>
                </div>
              <div className='flex flex-col'>
                <h5>{item.address.street},</h5>
                <div>{item.address.city + ',' + item.address.state + ',' + item.address.country + ',' +  item.address.zipcode}</div>
              </div>
            </div>
            <div className='flex-[2] flex flex-col gap-3'>
              <div>Item : {item.items.length}</div>
              <div>
                <p>Method :{item.paymentMethod} </p>
                <p>Payment :{item.payment === false ? 'Pending':"Done"}</p>
                <p>Date : {new Date(item.date).toLocaleDateString()}</p>
              </div>
            </div>
            <div className='flex-[1]'>${item.amount}</div>
            <div className='flex-[1]'></div>
            <div className='flex-[1] '>update</div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Orders;
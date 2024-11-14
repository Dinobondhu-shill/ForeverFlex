import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BackendUrl } from '../Layout/Root';
import { toast } from 'react-toastify';

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
    <div className='flex flex-col gap-5 my-5 md:my-10'>
      <h2 className='text-gray-400 text-2xl'>Order Page</h2>
      {
        data.map((item , index)=>{
          <div key={index}>
            
          </div>
        })
      }
    </div>
  );
};

export default Orders;
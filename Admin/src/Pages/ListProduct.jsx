import React, { useEffect, useState } from 'react';
import { BackendUrl } from '../Layout/Root';
import axios from 'axios';

const ListProduct = () => {
const [products, setProducts] = useState([])

const fetchedData = async () =>{
  await axios.get(BackendUrl + "api/product/list")
  .then(res => {
    console.log(res.data)
    setProducts(res.data.products)
  })
}
useEffect(()=>{
  fetchedData();
}, [])

  return (
    <div className='mt-10 w-full '>
      <h2 className='text-gray-500'>All Product List</h2>
      <div className='flex justify-between items-center font-bold bg-gray-100 w-full px-3 py-1 my-2 border'>
        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p>Action</p>
      </div>
    </div>
  );
};

export default ListProduct;
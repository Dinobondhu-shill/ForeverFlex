import React, { useEffect, useState } from 'react';
import { BackendUrl } from '../Layout/Root';
import axios from 'axios';
import SingleProduct from '../Components/SingleProduct';

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
      <div className="hidden md:flex">
  <div className="flex-1 flex items-center">
    <b>Image</b>
  </div>
  <div className="flex-[3] flex">
    <b>Name</b>
  </div>
  <div className="flex-1 flex ">
    <b>Price</b>
  </div>
  <div className="flex-1 flex ">
    <b>Category</b>
  </div>
  <div className="flex-1 flex items-center justify-center">
    <b>Action</b>
  </div>
</div>
      

{
  products?.map((product) => (
    <SingleProduct key={product._id} product={product} />
  ))
}
    </div>
  );
};

export default ListProduct;
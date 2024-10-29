import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext';

const ProductDetails = () => {
const {productId} = useParams();
const {products, currency} = useContext(ProductContext);
const [product, setProduct] = useState(null);
const [photo, setPhoto] = useState(null);
console.log(product)

const fatchedProductData = async()=>{
 const selectedProduct = products.find(item => item._id== productId)
 if(selectedProduct){
  setProduct(selectedProduct)
 }
}
useEffect(()=>{
fatchedProductData()
},[products, productId]);

useEffect(()=>{
  setPhoto(product?.image[0])
},[product])

  return (
    <div className='flex flex-col md:flex-row gap-10 my-5 md:my-10 w-full'>
      <div className='flex flex-col-reverse md:flex-row gap-6 w-full md:w-1/2'>
        <div className='flex flex-row md:flex-col gap-3 w-1/5'>
          {
            product?.image.map((item, index) => <div key={index}>
              <div onClick={()=> setPhoto(item)}>
              <img src={item} alt="" />
              </div>
            </div>)
          }
        </div>
        <div className='h-full'>
          <img src={photo}  className='object-cover'/>
        </div>
      </div>
      <div className='w-full md:w-1/2'>
          <h2 className='text-2xl font-medium'>{product?.name}</h2>
          <p className='text-2xl font-medium my-8'>{currency}{product?.price}</p>
          <p className='w-3/4 text-gray-500 mb-10'>{product?.description}</p>
          <div>
            <h3 className='text-[18px]'>Select Size</h3>
          <div className='flex gap-3 my-4'>
            {
              product?.sizes?.map((item, index)=> <p key={index} className='px-4 py-2 border-[1px] border-gray-500 bg-gray-200'>{item}</p>)
            }
          </div>
          </div>
          <button className='bg-black text-white px-8 py-2 mt-3 mb-8'>Add To Cart</button>
          <hr />
          <div className='text-[15px] space-y-[2px] mt-2 text-gray-400'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>
            Easy return and exchange policy within 7 days.</p>
          </div>
      </div>
    </div>
  );
};

export default ProductDetails;
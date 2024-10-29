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
    <div className='flex flex-col md:flex-row gap-10 mt-5 md:mt-10 w-full'>
      <div className='flex flex-col-reverse md:flex-row gap-5 w-full md:w-1/2'>
        <div className='flex flex-row md:flex-col gap-5 w-1/5'>
          {
            product?.image.map((item, index) => <div key={index}>
              <img src={item} alt="" />
            </div>)
          }
        </div>
        <div>
          <img src={photo} alt="" />
        </div>
      </div>
      <div className='w-full md:w-1/2'>
          <h2 className='text-2xl font-medium'>{product?.name}</h2>
          <p className='text-2xl font-medium my-8'>{currency}{product?.price}</p>
          <p>{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
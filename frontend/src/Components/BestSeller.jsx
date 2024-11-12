import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ProductContext } from '../Context/ProductContext';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const {products} = useContext(ProductContext)
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(()=>{
const bestProduct = products.filter((item)=>item.bestSeller)
setBestSeller(bestProduct.slice(0,5))
  },[products]);
  return (
    <div className='py-4 md:py-8'>
     <Title text1={'BEST'} text2={'SELLER'} />
        <p className='text-center font-normal text-[16px] py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cum, molestias sit minima ab sed.</p>

        {/* render bestseller collection */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8'>
        {
          bestSeller.map((item, index)=>(
            <ProductItem key={index} item={item} />
          ))        }
        </div>
        
    </div>
  );
};

export default BestSeller;
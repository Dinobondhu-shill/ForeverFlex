import React, { useContext } from 'react';
import Title from './Title';
import { ProductContext } from '../Context/ProductContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const {products} = useContext(ProductContext);
  console.log(products)
  return (
    <div className='py-4 md:py-6'>
     <Title text1={'LATEST'} text2={'COLLECTIONS'} />
      <p className='text-center  text-[16px] py-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cum, molestias sit minima ab sed.</p>
      <div>
        <ProductItem />
      </div>
    </div>
  );
};

export default LatestCollection;
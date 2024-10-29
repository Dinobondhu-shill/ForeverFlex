import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../../Context/ProductContext';
import ProductItem from '../../Components/ProductItem';

const RelatedProducts = ({category}) => {
 const {products} = useContext(ProductContext)
 const [product, setProduct] = useState([]);
const fetchRelatedProduct = async ()=>{
  const relatedProducts = products.filter(item => item.category === category).slice(0,5);
  if(relatedProducts){
   setProduct(relatedProducts)
  }
}
useEffect(()=>{
  fetchRelatedProduct();
},[category, products])
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5 '>
      {
        product?.map((item, index)=> <ProductItem key={index} item={item}></ProductItem>)
      }
    </div>
  );
};

export default RelatedProducts;
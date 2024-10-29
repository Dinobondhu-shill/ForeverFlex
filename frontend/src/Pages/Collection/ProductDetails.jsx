import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext';

const ProductDetails = () => {
const {productId} = useParams();
const {products} = useContext(ProductContext);


  return (
    <div>
      
    </div>
  );
};

export default ProductDetails;
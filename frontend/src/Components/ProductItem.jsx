import  { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';



const ProductItem = ({item}) => {
  const {currency} = useContext(ProductContext)
  const {name, price, _id, imagesUrl, description} = item
  
  return (
    <Link to={`/product/${_id}`} className='text-gray-700 cursor-pointer'>
     <div className='overflow-hidden'>
    <img className='hover:scale-110 transition ease-in-out ' src={imagesUrl[0]} alt="" />
     </div>
     <div className='spacey-1'>
      <h2 className='text-[18px] text-black pt-3'>{name}</h2>
      <p>Price: {currency}{price}</p>
     </div>
    </Link>
  );
};

export default ProductItem;
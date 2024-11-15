import  { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { Link } from 'react-router-dom';



const ProductItem = ({item}) => {
  const {currency} = useContext(ProductContext)
  const {name, price, _id, imagesUrl, description} = item
  
  return (
    <Link to={`/product/${_id}`} className='text-gray-700 cursor-pointer border overflow-hidden shadow-md p-3'>
     <div className='overflow-hidden'>
    <img className='hover:scale-110 transition ease-in-out rounded-sm ' src={imagesUrl[0]} alt="" />
     </div>
     <div className='spacey-2'>
      <h2 className='text-[15px] font-light font-prata text-gray-600 pt-3'>{name}</h2>
      <p className='text-gray-500 rounded-xl mt-2 bg-gray-100 px-2 py-1 w-fit '>Price: {currency}{price}</p>
     </div>
    </Link>
  );
};

export default ProductItem;
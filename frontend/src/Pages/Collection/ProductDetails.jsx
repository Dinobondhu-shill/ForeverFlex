import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext';
import Title from '../../Components/Title';
import RelatedProducts from './RelatedProducts';

const ProductDetails = () => {
const {productId} = useParams();
const {products, currency, handleAddToCart} = useContext(ProductContext);
const [product, setProduct] = useState(null);
const [photo, setPhoto] = useState(null);
const [size, setSize] = useState(null);


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
    <div>
      <div className='flex flex-col md:flex-row gap-10 my-5 md:my-10 w-full'>
      <div className='flex flex-col-reverse md:flex-row gap-6 w-full md:w-1/2'>
        <div className='flex flex-row md:flex-col gap-3 md:w-1/5'>
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
              product?.sizes?.map((item, index)=> <p onClick={()=>setSize(item)} key={index} className={`px-4 py-2 border-[1px] border-gray-400 bg-gray-200 cursor-pointer ${size===item? 'border-red-300 border-[1.8px] bg-transparent': null }`}>{item}</p>)
            }
          </div>
          </div>
          <button onClick={()=> handleAddToCart(product?._id, size)} className='bg-black text-white px-8 py-2 mt-3 mb-8'>Add To Cart</button>
          <hr />
          <div className='text-[15px] space-y-[2px] mt-2 text-gray-400'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>
            Easy return and exchange policy within 7 days.</p>
          </div>
      </div>
    </div>
    {/* Tabs data */}
    <div role="tablist" className="tabs tabs-lifted my-10">
  <input type="radio" name="my_tabs_2" role="tab" className="tab outline-none" aria-label="Descriptions" />
  <div role="tabpanel" className="tab-content text-[14px] border-base-300 text-gray-500 rounded-box p-6">
  An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer. <br />
  <br />

E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
  </div>

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab"
    aria-label="Reviews"
    defaultChecked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Reviews goes here..............
  </div>
</div>
<div className='my-5 md:my-10'>
            <Title text1={"RELATED"} text2={"PRODUCTS"} />
            <div className='mb-5 md:mb-20'>
            <RelatedProducts category={product?.category} />
            </div>
</div>
    </div>
  );
};

export default ProductDetails;
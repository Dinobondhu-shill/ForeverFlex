import { useState } from 'react';
import upload from '../assets/upload_area.png'
import { BackendUrl } from '../Layout/Root';
import axios from 'axios';
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const AddProduct = () => {
  const [image1, setImage1] = useState(null); // Initialize as null for images
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [sizes, setSizes] = useState([]); // Ensure sizes are an array
  const [bestSeller, setBestSeller] = useState(false); // Boolean value for bestSeller
  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = parseFloat(form.price.value); // Ensure price is a number
    const category = form.category.value;
    const subCategory = form.subCategory.value;

    const formData = new FormData(); // Using FormData for file uploads
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("subCategory", subCategory);
    formData.append("bestSeller", bestSeller.toString());
  
    // Append sizes as a JSON string
    formData.append("sizes", JSON.stringify(sizes));
  
    // Append images if they exist
    if (image1) formData.append("image1", image1);
    if (image2) formData.append("image2", image2);
    if (image3) formData.append("image3", image3);
    if (image4) formData.append("image4", image4);

    try {
      const response = await axios.post(
        BackendUrl + "api/product/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if(response.data.success){
        navigate('/all-products')
        toast.success("Product Added Successfully")
      }
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };


  return (
    <div className='py-4 md:py-8 text-gray-500'>
      
      <form onSubmit={handleAddProduct} className='flex flex-col gap-4'>
      <div>
        <h3 className='text-gray-500'>Upload Image</h3>
        <div className='flex gap-4 my-2'>
          <label htmlFor="image1">
            <img src={!image1 ? upload : URL.createObjectURL(image1)} className='w-28 object-cover cursor-pointer h-36' />
            <input type="file" onChange={(e)=>setImage1(e.target.files[0])} id="image1" hidden/>
          </label>
          <label htmlFor="image2">
            <img src={!image2 ? upload : URL.createObjectURL(image2)} className='w-28 object-cover cursor-pointer h-36' />
            <input type="file" onChange={(e)=>setImage2(e.target.files[0])} id="image2" hidden/>
          </label>
          <label htmlFor="image3">
            <img src={!image3 ? upload : URL.createObjectURL(image3)} className='w-28 object-cover cursor-pointer h-36' />
            <input type="file" onChange={(e)=>setImage3(e.target.files[0])} id="image3" hidden/>
          </label>
          <label htmlFor="image4">
            <img src={!image4 ? upload : URL.createObjectURL(image4)} className=' cursor-pointer w-28 object-cover h-36' />
            <input type="file" onChange={(e)=>setImage4(e.target.files[0])} id="image4" hidden/>
          </label>
        </div>
      </div>

    <div className='flex flex-col gap-2'>
      <label className='text-gray-500'> Product Name</label>
      <input type="text" className='border outline-[#975c5c] px-2 py-2 rounded-md' placeholder='Type Here' name='name' />
    </div>
    <div className='flex flex-col gap-2'>
      <label className='text-gray-500'>Product Description</label>
      <textarea type="text" className='border outline-[#975c5c] px-2 py-2 rounded-md' placeholder='Write Description Here' name='description' />
    </div>
      <div className='flex gap-6'>
        {/* Category */}
        <div className='flex flex-col gap-2 w-fit '> 
          <label htmlFor="">Product Category</label>
          <select name="category" className='border outline-[#935555] border-gray-400 rounded-md px-2 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        {/* Subcategory */}
        <div className='flex flex-col gap-2 w-fit '> 
          <label htmlFor="">Product Subcategory</label>
          <select name="subCategory" className='border outline-[#935555] border-gray-400 rounded-md px-2 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        {/* Price */}
        <div className='flex flex-col gap-2   '> 
          <label htmlFor="">Product Price</label>
          <input type='number' className='border outline-[#935555] border-gray-400 rounded-md px-2 py-2 w-1/2' placeholder='135' name='price' min={1}/>
        </div>
      </div>
      {/* sizes */}
    <div>
      <p>Product Sizes</p>
      <div className='flex gap-3 py-2'>
        <p onClick={()=> setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S"): [...prev, "S"])} className={`px-3 py-1 cursor-pointer bg-gray-400 text-white w-fit ${sizes.includes("S")? "bg-pink-200 text-black" : ""}`}>S</p>
        <p onClick={()=> setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M"): [...prev, "M"])} className={`px-3 py-1 cursor-pointer bg-gray-400 text-white w-fit ${sizes.includes("M")? "bg-pink-200 text-black" : ""}`}>M</p>
        <p onClick={()=> setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L"): [...prev, "L"])} className={`px-3 py-1 cursor-pointer bg-gray-400 text-white w-fit ${sizes.includes("L")? "bg-pink-200 text-black" : ""}`}>L</p>
        <p onClick={()=> setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL"): [...prev, "XL"])} className={`px-3 py-1 cursor-pointer bg-gray-400 text-white w-fit ${sizes.includes("XL")? "bg-pink-200 text-black" : ""}`}>XL</p>
        <p onClick={()=> setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL"): [...prev, "XXL"])} className={`px-3 py-1 cursor-pointer bg-gray-400 text-white w-fit ${sizes.includes("XXL")? "bg-pink-200 text-black" : ""}`}>XXL</p>
      </div>
    </div>
    <div className='flex gap-2'>
    <input type="checkbox" onChange={()=> setBestSeller(prev => !prev)} checked={bestSeller} name="bestSeller" id="bestSeller" />
      <label htmlFor="bestSelller">Add to Bestseller</label>
    </div>
      <button type="submit" className='px-10 py-3 bg-black text-white w-fit'>ADD</button>
      </form>
    </div>
  );
};

export default AddProduct;
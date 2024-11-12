import axios from "axios";
import { BackendUrl } from "../Layout/Root";
import { toast } from "react-toastify";


const SingleProduct = ({product}) => {
  const token = localStorage.getItem("token");



  const handleRemoveProduct = async(id)=>{
    try {
      const response =await axios.post(BackendUrl + "api/product/delete", {id}, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    console.log(response.data)
  if(response.data.success){
    window.location.reload();
    toast.success(response.data.message)
    
  } else{
   
    toast.error(response.data.message)
  }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

return (


<div className="flex border my-3 p-1">
  <div className="flex-1 flex items-center">
    <img src={product?.imagesUrl[0]} className='w-14' />

  </div>
  <div className="flex-[3] flex items-center">
    <h2>{product.name}</h2>
  </div>
  <div className="flex-1 flex items-center">
    <p>${product.price}</p>

  </div>
  <div className="flex-1 flex items-center ">

    <p>{product.category}</p>
  </div>
  <div className="flex-1 flex items-center justify-center">
    <p onClick={()=> handleRemoveProduct(product._id)} className='cursor-pointer hover:scale-110 hover:text-red-600'>X</p>
  </div>
</div>

);
};

export default SingleProduct;
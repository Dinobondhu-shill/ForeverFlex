import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Title from "../../Components/Title";


const Myorder = () => {
  const {products, currency} = useContext(ProductContext)
  return (
    <div className="flex flex-col gap-4 items-start">
      <Title text1={'MY'} text2={"ORDERS"} />
      {
        products.slice(0,4).map((item, index) =>{
         return (
            <div key={index} className="w-full py-3 px-4 border-t border-b flex flex-col md:flex-row justify-between items-center">
              <div className="flex gap-3 items-center flex-1">
                <div className="w-20">
                  <img src={item.image[0]} alt="" />
                </div>
                <div>
                  <h2>{item.name}</h2>
                  <div className="flex gap-2">
                    <p>{currency}100</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p>Date: <span className="text-gray-500">23 Nov</span> </p>
                  <p >Payment: <span className="text-gray-500">COD</span></p>
                </div>
              </div>
              <div className="flex-1">Order Placed</div>
              <div className="border px-3 py-2">TRACE ORDER</div>
              <div></div>
              <div></div>
             </div>
          )
        })
      }
    </div>
  );
};

export default Myorder;
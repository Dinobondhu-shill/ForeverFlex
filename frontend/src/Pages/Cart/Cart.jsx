import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Title from "../../Components/Title";
import { assets } from "../../../public/assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    products,
    cart,
    currency,
    updateQuantity,
    delivery_fee,
    calculateSubtotal,
  } = useContext(ProductContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cart) {
        for (const item in cart[items]) {
          if (cart[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cart[items][item],
            });
          }
        }
      }
      setCartItems(tempData);
    }
  }, [cart, products]);

  return (
    <>
      {cartItems?.length === 0 ? (
        <div className="h-64 flex justify-center items-center">
          <div className="flex justify-center items-center border-2 rounded-full w-52 h-52">
            <h3 className="text-3xl font-bold text-center">Your Cart is Empty</h3>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-start my-5 md:my-10">
            <Title text1={"YOUR"} text2={" CART"} />
          </div>
          <div>
            {cartItems?.map((item, index) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              return (
                <div
                  key={index}
                  className="border-y py-3 my-5 flex justify-between items-end md:items-center"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:gap-6 md:w-1/2">
                    <img
                      className="w-1/2 md:w-20"
                      src={productData?.imagesUrl[0]}
                      alt=""
                    />
                    <div>
                      <h2 className="text-md md:text-xl font-medium">
                        {productData?.name}
                      </h2>
                      <div className="flex gap-3 items-center">
                        <p>
                          {currency} {productData?.price}
                        </p>
                        <p className=" p-1 md:px-4 md:py-2 border-[1px] bg-gray-100 cursor-pointer w-fit">
                          {item.size}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <input
                      onChange={(e) => {
                        const value = Math.max(1, Number(e.target.value));
                        updateQuantity(item._id, item.size, value);
                      }}
                      className="outline-none border w-8 md:w-16 text-center md:py-2"
                      type="number"
                      defaultValue={item.quantity}
                      min="1"
                    />
                  </div>
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="w-7 h-7 object-cover mx-1 md:mr-10 cursor-pointer"
                    src={assets.bin_icon}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
          {/* checkout field */}
          <div className="flex flex-col md:items-end text-start mb-28">
            <div className="mr-56 my-10 text-xl">
              <Title text1={"CART"} text2={"TOTAL"} />
            </div>
            <div className="space-y-1 md:w-2/5">
              <div className="flex justify-between border-b border-black py-1">
                <p>Subtotal</p>
                <p>
                  {currency}
                  {calculateSubtotal(cartItems)}.00
                </p>
              </div>
              <div className="flex justify-between border-b-2 border-black py-1">
                <p>Delivery Fee</p>
                <p>
                  {currency}
                  {delivery_fee}.00
                </p>
              </div>
              <div className="flex justify-between font-bold">
                <p>Total</p>
                <p>
                  {currency} {calculateSubtotal(cartItems) + delivery_fee}.00
                </p>
              </div>
              <div className="flex justify-end">
                <Link
                  to={"/place-order"}
                  className="border bg-black text-white py-3 px-8 my-5"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;

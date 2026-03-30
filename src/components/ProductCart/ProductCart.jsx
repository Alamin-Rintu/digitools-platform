import React from "react";
import ShowCart from "../ShowCart/ShowCart";
import { GiShoppingCart } from "react-icons/gi";
import { toast } from "react-toastify";

const ProductCart = ({ addToCart, setAddToCart }) => {
  const totalPrice = addToCart.reduce((sum, total) => sum + total.price, 0);

  const paymentCheckout = () => {
    setAddToCart([]);
    toast.success('Payment Complete ✅')
  };

  return (
    <div className="w-11/12 mx-auto mt-16">
      <h3 className="font-bold text-2xl mb-6">Your Cart</h3>

      {addToCart.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[60vh]">
          <div className="flex justify-center items-center w-45 h-45 bg-purple-100 text-purple-600 rounded-full mb-5 shadow-lg">
            <GiShoppingCart className="text-8xl" />
          </div>

          <p className="text-3xl font-bold text-gray-700 mb-2 text-center">
            Your cart is empty
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-4">
            {addToCart.map((item) => (
              <ShowCart key={item.id} item={item} addToCart={addToCart} setAddToCart={setAddToCart} />
            ))}
          </div>

          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl mb-4">
            <p className="text-lg font-bold text-[#101727]">Total</p>
            <h3 className="text-xl font-bold">${totalPrice}</h3>
          </div>

          <button
            onClick={paymentCheckout}
            className="btn w-full bg-linear-65 from-[#4F39F6] to-[#9514FA] border-none rounded-full text-white hover:opacity-90 transition"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default ProductCart;

import React from "react";
import { toast } from "react-toastify";

const ShowCart = ({ item, addToCart, setAddToCart }) => {
  const { name, icon, price } = item;

  const handleRemove = () => {
    const removeCart = addToCart.filter((remove) => remove.id !== item.id);
    setAddToCart(removeCart);
    toast("Item remove successfully ✅");
  };
  return (
    <div className="flex justify-between items-center space-y-3 border border-gray-200 rounded-xl mb-4 p-4">
      <div className="flex justify-between items-center gap-2 ">
        <p className="text-xl bg-gray-100 rounded-full p-2">{icon}</p>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-[#101727]">{name}</h3>
          <p className="text-xl font-bold">${price}</p>
        </div>
      </div>

      <button onClick={handleRemove} className="btn text-red-500 font-bold">
        Remove
      </button>
    </div>
  );
};

export default ShowCart;

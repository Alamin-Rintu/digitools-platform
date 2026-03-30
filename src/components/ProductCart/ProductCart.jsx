import React from "react";
import ShowCart from "../ShowCart/ShowCart";

const ProductCart = ({ addToCart }) => {
  return (
    <div className="w-11/12 mx-auto mt-16">
      <h3 className="font-bold text-2xl mb-4">Your Cart</h3>
      <div>
        {addToCart.map((item) => (
          <ShowCart key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCart;

import React from "react";

const ShowCart = ({ item }) => {
  const { name, icon, price } = item;
  return (
    <div className="flex justify-between items-center space-y-3 border border-gray-200 rounded-xl mb-4 p-4">
      <div className="flex justify-between items-center gap-2 ">
        <p className="text-xl bg-gray-100 rounded-full p-2">{icon}</p>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-[#101727]">{name}</h3>
          <p className="text-xl font-bold">${price}</p>
        </div>
      </div>

      <button className="btn text-red-500 font-bold">Remove</button>
    </div>
  );
};

export default ShowCart;

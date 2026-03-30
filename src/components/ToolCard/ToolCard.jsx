import React, { useState } from "react";

const ToolCard = ({ tool, addToCart, setAddToCart }) => {
  const { icon, name, period, price, tag, description, features } = tool;

  const [selected, setSelected] = useState(false);
  const handleSelected = () => {
    setSelected(true);
    setAddToCart([...addToCart, tool])
  };

  return (
    <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center">
        <div className="bg-gray-100 rounded-full p-2">
          <p className="text-xl">{icon}</p>
        </div>
        <div className="badge badge-secondary">{tag}</div>
      </div>

      <h3 className="text-[24px] font-bold text-[#101727] mt-3 mb-2">{name}</h3>

      <p className="text-[16px] text-[#627382] mb-3">{description}</p>

      <ul className="mt-3 space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="text-sm text-[#627382] flex items-center gap-2"
          >
            ✅ {feature}
          </li>
        ))}
      </ul>

      <p className="text-2xl font-bold mt-4">
        ${price}
        <span className="text-[#627382] text-[16px]">/{period}</span>
      </p>

      <button
        onClick={handleSelected}
        className="btn w-full mt-4 bg-linear-65 from-[#4F39F6] to-[#9514FA] border-none rounded-full text-white hover:opacity-90"
      >
        {selected ? "Added To Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ToolCard;

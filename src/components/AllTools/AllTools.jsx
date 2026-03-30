import React, { use } from "react";
import ToolCard from "../ToolCard/ToolCard";

const AllTools = ({ toolsPromise, addToCart, setAddToCart }) => {
  const tools = use(toolsPromise);

  return (
    <div className="w-11/12 mx-auto mt-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 ">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            tool={tool}
            addToCart={addToCart}
            setAddToCart={setAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default AllTools;

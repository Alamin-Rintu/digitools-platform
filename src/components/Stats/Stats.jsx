import React from "react";

const Stats = () => {
  return (
    <div className="bg-linear-65 from-[#4F39F6] to-[#9514FA] flex justify-evenly p-4 mt-16">
      <div className=" border-r border-white pr-6">
        <h3 className="text-5xl font-bold text-white">50K+</h3>
        <p className="text-2xl font-medium text-white">Active Users</p>
      </div>
      <div className=" border-r border-white pr-6">
        <h3 className="text-5xl font-bold text-white">200+</h3>
        <p className="text-2xl font-medium text-white">Premium Tools</p>
      </div>
      <div>
        <h3 className="text-5xl font-bold text-white">4.9</h3>
        <p className="text-2xl font-medium text-white">Rating</p>
      </div>
    </div>
  );
};

export default Stats;

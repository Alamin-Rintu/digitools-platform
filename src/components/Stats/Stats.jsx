import React from "react";

const Stats = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] flex flex-col md:flex-row justify-evenly items-center gap-6 p-6 mt-16  text-center">
      <div className="md:border-r border-white md:pr-6">
        <h3 className="text-4xl md:text-5xl font-bold text-white">50K+</h3>
        <p className="text-lg md:text-2xl font-medium text-white">
          Active Users
        </p>
      </div>

      <div className="md:border-r border-white md:pr-6">
        <h3 className="text-4xl md:text-5xl font-bold text-white">200+</h3>
        <p className="text-lg md:text-2xl font-medium text-white">
          Premium Tools
        </p>
      </div>

      <div>
        <h3 className="text-4xl md:text-5xl font-bold text-white">4.9</h3>
        <p className="text-lg md:text-2xl font-medium text-white">Rating</p>
      </div>
    </div>
  );
};

export default Stats;

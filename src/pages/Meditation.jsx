import React from "react";

const Meditation = () => {
  return (
    <div>
      {/* Divide in 2 grids */}
      <div className="grid grid-cols-2">
        {/* Left side */}
        <div className="bg-gray-200">
          <h1 className="text-4xl font-bold">Meditation</h1>
        </div>
        {/* Right side */}
        <div className="bg-gray-300">
          <h1 className="text-4xl font-bold">Meditation</h1>
        </div>
      </div>
    </div>
  );
};

export default Meditation;

import Lottie from "lottie-react";
import React from "react";

const ChakraCard = (props) => {
  const { animationData, title, location, meaning, color, description } = props;
  return (
    <div className="grid grid-cols-2">
      <div>
        <Lottie animationData={animationData} style={{ height: 300 }} />
      </div>
      <div>
        <div className="text-3xl">
          <h1 style={{ color: color }}>{title}</h1>
        </div>
        <h4>
          <span style={{ color: color }}> Location:</span> {location}
        </h4>
        <h4>
          <span style={{ color: color }}> Meaning:</span> {meaning}
        </h4>
        <br />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ChakraCard;

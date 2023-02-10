import Lottie from "lottie-react";
import React from "react";
import Fade from "react-reveal/Fade";

const ChakraCard = (props) => {
  const { animationData, title, location, meaning, color, description } = props;
  return (
    <div className="m-4 mr-10 grid gap-0 sm:grid-cols-1 lg:grid-cols-2">
      <div className="sm:text-center">
        <Fade left>
          <Lottie animationData={animationData} style={{ height: 400 }} />
        </Fade>
      </div>
      <div className="pl-5 pt-5 shadow-2xl">
        <Fade right>
          <div className="m-2 text-3xl">
            <h1 style={{ color: color }}>{title}</h1>
          </div>
          <h4 className="m-2">
            <span style={{ color: color }}> Location:</span> {location}
          </h4>
          <h4 className="m-2">
            <span style={{ color: color }}> Meaning:</span> {meaning}
          </h4>
          <br />
          <p className="m-2 my-5">{description}</p>
        </Fade>
      </div>
    </div>
  );
};

export default ChakraCard;

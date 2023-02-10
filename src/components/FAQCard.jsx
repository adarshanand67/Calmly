import React from "react";
import Fade from "react-reveal/Fade";

const FAQCard = (props) => {
  const { id, title, description } = props;
  console.log(id);
  // If even index, then left animation
  // If odd index, then right animation
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <Fade left={id % 2 !== 0} right={id % 2 === 0}>
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-black">{title}</h2>
            <p className="text-xl text-slate-500">{description}</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default FAQCard;

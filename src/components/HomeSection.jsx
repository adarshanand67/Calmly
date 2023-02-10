import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";

const HomeSection = (props) => {
  const { animationData, title, description, link, buttonText } = props;
  return (
    <div className="m-5 grid grid-cols-2 justify-around">
      <div>
        <Lottie animationData={animationData} style={{ size: 50 }} />
      </div>
      <div className="mx-auto w-2/3">
        <h2 className="text-3xl font-bold">{title}</h2>
        <span className="text-xl text-slate-500">{description}</span>
        <br />
        <div className="my-5 text-center">
          <Link to={link}>
            <button class="rounded bg-blue-500 p-5 font-bold text-white hover:bg-blue-700">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

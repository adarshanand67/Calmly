import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";

const HomeSection = (props) => {
  const { animationData, title, description, link, buttonText } = props;
  return (
    // <div className="m-5 sm:grid-cols-1 lg:grid-cols-2 justify-around">
    <div className="m-4 mr-10 grid gap-0 sm:grid-cols-1 lg:grid-cols-2">
      <div>
        <Lottie animationData={animationData} />
      </div>
      <div className="mx-auto w-2/3 flex flex-col justify-center">
        <h2 className="my-2 inline text-5xl font-bold text-black">
          {title} {" "}
        </h2>
        <span className="text-xl text-slate-500">{description}</span>
        <div className="mt-5 text-center">
          <Link to={link}>
            <button className="rounded bg-blue-500 p-5 font-bold text-white hover:bg-blue-700">
              {buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;

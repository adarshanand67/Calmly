import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";

const HomeSection = (props) => {
  const { animationData, title, description, link, buttonText } = props;
  return (
    // <div className="m-5 sm:grid-cols-1 lg:grid-cols-2 justify-around">
    <div className="m-4 mr-10 grid gap-0 sm:grid-cols-1 lg:grid-cols-2" data-aos="fade-right">
        <div className="mx-auto flex w-2/3 justify-center">
          <Lottie animationData={animationData} />
        </div>
      <div className="mx-auto flex w-2/3 flex-col justify-center" data-aos="fade-left">
          <span className="my-2 inline-block text-5xl font-bold text-black">
            {title}{" "}
          </span>
          <span className="inline text-xl text-slate-500">{description}</span>
          <div className="mt-5">
            <Link to={link}>
              <button className="w-full rounded bg-blue-500 p-5 font-bold text-white hover:bg-blue-700">
                {buttonText}
              </button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default HomeSection;

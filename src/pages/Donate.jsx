import Lottie from "lottie-react";
import React from "react";
import heart from "../animation/heart.json";

const Donate = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="mb-4 text-center text-4xl font-bold">
          Donate to our cause
        </h1>
        <div className="mx-auto flex w-2/3 justify-center">
          <Lottie animationData={heart} />
        </div>
        <p className="mb-8 text-center text-lg">
          Your donation will help us make a difference in people's lives.
        </p>
        <div className="flex justify-center">
          <a
            href="https://rzp.io/l/a6xgGOzR8u"
            target="_blank"
            className="rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            Donate Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Donate;

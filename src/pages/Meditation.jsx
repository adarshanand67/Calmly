import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import timerback from "../animation/timerBack.json";
import CountDownTimer from "../components/CountDownTimer";

const Meditation = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* Divide in 2 grids */}
      <div className="grid max-h-fit w-full max-w-7xl grid-cols-2">
        {/* Left side */}
        <div className="my-5">
          <p className="text-center text-xl font-medium text-gray-700">
            Choose your meditation time
          </p>
          <div className="mx-auto w-1/2">
            <CountDownTimer />
          </div>
          <Lottie
            animationData={timerback}
            style={{
              height: 400,
            }}
          />
        </div>
        {/* Right side */}
        <div className="m-5 p-10">
          {/* Chose song from Spotify  */}
          <iframe
            src="https://open.spotify.com/embed/playlist/5biekm8QYDTMHzxLqkIn6M?utm_source=generator&theme=0"
            width="100%"
            height="500"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            loading="lazy"
            className="shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Meditation;

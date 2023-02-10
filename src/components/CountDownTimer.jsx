import React, { useState } from "react";
import Countdown from "react-countdown";
import { coolGray } from "tailwindcss/colors";
import CountDown from "./CountDown";

const CountDownTimer = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const Completionist = () => (
    <div className="toast-start toast">
      <div className="alert alert-success">
        <div>
          <span>
            Meditation Completed! <i className="fas fa-check-circle"></i>
          </span>
        </div>
      </div>
    </div>
  );

  const handleStart = (e) => {
    console.log("handleStart");
    e.preventDefault();
    setIsStarted(!isStarted);
  };
  return (
    <div>
      {isStarted && (
        <Countdown
          date={Date.now() + minutes * 60000 + seconds * 1000}
          renderer={({ minutes, seconds, completed }) => {
            // if (completed) {
            //   setIsStarted(false);
            // }
            if (completed) {
              // Render a completed state
              return <Completionist />;
            } else {
              // Render a countdown
              return (
                <div className="mx-auto ">
                  <CountDown minutes={minutes} seconds={seconds} />
                </div>
              );
            }
          }}
        />
      )}
      {!isStarted && (
        <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-xl">
          <div className="flex gap-4">
            <div className="mb-4">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="username"
              >
                Minutes
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                id="minutes"
                type="text"
                placeholder="minutes"
                onChange={(e) => setMinutes(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="mb-2 block text-sm font-bold text-gray-700"
                htmlFor="password"
              >
                Seconds
              </label>
              <input
                className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
                id="seconds"
                type="text"
                placeholder="seconds"
                onChange={(e) => setSeconds(e.target.value)}
              />
            </div>
          </div>
        </form>
      )}
      <button
        className="focus:shadow-outline my-5 w-full rounded bg-blue-500 py-2 px-4 text-center font-bold text-white hover:bg-blue-700 focus:outline-none"
        onClick={(e) => handleStart(e)}
        // Pressing enter will trigger the button
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleStart(e);
          }
        }}
      >
        {isStarted ? "Stop" : "Start"}
      </button>
    </div>
  );
};

export default CountDownTimer;

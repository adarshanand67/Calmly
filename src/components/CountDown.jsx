import React from "react";

const CountDown = ({ minutes, seconds }) => {
  return (
    <div className="mx-auto grid auto-cols-max grid-flow-col gap-5 text-center">
      <div className="mx-auto flex flex-col">
        <span className="countdown m-5 mx-auto font-mono text-6xl">
          <span
            style={{ "--value": minutes < 10 ? "0" + minutes : minutes }}
            className="mx-auto"
          ></span>
        </span>
        min
      </div>
      <div className="flex flex-col">
        <span className="countdown m-5 mx-auto font-mono text-6xl">
          <span
            style={{ "--value": seconds < 10 ? "0" + seconds : seconds }}
          ></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default CountDown;

import React from "react";
import CountUp from "react-countup";

const Psychologists = 100;
const TotalPatient = 950;
const AllBranches = 6;
const AwardWinner = 7;

const CountUps = () => {
  return (
    <div className="my-10 mx-auto w-5/6">
      {/* Title saying numbers dont lie */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="my-5 text-center text-5xl font-extrabold tracking-tight text-black dark:text-white">
          Numbers Don't Lie
        </h2>
        <p className="text-center text-gray-500">
          See how many people we have helped so far
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-lg bg-white p-4 text-center shadow-md">
          <h3 className="mb-2 text-lg font-medium">Psychologists</h3>
          <CountUp
            end={Psychologists}
            duration={5}
            className="text-3xl font-bold text-indigo-600"
          />
        </div>
        <div className="rounded-lg bg-white p-4 text-center shadow-md">
          <h3 className="mb-2 text-lg font-medium">Total Patients</h3>
          <CountUp
            end={TotalPatient}
            duration={5}
            className="text-3xl font-bold text-indigo-600"
          />
        </div>
        <div className="rounded-lg bg-white p-4 text-center shadow-md">
          <h3 className="mb-2 text-lg font-medium">All Branches</h3>
          <CountUp
            end={AllBranches}
            duration={5}
            className="text-3xl font-bold text-indigo-600"
          />
        </div>
        <div className="rounded-lg bg-white p-4 text-center shadow-md">
          <h3 className="mb-2 text-lg font-medium">Award Winners</h3>
          <CountUp
            end={AwardWinner}
            duration={5}
            className="text-3xl font-bold text-indigo-600"
          />
        </div>
      </div>
    </div>
  );
};

export default CountUps;

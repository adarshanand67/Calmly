import Lottie from "lottie-react";
import React from "react";
import fail from "../animation/fail.json";
import firstImpression from "../animation/firstImpression.json";
import help from "../animation/help.json";
import lazyboy from "../animation/lazyboy.json";
import lazycat from "../animation/lazycat.json";
import man from "../animation/man.json";
import mentalAwareNess from "../animation/mentalAwareNess.json";
import relax from "../animation/relax.json";
import sad from "../animation/sad.json";
import shock from "../animation/shock.json";
import solar from "../animation/solar.json";
import YogaCard from "../components/YogaCard";
import { disorders } from "../data/disorders";


const animationDataList = {
  sad: sad,
  shock: shock,
  lazyboy: lazyboy,
  lazycat: lazycat,
  man: man,
  mentalAwareNess: mentalAwareNess,
  help: help,
  solar: solar,
};


const Disorders = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-5 text-center text-5xl font-bold text-black">
          Disorders
        </h1>
        <h4 className="text-center text-2xl text-slate-400">
          Making people aware of the disorders and how you can tackle them
        </h4>
        <div className="flex flex-col items-center justify-center">
          {disorders.map((disorder, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <YogaCard
                  title={disorder.title}
                  subtitle={disorder.subtitle}
                  description={disorder.description}
                  animationData={animationDataList[disorder.animationData]}
                />  
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Disorders;

import Lottie from "lottie-react";
import PropTypes from "prop-types";
import React from "react";
import Fade from "react-reveal/Fade";

const YogaCard = (props) => {
  const { animationData, title, subtitle, description, note } = props;
  return (
    <>
      <div className="m-4 mr-10 grid gap-0 sm:grid-cols-1 lg:grid-cols-2">
        <div className="sm:text-center">
          <Fade left>
            <Lottie animationData={animationData} style={{ height: 300 }} />
          </Fade>
        </div>
        <div className="pl-5 pt-5 shadow-2xl">
          <div className="m-2 text-3xl">
            <h1 className="font-bold">{title}</h1>
          </div>
          <h4 className="m-2 ">{subtitle}</h4>
          <h4 className="m-2 text-slate-400">{description}</h4>
        </div>
      </div>
      ;
    </>
  );
};

YogaCard.defaultProps = {
  animationData: {},
  title: "",
  subtitle: "",
  description: "",
  note: "",
};

export default YogaCard;

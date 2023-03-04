import Lottie from "lottie-react";
import PropTypes from "prop-types";
import fail from "../animation/fail.json";
import firstImpression from "../animation/firstImpression.json";
import heart from "../animation/heart.json";
import lazyboy from "../animation/lazyboy.json";
import sad from "../animation/sad.json";
import shock from "../animation/shock.json";
import help from "../animation/help.json";
import lazycat from "../animation/lazycat.json";
import man from "../animation/man.json";
import mentalAwareNess from "../animation/mentalAwareNess.json";
import solar from "../animation/solar.json";

const YogaCard = (props) => {
  const { animationData, title, subtitle, description } = props;
  return (
    <>
      <div className="m-4 mr-10 grid gap-0 sm:grid-cols-1 lg:grid-cols-2">
        <div className="sm:text-center" data-aos="fade-left">
          <Lottie animationData={animationData} style={{ height: 300 }} />
        </div>
        <div className="pl-5 pt-5 shadow-2xl">
          <div className="m-2 text-3xl">
            <h1 className="font-bold">{title}</h1>
          </div>
          <h4 className="m-2 ">{subtitle}</h4>
          <h4 className="m-2 text-slate-400">{description}</h4>
        </div>
      </div>
    </>
  );
};

YogaCard.defaultProps = {
  animationData: heart,
  title: "",
  subtitle: "",
  description: "",
};

export default YogaCard;

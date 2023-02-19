import { Icon } from "@iconify/react";
import Lottie from "lottie-react";
import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import mockups from "../../public/assets/mockups.png";
import title from "../../public/assets/title.png";
import chakra from "../animation/chakra.json";
import heromedi from "../animation/heromedi.json";
import sukh from "../animation/sukh.json";
import thoughts from "../animation/thoughts.json";
import CountUps from "../components/CountUps";
import FAQ from "../components/FAQ";
import HomeSection from "../components/HomeSection";
import Quote from "../pages/Quote";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <div className="my-5 grid sm:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center">
            <img src={title} alt="title" className="w-1/2" />
            <Fade left>
              <p className="m-5 mb-10 text-center text-4xl">
                The All in One App for your <br />{" "}
                <span className="text-blue-500">Mental Health </span>
                needs <br />
              </p>
            </Fade>
          </div>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center ">
          <Fade right>
            <img src={mockups} alt="mockups" className="w-1/2" />
          </Fade>
        </div>
      </div>
      {/* <Quotes /> */}
      {/* <div className="w-5/6 mx-auto mt-10">
        <Quote />
      </div> */}
      <h2 className="mx-auto my-5 w-2/3 text-center text-5xl font-bold text-black">
        Available Healthcare Services
      </h2>
      <h5 className="text-center text-xl text-slate-500">
        Find the best support for your mental wellbeing
      </h5>
      <HomeSection
        animationData={heromedi}
        title="Meditation"
        description="has been practiced for thousands of years. Meditation originally was meant to help deepen understanding of the sacred and mystical forces of life. These days, meditation is commonly used for relaxation and stress relief."
        link="/Meditation"
        buttonText="Meditate now!"
      />
      <HomeSection
        animationData={chakra}
        title="Chakras"
        description="are thought to be spinning disks of energy that should stay “open” and aligned for optimal emotional and physical well-being.Yoga is one of the most basic ways to balance each chakra because it creates alignment in the physical body. Balancing and stabilizing your physical body through asana (yoga posture) practice also rebalances your subtle body."
        link="/Chakras"
        buttonText="Learn about Chakra"
      />
      <HomeSection
        animationData={sukh}
        title="Yoga"
        description="is a mind and body practice with historical origins in ancient Indian philosophy. There is a broad variety of yoga schools, practices, and goals in Hinduism, Buddhism, and Jainism. Among the most well-known types of yoga are Hatha yoga and Rāja yoga."
        link="/Yoga"
        buttonText="Learn about Yoga"
      />

      <HomeSection
        animationData={thoughts}
        title="Quotes"
        description="Quotes are a great way to get inspired and motivated. Here are some of the best quotes from the world's most successful people."
        link="/Quote"
        buttonText="Get Inspired"
      />


      <Testimonials />
      <FAQ />
      <CountUps />
    </>
  );
};

export default Home;

import { Icon } from "@iconify/react";
import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import mockups from "../../public/assets/mockups.png";
import title from "../../public/assets/title.png";
import chakra from "../animation/chakra.json";
import heromedi from "../animation/heromedi.json";
import sukh from "../animation/sukh.json";
import HomeSection from "../components/HomeSection";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <div className="grid sm:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl">
              The All in One App for your <br />{" "}
              <span className="text-blue-500">Meditation</span> and{" "}
              <span className="text-blue-500">Yoga</span> needs
            </p>
            <img src={title} alt="title" className="w-1/2" />
          </div>
        </div>
        <div className="my-5 flex flex-col items-center justify-center ">
          <img src={mockups} alt="mockups" className="w-1/2" />
        </div>
      </div>

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
    </>
  );
};

export default Home;

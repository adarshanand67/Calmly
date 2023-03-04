import React from "react";
import thoughts from "../animation/Thoughts.json";
import chakra from "../animation/chakra.json";
import heart from "../animation/heart.json";
import heromedi from "../animation/heromedi.json";
import solar from "../animation/solar.json";
import sukh from "../animation/sukh.json";
import HomeSection from "../components/HomeSection";
import birds from "../animation/birds.json";
import bmi from "../animation/bmi.json";

const Services = () => {
  return (
    <>
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

      {/* Disorders */}
      <HomeSection
        animationData={bmi}
        title="Disorders"
        description="Mental disorders are health conditions that affect your mood, thinking and behavior. Examples of mental disorders include depression, anxiety disorders, schizophrenia, eating disorders and addictive behaviors."
        link="/Disorders"
        buttonText="Learn about Disorders"
      />

      {/* Donate */}
      <HomeSection
        animationData={heart}
        title="Donate"
        description="We are a non-profit organization and we rely on donations to keep our services free. If you would like to donate, please click the button below."
        link="/Donate"
        buttonText="Donate"
      />
    </>
  );
};

export default Services;

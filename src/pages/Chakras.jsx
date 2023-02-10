import Lottie from "lottie-react";
import React from "react";
import crown from "../animation/Crown.json";
import heart from "../animation/Heartc.json";
import root from "../animation/Root.json";
import sacral from "../animation/Sacral.json";
import solar from "../animation/Solar.json";
import thirdeye from "../animation/Thirdeye.json";
import throat from "../animation/Throat.json";
import chacha from "../../public/assets/bg.jpg";
import ChakraCard from "../components/ChakraCard";
// import "../styles/Chakras.css";

const Chakras = () => {
  return (
    <>
      <img src={chacha} className="mx-auto my-10" width={400} />
      <div className="flex flex-col">
        <ChakraCard
          animationData={root}
          title="Muladhara Chakra"
          location="The base of the spine, in the tailbone area"
          meaning="Physical Identity,Stability,Grounding"
          color="Red"
          description="It is also known as Root Chakra.A blocked root chakra can manifest as physical issues like arthritis, constipation, and bladder or colon problems, or emotionally through feeling insecure about finances or our basic needs and well-being. When it's in alignment and open, we will feel grounded and secure, both physically and emotionally."
        />
        {/* const { animationData, title, location, meaning, color, description } = props; */}
        <ChakraCard
          animationData={sacral}
          title="Svadhisthana Chakra"
          location="Two finger-widths above the Muladhara chakra"
          meaning="Sexual and Creative Energy"
          color="Orange"
          description="The sacral chakra is believed to be the second chakra in the human
              body. It's thought to govern how you experience sexuality,
              creative expression, emotions, and more. According to most
              traditions, it can become blocked and unbalanced, as can the other
              chakras in the body."
        />

        <ChakraCard
          animationData={solar}
          title="Manipura Chakra"
          location="Around your navel area of the body near your upper abdomen and breastbone"
          meaning="Controls metabolism and digestion"
          color="Yellow"
          description="The Manipura Chakra is the centre of vitality. It controls our energy balance to strengthen and consolidate our health. This Chakra has an effect like a magnet, attracting Prana from the Cosmos. As the seat of digestive fire, this Chakra regulates the function of the Pancreas and digestive organs."
        />

        <ChakraCard
          animationData={heart}
          title="Anahata Chakra"
          location="In the centre of the chest at the height of the thymus gland"
          meaning="Represents transformation and love energy"
          color="Green"
          description="Anahata controls the love energy in the body. On a physical level,
              the heart chakra responds to the heart, lungs, immune system, and
              muscles of the upper body. On a spiritual level, opening the heart
              chakra fills you with love, forgiveness, and compassion."
        />

        <ChakraCard
          animationData={throat}
          title="Vishuddha Chakra"
          location="In the neck and the throat"
          meaning="Truth, Clarity, and Responsibility"
          color="Blue"
          description="The vishuddha or throat chakra acts as the body's communication
              hub. It's where you find your voice, speak your truth, and sing
              praises for yourself and others.This chakra is associated with
              speaking up and expressing yourself, but also with hearing and
              being heard."
        />

        <ChakraCard
          animationData={thirdeye}
          title="Ajna Chakra"
          location="In the center of the forehead between the eyebrows"
          meaning="Wisdom and Deep Inner Knowledge"
          color="Indigo"
          description="The Third-Eye Chakra, also called the Ajna Chakra, is the center
              of perception, consciousness and intuition. It is pronounced as
              'Agya Chakra' and is the focal point of concentration during asana
              or meditation practices. When the Ajna Chakra is awakened, it
              increases consciousness and transcends to a higher realm."
        />

        <ChakraCard
          animationData={crown}
          title="Sahasrara Chakra"
          location="Top of the head"
          meaning="Individual's center of spirit, enlightenment, wisdom, universal consciousness, and connection to higher guidance"
          color="Violet"
          description="The Crown Chakra, is essentially the spiritual self. Working on
              the Crown Chakra is all about focusing on the higher self.
              Sahasrara is associated with the pursuit of spiritual peace, and
              connecting to higher consciousness or state of being. It is
              commonly pictured as concentric rings of flower petals, which
              represent the divine lotus."
        />
      </div>
    </>
  );
};

export default Chakras;

import { Icon } from "@iconify/react";
import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import chakra from "../animation/chakra.json";
import heromedi from "../animation/heromedi.json";
import mockups from "../../public/assets/mockups.png";
import title from "../../public/assets/title.png";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center">

            <img src={title} alt="title" className="w-1/2" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <img src={mockups} alt="mockups" className="w-1/2" />
        </div>
      </div>

      <div className="m-5 grid grid-cols-2 justify-around">
        <div>
          <Lottie animationData={heromedi} style={{ size: 50 }} />
        </div>
        <div className="mx-auto w-2/3">
          <h2 className="text-3xl font-bold">Meditation</h2>
          <span className="text-xl text-slate-500">
            has been practiced for thousands of years. Meditation originally was
            meant to help deepen understanding of the sacred and mystical forces
            of life. These days, meditation is commonly used for relaxation and
            stress relief.
          </span>
          <br />
          <div className="my-5">
            <Link to="/Meditation">
              <button class="rounded bg-blue-500 p-5 font-bold text-white hover:bg-blue-700">
                {/* <Icon
                  icon="ic:baseline-navigate-next"
                  vFlip={true}
                  inline={true}
                /> */}
                Meditate now!
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="m-5 grid grid-cols-2 justify-around">
        <div>
          <Lottie animationData={chakra} style={{ size: 5000 }} />
        </div>
        <div className="mx-auto w-2/3">
          <h2 className="text-3xl font-bold">Chakras</h2>
          <span className="text-xl text-slate-500">
            are thought to be spinning disks of energy that should stay “open”
            and aligned for optimal emotional and physical well-being.Yoga is
            one of the most basic ways to balance each chakra because it creates
            alignment in the physical body. Balancing and stabilizing your
            physical body through asana (yoga posture) practice also rebalances
            your subtle body.
          </span>
          <br />
          <div className="my-5">
            <Link to="/Chakras">
              <button class="rounded bg-blue-500 p-5 font-bold text-white hover:bg-blue-700">
                {/* <Icon
                  icon="ic:baseline-navigate-next"
                  vFlip={true}
                  inline={true}
                /> */}
                Leran about Chakra
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// .medi_animaiton{
//     height: 500px;
//     width: 2000px;
//     margin: 30px;
//    /*  background-color: #1a1616; */
//     display: flex;
//     align-items: center;
// }

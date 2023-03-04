import { Icon } from "@iconify/react";
import Lottie from "lottie-react";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RiCustomerService2Fill } from "react-icons/ri";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import mockups from "../../public/assets/mockups.png";
import title from "../../public/assets/title.png";
import thoughts from "../animation/Thoughts.json";
import chakra from "../animation/chakra.json";
import heromedi from "../animation/heromedi.json";
import sukh from "../animation/sukh.json";
import ContactForm from "../components/ContactForm";
import CountUps from "../components/CountUps";
import FAQ from "../components/FAQ";
import FloatingActionButton from "../components/FloatingActionButton";
import HomeSection from "../components/HomeSection";
import SocialMediaButtons from "../components/SocialMediaButtons";
import Testimonials from "../components/Testimonials";
import Quote from "../pages/Quote";
import ServicesButton from "../components/ServicesButton";

Modal.setAppElement("#root");

const Home = () => {
  const [showForm, setShowForm] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const handleOpen = () => {
    setShowModal(true);
    setShowForm(true);
  };

  return (
    <>
      {/* Hero section */}
      <div className="my-5 grid sm:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center">
            <img
              src={title}
              alt="title"
              className="w-1/2"
              data-aos="fade-right"
            />
            <p className="m-5 mb-10 text-center text-4xl">
              The All in One App for your <br />{" "}
              <span className="text-blue-500">Mental Health </span>
              needs <br />
            </p>
          </div>
        </div>
        <div
          className="mt-5 flex flex-col items-center justify-center "
          data-aos="fade-left"
        >
          <img src={mockups} alt="mockups" className="w-1/2" />
        </div>
      </div>

      <Testimonials />
      <FAQ />
      <CountUps />

      {/* Forms */}
      {showForm && (
        <Modal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          className="fixed bottom-12 right-0 mx-auto my-10 mr-4 mb-4 max-w-sm"
        >
          <ContactForm setShowModal={setShowModal} />
        </Modal>
      )}

      <FloatingActionButton
        icon={<RiCustomerService2Fill size={30} />}
        onClick={handleOpen}
      />

     <ServicesButton/>
    </>
  );
};

export default Home;

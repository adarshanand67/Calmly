import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const AboutCard = ({
  name,
  designation,
  description,
  image,
  linkedin,
  github,
}) => {
  return (
    <div className="w-full p-4 md:w-1/3">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <img
          className="mx-auto h-36 w-36 rounded-full"
          src={image}
          alt="Avatar"
        />
        <div className="flex flex-col justify-center">
          <h2 className="mt-4 text-center text-2xl font-medium text-gray-800">
            {name}
          </h2>
          <p className="text-center text-lg text-gray-600">{designation}</p>
          <p className="text-center text-gray-600">{description}</p>
          {/* Github linkedin links */}
          <div className="mt-4 flex justify-center gap-5">
            <button
              className="rounded-full bg-blue-500 px-5 py-3 text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
              onClick={() => window.open(linkedin, "_blank")}
            >
              <BsLinkedin />
            </button>
            <button
              className="rounded-full bg-gray-800 px-5 py-3 text-white hover:bg-gray-700 focus:bg-gray-700 focus:outline-none"
              onClick={() => window.open(github, "_blank")}
            >
              <FaGithub />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;

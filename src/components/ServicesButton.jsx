import React from "react";
import { Link } from "react-router-dom";

const ServicesButton = () => {
  return (
    <>
      {/* Go to services section */}
      <div className="justify-cente my-10 flex flex-col items-center">
        <Link to="/services">
          <button className="rounded-full bg-blue-500 py-2 px-20 text-2xl font-semibold text-white hover:cursor-pointer hover:bg-blue-600 hover:text-gray-100">
            {/* <Icon icon="material-symbols:arrow-forward-ios-sharp" /> */}
            Go to Services 👉
          </button>
        </Link>
      </div>
    </>
  );
};

export default ServicesButton;

import { Footer } from "flowbite-react";
import React, { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footers = () => {
  return (
    <>
        <div className="w-full">
          {/* <Footer.Divider /> */}
          <div className="w-full flex justify-center pb-2 mb-2">
            <hr />
            <Footer.Copyright href="#" by="Calmly™" year={2023} />
          </div>
        </div>
    </>
  );
};

export default Footers;

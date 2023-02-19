import { Footer } from "flowbite-react";
import React, { useState } from "react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import SocialMediaButtons from "./SocialMediaButtons";

const Footers = () => {
  return (
    <>
      <div className="w-full mt-2">
        {/* <Footer.Divider /> */}
        <h1 className="text-center text-2xl mb-2">
          Help us spread the word!
        </h1>
        <SocialMediaButtons url="https://calmly-mental-health.vercel.app/" />
        <div className="flex w-full justify-center pb-2">
          <hr />

          <Footer.Copyright href="#" by="Calmly™" year={2023} />
        </div>
      </div>
    </>
  );
};

export default Footers;

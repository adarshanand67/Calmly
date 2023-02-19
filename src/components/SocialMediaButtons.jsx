import React from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

const SocialMediaButtons = ({ url, title }) => {
  // const emailID = "mailto:adarsh.anand.20031@iitgoa.ac.in"
  return (
    // Send all buttons to bottom right
    <div className="mt2 mb-5 flex items-end justify-center gap-3">
      <EmailShareButton url={url}>
        <EmailIcon size={48} round={true} title={title} />
      </EmailShareButton>

      <FacebookShareButton url={url}>
        <FacebookIcon size={48} round={true} title={title} />
      </FacebookShareButton>

      <TwitterShareButton url={url}>
        <TwitterIcon size={48} round={true} title={title} />
      </TwitterShareButton>

      <WhatsappShareButton url={url}>
        <WhatsappIcon size={48} round={true} title={title} />
      </WhatsappShareButton>

      <LinkedinShareButton url={url}>
        <LinkedinIcon size={48} round={true} title={title} />
      </LinkedinShareButton>

      <RedditShareButton url={url}>
        <RedditIcon size={48} round={true} title={title} />
      </RedditShareButton>

      <TelegramShareButton url={url}>
        <TelegramIcon size={48} round={true} title={title} />
      </TelegramShareButton>

      <TumblrShareButton url={url}>
        <TumblrIcon size={48} round={true} title={title} />
      </TumblrShareButton>
    </div>
  );
};

export default SocialMediaButtons;

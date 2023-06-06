import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

interface SocialMediaShareProps {
  url: string;
}

const SocialMediaShare = ({ url }: SocialMediaShareProps) => {
  return (
    <div className="flex flex-col mt-5">
      <div className="w-full h-1 bg-black opacity-30">.</div>
      <p className="mt-5 text-sm font-bold md:text-lg">Share on</p>
      <div className="flex gap-5 mt-2">
        <FacebookShareButton url={url}>
          <BsFacebook className="w-5 h-5" />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <BsTwitter className="w-5 h-5" />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <BsLinkedin className="w-5 h-5" />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default SocialMediaShare;

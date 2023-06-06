import { useRouter } from "next/router";
import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FiLink } from "react-icons/fi";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

interface SocialMediaShareProps {
  url: string;
}

const SocialMediaShare = ({ url }: SocialMediaShareProps) => {
  const router = useRouter();
  return (
    <div className="flex flex-col mt-5">
      <hr className="border-none h-[1px] text-black bg-black opacity-50" />
      {/* <div className="w-full h-1 bg-black opacity-30">.</div> */}
      <p className="mt-8 text-sm font-bold md:text-2xl font-poppins">
        Share on
      </p>
      <div className="flex gap-8 mt-5">
        <FacebookShareButton url={url}>
          <BsFacebook className="w-10 h-10" />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <BsTwitter className="w-10 h-10" />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <BsLinkedin className="w-10 h-10" />
        </LinkedinShareButton>
        <button
          className="text-white px-4 py-2 space-x-2 flex flex-row items-center rounded-lg bg-black"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
          }}
        >
          <FiLink className="w-5 h-5 text-amber-600" />
          <p className="text-linear-gold">Copy Link</p>
        </button>
      </div>
    </div>
  );
};

export default SocialMediaShare;

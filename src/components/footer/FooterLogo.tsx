import type React from "react";
import LogoIcon from "../basic/icon/LogoIcon";
import FacebookIcon from "../basic/icon/FacebookIcon";
import YoutubeIcon from "../basic/icon/YoutubeIcon";
import TwitterIcon from "../basic/icon/TwitterIcon";
import PinterestIcon from "../basic/icon/PinterestIcon";
import InstagramIcon from "../basic/icon/InstagramIcon";

interface FooterLogoProps {}

export const FooterLogo: React.FC<FooterLogoProps> = ({}) => {
  return (
    <div className="flex flex-col justify-between flex-1">
      <LogoIcon className="h-5 mb-8" fill="white"/>

      {/* Social Media Accounts */}
      <div className="flex flex-row gap-3">
        <FacebookIcon className="cursor-pointer w-5 h-5"/>
        <YoutubeIcon className="cursor-pointer w-5 h-5"/>
        <TwitterIcon className="cursor-pointer w-5 h-5"/>
        <PinterestIcon className="cursor-pointer w-5 h-5"/>
        <InstagramIcon className="cursor-pointer w-5 h-5"/>
      </div>
    </div>
  );
};

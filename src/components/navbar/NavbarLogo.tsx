import type React from "react";
import LogoIcon from "../basic/icon/LogoIcon";

interface NavbarLogoProps {}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({}) => {
  return (
    <a className="logo cursor-pointer m-y-auto flex items-center" href="/">
      <LogoIcon className="h-5" />
    </a>
  );
};

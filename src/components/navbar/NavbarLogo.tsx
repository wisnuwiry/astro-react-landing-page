import type React from "react";
import LogoIcon from "../basic/icon/LogoIcon";

interface NavbarLogoProps {}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({}) => {
  return (
    <a className="logo cursor-pointer m-auto" href="/">
        <LogoIcon className="h-5"/>
    </a>
  );
};

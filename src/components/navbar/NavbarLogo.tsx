import type React from "react";

interface NavbarLogoProps {}

export const NavbarLogo: React.FC<NavbarLogoProps> = ({}) => {
  return (
    <a className="logo cursor-pointer m-auto" href="/">
      <img src="/img/logo.svg" alt="Logo" className="h-5" />
    </a>
  );
};

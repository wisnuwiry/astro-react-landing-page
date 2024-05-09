import type React from "react";

interface NavbarMenuProps {}

export const NavbarMenu: React.FC<NavbarMenuProps> = ({}) => {
  const menus = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <div className="flex flex-row gap-7 flex-1 justify-center">
      {menus.map((e) => (
        <div className="group cursor-pointer decoration-none flex flex-col justify-center text-disabled hover:text-black">
          <a href="#" className="flex-1 pt-2.5">{e}</a>
          <div className="h-1 w-0 group-hover:w-full group-hover:bg-gradient-to-br group-hover:to-gradient-end group-hover:from-gradient-start group-hover:to-gradient-end transition-all duration-300 mb-[-15px]"/>
        </div>
      ))}
    </div>
  );
};

import { NavbarAction } from "./NavbarAction";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMenu } from "./NavbarMenu";

export const Navbar = () => {
  const menus = ["Home", "About", "Contact", "Blog", "Careers"];

  return (
    <div className="w-full bg-white py-4 sticky top-0 z-20">
      <div className="max-w-wrapper px-6 m-auto flex flex-row justify-items-center justify-between">
        <NavbarLogo />
        <NavbarMenu menus={menus}/>
        <NavbarAction menus={menus}/>
      </div>
    </div>
  );
};

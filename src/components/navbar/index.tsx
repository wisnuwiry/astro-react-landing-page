import { NavbarAction } from "./NavbarAction";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarMenu } from "./NavbarMenu";

export const Navbar = () => {
  return (
    <div className="w-full bg-white py-4 sticky top-0 z-10">
      <div className="max-w-wrapper m-auto flex flex-row justify-items-center">
        <NavbarLogo />
        <NavbarMenu />
        <NavbarAction />
      </div>
    </div>
  );
};

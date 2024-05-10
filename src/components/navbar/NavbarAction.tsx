import type React from "react";
import { Button } from "../basic/Button";
import { NavbarMenuMobile } from "./NavbarMenuMobile";

interface NavbarActionProps {
    menus: string[]
}

export const NavbarAction: React.FC<NavbarActionProps> = ({menus}) => {

  return (
    <div className="transition-all cursor-pointer" onClick={() => {}}>
      <NavbarMenuMobile menus={menus}/>

      <Button className="hidden md:block">Request Invite</Button>
    </div>
  );
};

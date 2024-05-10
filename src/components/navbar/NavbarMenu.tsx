import type React from "react";
import { cn } from "../../utils/utils";

interface NavbarMenuProps {
  className?: string;
  menus: string[];
}

export const NavbarMenu: React.FC<NavbarMenuProps> = ({ className, menus }) => {
  return (
    <div
      className={cn(
        className,
        "hidden md:flex flex-row gap-7 flex-1 justify-center"
      )}
    >
      {menus.map((e, i) => (
        <div
          key={i}
          className="group cursor-pointer decoration-none flex flex-col justify-center items-center text-disabled hover:text-black"
        >
          <a href="#" className="flex-1 pt-2.5">
            {e}
          </a>
          <div className="h-1 w-0 rounded-md group-hover:w-full group-hover:bg-gradient-to-br group-hover:to-gradient-end group-hover:from-gradient-start group-hover:to-gradient-end transition-all duration-300 mb-[-16px]" />
        </div>
      ))}
    </div>
  );
};

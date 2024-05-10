import type React from "react";

interface FooterMenuProps {
  menus: string[];
}

export const FooterMenu: React.FC<FooterMenuProps> = ({ menus }) => {
  return (
    <div className="flex flex-col gap-2.5 min-w-[160px]">
      {menus.map((e, i) => (
        <a
          key={i}
          href="#"
          className="text-sm decoration-none text-white text-normal leading-7 hover:text-primary"
        >
          {e}
        </a>
      ))}
    </div>
  );
};

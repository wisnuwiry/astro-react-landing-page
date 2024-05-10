"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import HamburgerIcon from "../basic/icon/HamburgerIcon";
import CloseIcon from "../basic/icon/CloseIcon";

interface NavbarMenuMobileProps {
    menus: string[]
}

export const NavbarMenuMobile: React.FC<NavbarMenuMobileProps> = ({menus}) => {

  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  return (
    <>
      <div className="block md:hidden p-2.5 h-8 items-center">
        {open ? (
          <CloseIcon onClick={onClose} />
        ) : (
          <HamburgerIcon onClick={onOpen} />
        )}
      </div>
      <Dialog
        open={open}
        as="div"
        className="relative z-10 md:hidden"
        onClose={onClose}
      >
        {/* Background */}
        <div className="fixed inset-0 bg-black bg-opacity-25" />

        {/* Dialog Position */}
        <div className="fixed inset-0 z-10">
          <DialogPanel className="relative m-6 flex bg-white shadow-xl max-w-full h-auto rounded-lg mt-[6rem] flex flex-col py-4">
            {menus.map((e, i)=> <a href="#" key={i} className="text-lg text-center hover:bg-gray-100 p-3">{e}</a>)}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

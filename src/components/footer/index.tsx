import { FooterAction } from "./FooterAction";
import { FooterLogo } from "./FooterLogo";
import { FooterMenu } from "./FooterMenu";

export const Footer = () => {
  return (
    <div className="w-full bg-accent">
      <div className="max-w-wrapper px-6 flex flex-col md:flex-row flex-wrap m-auto py-12 justify-between gap-10 items-center">
        <FooterLogo />
        <div className="flex flex-col md:flex-row">
          <FooterMenu menus={["About Us", "Contact", "Blog"]} />
          <FooterMenu menus={["Careers", "Support", "Privacy Policy"]} />
        </div>
        <FooterAction />
      </div>
    </div>
  );
};

import { FooterAction } from "./FooterAction";
import { FooterLogo } from "./FooterLogo";
import { FooterMenu } from "./FooterMenu";

export const Footer = () => {
  return (
    <div className="w-full bg-accent">
      <div className="max-w-wrapper flex flex-row flex-wrap m-auto py-12 justify-between">
        <FooterLogo />
        <FooterMenu menus={['About Us', 'Contact', 'Blog']}/>
        <FooterMenu menus={['Careers', 'Support', 'Privacy Policy']}/>
        <FooterAction />
      </div>
    </div>
  );
};

import { Button } from "../../components/basic/Button";
import "./HeroSection.css";

export const HeroSection = ({}) => {
  return (
    <div className="flex flex-col md:block relative hero">
      <div className="w-full md:absolute items-end">
        <div
          className="image flex flex-row max-w-[1440px] m-auto"
          style={{ maxHeight: "min(90vh, 700px)" }}
        >
          <div className="hidden md:block w-0 md:w-[530px] lg:w-[520px] h-full flex-1 grow"></div>
          <div className="img-intro relative max-h-full h-full w-full ml-auto">
            <img src="/img/bg-intro-desktop.svg" className="background-mockup hidden md:block absolute" />
            <img
              src="/img/image-mockups.png"
              className="mockup transition-all duration-300 object-contain object-center md:mt-[-100px] absolute top-0 right-[-130px]"
            />
          </div>
        </div>
      </div>

      <div className="intro-text max-w-wrapper px-6 m-auto items-start flex flex-row w-full items-center">
        <div className="info max-w-[420px] flex flex-col items-start">
          <h2 className="pb-6 text-[56px] font-light leading-[64px]">
            Next generation digital banking
          </h2>
          <p className="text-disabled text-lg font-normal mb-6">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <Button>Request Invite</Button>
        </div>
      </div>
    </div>
  );
};

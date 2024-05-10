import { Button } from "../../components/basic/Button";

export const HeroSection = ({}) => {
  return (
    <div className="flex flex-col md:block relative" style={{maxHeight: 'min(90vh, 700px)'}}>
      <div className="max-w-wrapper m-auto items-start flex flex-row w-full items-center" style={{minHeight: 'min(90vh, 700px)'}}>
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

      <div className="image flex flex-row absolute top-0 right-0 justify-end w-full" style={{maxHeight: 'min(90vh, 700px)'}}>
        <div className="w-[350px] md:w-[400px] lg:w-[520px] h-full"></div>
        <div className="relative flex-1 h-full items-end justify-end" style={{minHeight: 'min(90vh, 700px)'}}>
          <div className="h-full"></div>
          <img src="/img/bg-intro-desktop.svg" className="absolute w-[250%] h-[250%] lg:w-[140%] lg:h-[140%] object-contain object-left-top top-0 right-0 mt-[-20%] mr-[-5%] sm:mr-[-10%] md:mr-[-20%] lg:mr-[-40%]" />
          <img src="/img/image-mockups.png" className="absolute transition-all duration-300 w-[120%] h-[120%] object-contain object-left-top top-0 bottom-0 right-0 mr-[-10%] md:mr-[-15%] lg:mr-[-50%]" />
        </div>
      </div>
    </div>
  );
};

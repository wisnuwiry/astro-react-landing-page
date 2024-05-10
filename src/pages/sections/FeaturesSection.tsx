import ApiIcon from "../../components/basic/icon/ApiIcon";
import BudgettingIcon from "../../components/basic/icon/BudgettingIcon";
import OnboardingIcon from "../../components/basic/icon/OnboardingIcon";
import OnlineIcon from "../../components/basic/icon/OnlineIcon";
import { FeatureCard } from "../../components/card/FeatureCard";

export const FeaturesSection = ({}) => {
  const features = [
    {
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
      icon: <OnlineIcon />,
    },
    {
        title: "Simple Budgeting",
        description:
          "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
        icon: <BudgettingIcon />,
      },
      {
        title: "Fast Onboarding",
        description:
          "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
        icon: <OnboardingIcon />,
      },
      {
        title: "Open API",
        description:
          "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        icon: <ApiIcon />,
      },
  ];

  return (
    <div className="bg-secondary-background">
      <div className="max-w-wrapper m-auto flex flex-col py-[96px]">
        {/* Title */}
        <div className="title max-w-xl gap-4">
          <h3 className="text-[40px] font-light leading-[64px]">
            Why choose Easybank?
          </h3>
          <p className="text-disabled text-lg">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        {/* Items */}
        <div className="items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7 pt-[76px]">
          {features.map((e, i) => (
            <FeatureCard
              key={i}
              icon={e.icon}
              title={e.title}
              description={e.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

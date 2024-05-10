import type { ReactNode } from "react";
import { cn } from "../../utils/utils";

interface FeatureCardProps {
  className?: string;
  title: string;
  icon: ReactNode;
  description: string;
  onClick?: () => void;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, icon, description, onClick, className }) => {  
    return <div onClick={onClick}
  className={cn("p-2 flex flex-col rounded-lg flex-1 cursor-pointer", className)}
  >
    {icon}
    <h4 className="pt-10 pb-4 font-light text-2xl">{title}</h4>
    <p className="text-disabled text-base">{description}</p>
  </div>;
};

import type { ReactNode } from "react";
import { cn } from "../../utils/utils";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return <button 
  onClick={onClick} 
  className={cn(className, 'py-2 px-8 bg-gradient-to-br from-gradient-start to-gradient-end rounded-3xl text-white text-sm font-bold leading-7 transition-all hover:opacity-70')}
  >
    {children}
    </button>;
};

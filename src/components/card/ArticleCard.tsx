import { cn } from "../../utils/utils";

interface ArticleCardProps {
  className?: string;
  title: string;
  image: string;
  author: string;
  description: string;
  onClick?: () => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  image,
  author,
  description,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        className,
        "group rounded-md bg-white flex flex-col flex-1 cursor-pointer"
      )}
    >
        <img src={image} className="w-full rounded-t-md aspect-[25/20]"/>
        <div className="content p-6 flex flex-col gap-2">
            <p className="text-xs text-disabled">By {author}</p>
            <h4 className="text-base font-light group-hover:text-primary">{title}</h4>
            <p className="text-ellipse overflow-hidden max-h-20 text-sm text-disabled">{description}</p>
        </div>
    </div>
  );
};

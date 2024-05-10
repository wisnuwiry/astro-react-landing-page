import { ArticleCard } from "../../components/card/ArticleCard";

export const ArticleSection = ({}) => {
  const data = [
    {
      title: "Receive money in any currency with no fees",
      author: "Claire Robinson",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single",
      image: "/img/image-currency.jpg",
    },
    {
      title: "Treat yourself without worrying about money",
      author: "Wilson Hutton",
      description:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you",
      image: "/img/image-restaurant.jpg",
    },
    {
      title: "Take your Easybank card wherever you go",
      author: "Wilson Hutton",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you",
      image: "/img/image-plane.jpg",
    },
    {
      title: "Our invite-only Beta accounts are now live!",
      author: "Claire Robinson",
      description:
        "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site",
      image: "/img/image-confetti.jpg",
    },
  ];

  return (
    <div className="w-full py-[80px]">
      <div className="max-w-wrapper m-auto flex flex-col">
        <h3 className="text-[40px] font-light leading-[64px] pb-10">
          Latest Articles
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-7">
          {data.map((e, i) => (
            <ArticleCard
              title={e.title}
              description={e.description}
              image={e.image}
              author={e.author}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

import { ServiceCard } from "./serviceCard";
import { Carousel } from "./carousel";
import { cartogoryCardsData } from "@/constants/data";

export const MoreServices = () => {
  return (
    <div className="max-w-[1200px] max-md:max-w-full mx-auto flex flex-col text-center gap-10 mt-44 max-lg:mt-16 my-20 justify-between items-center">
      <h1 className="text-5xl max-md:text-4xl text-blue-500">
        We've more <b>services</b>
      </h1>
      <div className="max-md:block w-full hidden ">
        <Carousel />
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-10 w-full justify-around max-md:hidden">
        {cartogoryCardsData.map((e, i) => {
          return <ServiceCard key={i} src={e.imgSrc} title={e.title} />;
        })}
      </div>
    </div>
  );
};

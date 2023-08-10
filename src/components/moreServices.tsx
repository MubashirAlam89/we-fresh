import { ServiceCard } from "./serviceCard";
import { Carousel } from "./carousel";
import { cartogoryCardsData } from "@/constants/data";

export const MoreServices = ({ services }: any) => {
  return (
    <div className="max-w-[1200px] max-md:max-w-full mx-auto flex flex-col text-center gap-10 mt-44 max-lg:mt-16 my-20 justify-between items-center">
      <h1 className="text-5xl max-md:text-4xl text-blue-500">
        We've more <b>services</b>
      </h1>
      <div className="max-md:block w-full hidden ">
        <Carousel services={services} />
      </div>
      <div className="grid grid-cols-4 grid-rows-1 gap-10 w-full justify-around max-md:hidden">
        {services.map((e: any, i: number) => {
          return (
            <ServiceCard
              key={i}
              src={e.fields.item.fields.file.url}
              title={e.fields.item.fields.title}
            />
          );
        })}
      </div>
    </div>
  );
};

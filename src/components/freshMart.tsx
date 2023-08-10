import { weFreshCards } from "@/constants/data";
import Image from "next/image";

export const FreshMart = ({ freshMartImage }: any) => {
  return (
    <div className="max-w-[1200px] max-lg:flex-col max-lg:justify-center max-lg:items-center px-10 max-md:px-5 py-28 max-md:py-12 mx-auto flex justify-between items-center gap-20 max-xl:gap-10">
      {/* <div className="w-2/4 max-lg:w-full relative p-10"> */}
      <div className="w-[70%] max-xl:w-[60%] max-xl:mr-0  max-lg:w-3/4 max-md:w-full flex p-16 max-sm:p-10 -mr-16 justify-end max-lg:justify-center relative">
        <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center -z-10 ">
          <Image
            src={"/fresh-mart-section-images/circle.png"}
            alt="iphone"
            width={500}
            height={1000}
            className="w-full"
          />
        </div>
        <Image
          src={`https:${freshMartImage.freshMartImage.fields.file.url}`}
          alt={freshMartImage.freshMartImage.fields.title}
          width={500}
          height={1000}
          className="w-full"
        />
      </div>
      <div className="w-full flex flex-col justify-between items-center gap-4 ">
        {weFreshCards.map((e, i) => {
          return (
            <div
              key={i}
              className="fresh-mart-para cursor-pointer transition-all  px-10 max-md:p-5 py-8 rounded-lg text-xl  relative"
            >
              <div className="absolute flex justify-center items-center top-0 bottom-0 -left-2">
                <div className="triangle transition-all  max-lg:hidden w-10 h-10 rotate-45 "></div>
              </div>
              <h2 className="font-semibold text-2xl text-blue-500 mb-2">
                {e.title}
              </h2>
              <p>{e.para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

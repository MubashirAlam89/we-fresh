import { Input } from "./common-componenets/input";
import { Button } from "./common-componenets/button";
import Image from "next/image";

export const FindUs = () => {
  return (
    <div className="relative">
      <div className="max-w-[1200px] px-10 max-md:px-5 py-28 max-lg:mb-60 max-sm:mb-40 max-[500px]:mb-32 mx-auto flex justify-between items-center max-lg:flex-wrap max-lg:justify-center gap-20 max-sm:gap-32">
        <div className="absolute w-1/3 max-lg:w-[70%] max-md:w-3/4 -z-10  max-lg:bottom-0 max-sm:w-[85%] max-sm:bottom-8  right-0">
          <Image
            src={"/find-us-section-images/curve-right.png"}
            alt="find-us"
            width={300}
            height={200}
            className="w-full "
          />
        </div>

        <div className="w-2/4 max-lg:w-full max-lg:text-center">
          <h1 className="text-4xl text-blue-500">
            Find us in these <b>Area</b>
          </h1>
          <div className="flex justify-between gap-5 mt-5 items-stretch">
            <div className="w-full ">
              <Input placeholder="Enter your area" />
            </div>
            <div>
              <Button styles={""} content="Search" />
            </div>
          </div>
        </div>
        <div className="w-2/4 max-lg:w-full flex justify-center items-center">
          <div className="relative w-full">
            <Image
              src={"/find-us-section-images/find-us-img.png"}
              alt="find-us"
              width={300}
              height={200}
              className="w-full rounded-lg"
            />
            <div className="absolute -z-10 w-full -bottom-36 max-md:-bottom-28 -left-20 max-md:-left-5">
              <Image
                src={"/find-us-section-images/curve-right-bottom.png"}
                alt="find-us"
                width={300}
                height={200}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

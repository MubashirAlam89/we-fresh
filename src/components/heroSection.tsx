import { Input } from "./common-componenets/input";
import { Button } from "./common-componenets/button";
import Image from "next/image";
import { useState } from "react";

export const HeroSection = ({ heroData }: any) => {
  const [inpValue, setInpValue] = useState<string>("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[0-9]+$/.test(e.target.value) || e.target.value === "") {
      setInpValue(e.target.value);
    }
  };
  return (
    <div className="relative">
      {/* absolute curves */}
      {/* left curves */}
      <div className="absolute top-0 left-0 bottom-10 right-0 -z-10 max-lg:hidden ">
        <div className="  w-[52%] max-[1950px]:w-[55%] max-[1700px]:w-[58%] max-2xl:w-[60%] max-[1460px]:w-[65%] max-xl:w-[62%]">
          <Image
            src={"/hero-section-curves/left-curve.png"}
            alt=""
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        {/* left bottom curve */}
        <div className="absolute w-2/4 min-[1800px]:w-[55%] min-[1800px]:-left-10 min-[1800px]:-bottom-10  left-10 bottom-10 max-2xl:w-[40%] max-2xl:left-32 -z-10 ">
          <Image
            src={"/hero-section-curves/left-bottom-curve.png"}
            alt=""
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
      <div className="hidden max-lg:block absolute  w-[85%] -top-96 max-md:-top-28 max-[500px]:-top-4 max-[400px]:top-28   -z-10">
        <Image
          src={"/hero-section-curves/mobile-view-curve2.png"}
          alt=""
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <div className="absolute left-0 -top-[500px] max-md:-top-[300px]  max-sm:-top-40 max-[530px]:-top-16 max-[450px]:-top-0 max-[390px]:top-5  w-full hidden max-lg:block  -z-10">
        <Image
          src={"/hero-section-curves/mobile-view-curve.png"}
          alt=""
          width={500}
          height={500}
          className="w-full"
        />
      </div>

      {/* top curve */}
      <div
        className="absolute w-2/5 max-2xl:w-[55%] max-2xl:-top-10
        right-28 top-0 max-[1600px]:right-0 -z-10"
      >
        <Image
          src={"/hero-section-curves/top-curve.png"}
          alt=""
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      {/* right curve */}
      <div className="absolute right-0 top-32 w-[12%] max-2xl:w-[8%]  max-lg:hidden -z-10">
        <Image
          src={"/hero-section-curves/right-curve.png"}
          alt=""
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      {/* absolute curves */}

      {/* main heroSection start */}
      <div className="max-w-[1200px] max-lg:flex-wrap max-lg:justify-center mx-auto flex justify-between items-center gap-5 max-lg:gap-24 px-10 max-md:px-5 py-24 max-xl:py-16 max-lg:py-40 max-md:pb-16  ">
        {/* the smarter way section start */}
        <div className="w-full pr-20 max-xl:pr-10 max-lg:pr-0 -mt-10 max-lg:mt-0  text-white flex flex-col max-lg:items-center max-lg:text-center justify-between gap-7 max-xl:gap-5">
          <h1 className="text-6xl max-xl:text-5xl max-md:text-4xl">
            {heroData.heading1}
            <br />
            <span className="font-semibold">{heroData.heading2}</span>
          </h1>
          <div className="max-w-xl flex justify-between items-center gap-3">
            <div className="w-full">
              <Input
                maxLength={15}
                inpValue={inpValue}
                onChange={handleOnChange}
                placeholder="Enter phone number"
              />
            </div>
            <div>
              <Button styles={""} content="Send" />
            </div>
          </div>
          <p className="text-lg font-semibold">Available on</p>
          <div className="flex gap-3">
            <Image
              className="w-12"
              src={"/apple.png"}
              alt="apple"
              width={100}
              height={100}
            />
            <Image
              className="w-12"
              src={"/googleplay.png"}
              alt="googleplay"
              width={100}
              height={100}
            />
          </div>
        </div>
        {/* the smarter way section end */}
        <div className="w-[70%] max-xl:w-[60%] max-xl:mr-0  max-lg:w-3/4 max-md:w-full flex p-16 max-sm:p-10 -mr-16 justify-end max-lg:justify-center relative">
          <Image
            className="w-full"
            src={`https:${heroData.heroImage.fields.file.url}`}
            alt=""
            width={500}
            height={1000}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 flex  items-end  -z-10  w-full">
            <Image
              src={"/hero-section-curves/mobile-bg-curve.png"}
              alt=""
              width={500}
              height={500}
              className="w-full -mb-2 "
            />
          </div>
        </div>
      </div>
      {/* main heroSection end */}
    </div>
  );
};

import { useState } from "react";
import { Accordian } from "./accordian";
import { _accordianData } from "@/constants/data";
export const GotQuestions = () => {
  const [accordianData, setAccordianData] =
    useState<{ question: string; answer: string; open: boolean }[]>(
      _accordianData
    );

  const toggleAccordian = (index: number) => {
    setAccordianData(
      accordianData.map((acrdn, i) => {
        if (i === index) {
          acrdn.open = !acrdn.open;
        } else {
          acrdn.open = false;
        }

        return acrdn;
      })
    );
  };

  return (
    <div className="max-w-[1200px] max-md:w-full max-md:p-0 max-sm:py-10 mx-auto px-5 max-md:py-20 ">
      <div className="w-3/4 mx-auto max-lg:w-4/5 max-md:w-full">
        <div className="text-center">
          <h1 className="text-5xl font-semibold max-md:text-4xl text-blue-500 mb-4">
            Got questions?
          </h1>
          <p className="text-2xl">Perfect, we've got answers!</p>
        </div>
        <div className="accordianData flex flex-col gap-5 max-md:gap-0 mt-10">
          {accordianData.map((acrdn, i) => (
            <Accordian
              key={i}
              acrdn={acrdn}
              index={i}
              toggleAccordian={toggleAccordian}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

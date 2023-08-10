import { useState } from "react";
import { Accordian } from "./accordian";
import { _accordianData } from "@/constants/data";
export const GotQuestions = ({ GotQuestionsSection, faqs }: any) => {
  const [accordianData, setAccordianData] = useState<any>(faqs);
  // const [accordianData, setAccordianData] =
  //   useState<{ question: string; answer: string; open: boolean }[]>(
  //     _accordianData
  //   );

  const toggleAccordian = (index: number) => {
    setAccordianData(
      accordianData.map((acrdn: any, i: number) => {
        if (i === index) {
          acrdn.fields.isOpen = !acrdn.fields.isOpen;
        } else {
          acrdn.fields.isOpen = false;
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
            {GotQuestionsSection.title}
          </h1>
          <p className="text-2xl">{GotQuestionsSection.brief}</p>
        </div>
        <div className="accordianData flex flex-col gap-5 max-md:gap-0 mt-10">
          {accordianData.map((acrdn: any, i: number) => (
            <Accordian
              key={i}
              acrdn={acrdn.fields}
              index={i}
              toggleAccordian={toggleAccordian}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

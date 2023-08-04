import { NextPage } from "next";

interface props {
  acrdn: { question: string; answer: string; open: boolean };
  index: number;
  toggleAccordian: (index: number) => void;
}

export const Accordian: NextPage<props> = ({
  acrdn,
  index,
  toggleAccordian,
}) => {
  return (
    <div
      onClick={() => {
        toggleAccordian(index);
      }}
      key={index}
      className={`border-[1px] duration-500 max-md:border-x-0 max-md:border-t-0 max-md:rounded-none rounded-lg px-6 py-4 transition-all ${
        acrdn.open ? "border-blue-500 max-h-full" : "border-black/20  min-h-fit"
      }`}
    >
      <div
        className={`transition-all duration-200 font-semibold ${
          acrdn.open ? "text-blue-500" : "text-black"
        } flex justify-between items-center gap-5 text-2xl`}
      >
        {acrdn.question}
      </div>
      <div
        className={` origin-top text-xl" ${
          acrdn.open
            ? "max-h-[300px] transition-all duration-200 scale-y-100 mt-3"
            : "max-h-0 scale-y-0 "
        }`}
      >
        {acrdn.answer}
      </div>
    </div>
  );
};

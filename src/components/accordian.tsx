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
      className={`border-[1px] max-md:border-x-0 max-md:border-t-0 max-md:rounded-none rounded-lg px-6 py-4 transition-all  ${
        acrdn.open ? "border-blue-500 " : "border-black/20  "
      }`}
    >
      <div
        className={`transition-all  font-semibold ${
          acrdn.open ? "text-blue-500" : "text-black"
        } flex justify-between items-center gap-5 text-2xl`}
      >
        <h1>{acrdn.question}</h1>
      </div>
      <p
        className={`  text-xl transition-all duration-500   overflow-hidden " ${
          acrdn.open
            ? "max-h-[3000px]  ease-[cubic-bezier(1,0,1,0)] "
            : "max-h-0  ease-[cubic-bezier(0,1,0,1)]"
        }`}
      >
        {acrdn.answer}
      </p>
    </div>
  );
};

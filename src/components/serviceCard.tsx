import { NextPage } from "next";
import Image from "next/image";

interface props {
  src: string;
  title: string;
}

export const ServiceCard: NextPage<props> = ({ src, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 max-md:hover:scale-100 hover:scale-110 transition-all duration-300 hover:text-blue-500 cursor-pointer origin-top">
      <Image className="w-36 h-36" src={src} alt="" width={80} height={80} />
      <h2 className="text-xl">{title}</h2>
    </div>
  );
};

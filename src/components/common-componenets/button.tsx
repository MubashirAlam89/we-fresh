import { NextPage } from "next";
import React from "react";
interface props {
  content: string;
  styles: any;
}
export const Button: NextPage<props> = ({ content, styles }) => {
  return (
    <button
      style={{ ...styles }}
      className="bg-[#FFD476] font-semibold hover:opacity-90 max-md:hover:opacity-100 h-full text-black border-none py-2 px-10 text-xl rounded-md max-md:px-5 max-md:text-lg max-md:py-1"
    >
      {content}
    </button>
  );
};

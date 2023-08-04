import { NextPage } from "next";
import { type } from "os";
import React from "react";

interface props {
  placeholder: string;
  // type: string;
}

export const Input: NextPage<props> = ({ placeholder }) => {
  return (
    <input
      // type={type}
      type="text"
      placeholder={placeholder}
      className="focus:outline-none text-black rounded-md px-4 py-2 max-md:text-lg max-md:py-1 text-xl  w-full border-2  border-black/20"
    />
  );
};

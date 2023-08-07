import { NextPage } from "next";
import { type } from "os";
import React from "react";

interface props {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inpValue: string;
}

export const Input: NextPage<props> = ({ placeholder, onChange, inpValue }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={inpValue}
      className="focus:outline-none text-black rounded-md px-4 py-2 max-md:text-lg max-md:py-1 text-xl  w-full border-2  border-black/20"
    />
  );
};

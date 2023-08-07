import { kMaxLength } from "buffer";
import { NextPage } from "next";
import { type } from "os";
import React from "react";

interface props {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inpValue: string;
  maxLength: number;
}

export const Input: NextPage<props> = ({
  placeholder,
  onChange,
  inpValue,
  maxLength,
}) => {
  return (
    <input
      maxLength={maxLength}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={inpValue}
      className="focus:outline-none text-black rounded-md px-4 py-2 max-md:text-lg max-md:py-1 text-xl  w-full border-2  border-black/20"
    />
  );
};

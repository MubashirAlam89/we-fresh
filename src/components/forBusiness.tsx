import { Input } from "./common-componenets/input";
import { Button } from "./common-componenets/button";
import { useState } from "react";

export const ForBusiness = ({ forBusiness }: any) => {
  const [inpValue, setInpValue] = useState<string>("");
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^[0-9]+$/.test(e.target.value) || e.target.value === "") {
      setInpValue(e.target.value);
    }
  };
  return (
    <div className="bg-white py-20 px-10 max-md:px-5">
      <div className="max-w-2xl mx-auto flex flex-col gap-5 text-center">
        <h1 className="text-5xl max-md:text-4xl text-blue-500 ">
          <b> {forBusiness.title}</b>
        </h1>
        <p className="text-xl">{forBusiness.brief}</p>
        <div className="flex gap-2  w-full px-4">
          <div className="w-full">
            <Input
              inpValue={inpValue}
              maxLength={15}
              onChange={handleOnChange}
              placeholder="Enter Your Number"
            />
          </div>
          <div>
            <Button content="send" styles={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

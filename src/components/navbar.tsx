import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Button } from "./common-componenets/button";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <>
      <nav className="absolute max-lg:bg-[#96D5F0] top-0 left-0 right-0 z-40">
        <div className="relative max-w-[1200px] mx-auto flex justify-between items-center px-10 max-md:px-5 py-4">
          <Link href={"/"}>
            <Image
              className="w-36"
              src={"/logo.png"}
              alt="logo"
              width={547}
              height={207}
            />
          </Link>

          <ul className="text-xl text-[#14243c] font-semibold flex justify-between gap-8 items-center max-md:hidden">
            <Link href={"/"} className="hover:opacity-80 transition-all">
              Our App
            </Link>
            <Link href={"/"} className="hover:opacity-80 transition-all">
              For Business
            </Link>
            <Link href={"/"} className="hover:opacity-80 transition-all">
              About us
            </Link>
            <Link href={"/"} className="hover:opacity-80 transition-all">
              English
            </Link>
          </ul>
          <FaBars
            onClick={() => {
              setToggleMenu(true);
            }}
            className="text-white text-2xl hidden max-md:block"
          />
        </div>
      </nav>

      {/* mobile view nav */}
      <nav
        className={`hidden max-md:block fixed top-0 left-0 p-5 bottom-0 right-0 transition-all duration-300 bg-blue-500 z-50 ${
          toggleMenu ? "translate-y-0" : "-translate-y-full"
        } `}
      >
        <div className="header flex justify-between items-center ">
          <Link href={"/"}>
            <Image
              className="w-36"
              src={"/logo.png"}
              alt="logo"
              width={547}
              height={207}
            />
          </Link>
          <div
            onClick={() => {
              setToggleMenu(false);
            }}
            className="cancel cursor-pointer w-7 h-7"
            id="close-modal"
          >
            <div style={{ width: 3 }} className="relative mx-auto h-full">
              <div
                style={{ width: 2 }}
                className="absolute h-full bg-white transition-all hover:opacity-90 max-sm:hover:opacity-100 rotate-45"
              ></div>
              <div
                style={{ width: 2 }}
                className="absolute h-full bg-white transition-all hover:opacity-90 max-sm:hover:opacity-100 -rotate-45"
              ></div>
            </div>
          </div>
        </div>
        <ul className="w-full flex mt-8 flex-col justify-center text-xl  text-center text-white items-center">
          <Link href={"/"} className="py-4 border-t-[1px] w-full border-white">
            Our App
          </Link>
          <Link href={"/"} className="py-4 border-t-[1px] w-full border-white">
            For Business
          </Link>
          <Link href={"/"} className="py-4 border-t-[1px] w-full border-white">
            About us
          </Link>
          <Link href={"/"} className="py-4 border-y-[1px] w-full border-white">
            English
          </Link>
          <Button
            content="Sign up"
            styles={{
              width: "100%",
              marginTop: 30,
              paddingTop: 7,
              paddingBottom: 7,
            }}
          />
        </ul>
      </nav>
    </>
  );
};
{
  //
}

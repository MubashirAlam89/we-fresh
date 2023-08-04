import Image from "next/image";

export const Footer = () => {
  return (
    <div className="bg-[#F2F9FF] text-xl text-gray-500">
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5 py-20 grid grid-cols-5 grid-rows-1 max-md:flex max-md:flex-col gap-5 ">
        <div className="">
          <Image
            src={"/logo-2.png"}
            alt="logo"
            className="w-32"
            height={80}
            width={200}
          />
        </div>
        <div>
          <h2 className="font-semibold text-black">SERVICE AREA</h2>
          <ul className="flex flex-col gap-2 mt-4">
            <li className="cursor-pointer hover:opacity-80 max-md:hover:opacity-0 transition-all">
              Lorem ipsum dol
            </li>
            <li className="cursor-pointer hover:opacity-80 max-md:hover:opacity-0 transition-all">
              Psum dolor
            </li>
            <li className="cursor-pointer hover:opacity-80 max-md:hover:opacity-0 transition-all">
              Sum dolor
            </li>
            <li className="cursor-pointer hover:opacity-80 max-md:hover:opacity-0 transition-all">
              Lorem ipsum
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-black">SERVICE AREA</h2>
          <ul className="flex flex-col gap-2 mt-4">
            <li className="cursor-pointer hover:opacity-80 max-md:hover:opacity-0 transition-all">
              Story
            </li>
            <li className="cursor-pointer hover:opacity-80 max-md:hover:opacity-0 transition-all">
              Read our blog
            </li>
            <li className="cursor-pointer hover:opacity-80 max-md:hover:opacity-0 transition-all">
              Sign up to deliver
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-black">SERVICE AREA</h2>
          <ul className="flex flex-col gap-2 mt-4">
            <li className="cursor-pointer hover:opacity-80 max-md:hover:opacity-0 transition-all">
              Help centre
            </li>
            <li className="cursor-pointer hover:opacity-80 max-md:hover:opacity-0 transition-all">
              Read FAQs
            </li>
            <li className="cursor-pointer hover:opacity-80 max-md:hover:opacity-0 transition-all">
              Community
            </li>
            <li className="cursor-pointer hover:opacity-80 max-md:hover:opacity-0 transition-all">
              Security
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-center">Available on</h2>
          <div className="flex gap-5 justify-center items-center w-fit mx-auto mt-4">
            <Image
              className="w-12"
              src={"/apple.png"}
              alt="apple"
              width={100}
              height={100}
            />
            <Image
              className="w-12"
              src={"/googleplay.png"}
              alt="googleplay"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      <div className="px-5 text-center py-4 border-t-2 border-gray-200">
        <p>&copy; 2020 WeFresh, All Rights Reserved.</p>
      </div>
    </div>
  );
};

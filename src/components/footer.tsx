import Image from "next/image";

export const Footer = ({
  websiteLogos,
  footerSeviceArea,
  footerAbout,
  footerHelp,
  copyright,
  footer,
}: any) => {
  return (
    <div className="bg-[#F2F9FF] text-xl text-gray-500">
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5 py-20 grid grid-cols-5 grid-rows-1 max-md:flex max-md:flex-col gap-5 ">
        <div className="">
          <Image
            src={`https:${websiteLogos.secondLogo.fields.file.url}`}
            alt={websiteLogos.secondLogo.fields.title}
            className="w-32"
            height={80}
            width={200}
          />
        </div>
        {footer.map((e, i) => {
          return (
            <div>
              <h2 className="font-semibold text-black">{e.fields.heading}</h2>
              <ul className="flex flex-col gap-2 mt-4">
                {e.fields.footerLink.map((b: any, v: number) => {
                  return (
                    <li
                      key={v}
                      className="cursor-pointer hover:opacity-80 max-md:hover:opacity-100 transition-all"
                    >
                      {b.fields.link}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
        {/* <div>
          <h2 className="font-semibold text-black">SERVICE AREA</h2>
          <ul className="flex flex-col gap-2 mt-4">
            {footerSeviceArea.map((e: any, i: number) => {
              return (
                <li
                  key={i}
                  className="cursor-pointer hover:opacity-80 max-md:hover:opacity-100 transition-all"
                >
                  {e.fields.item}
                </li>
              );
            })}
          </ul>
        </div> */}
        {/* <div>
          <h2 className="font-semibold text-black">SERVICE AREA</h2>
          <ul className="flex flex-col gap-2 mt-4">
            {footerSeviceArea.map((e: any, i: number) => {
              return (
                <li
                  key={i}
                  className="cursor-pointer hover:opacity-80 max-md:hover:opacity-100 transition-all"
                >
                  {e.fields.item}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-black">ABOUT</h2>
          <ul className="flex flex-col gap-2 mt-4">
            {footerAbout.map((e: any, i: number) => {
              return (
                <li
                  key={i}
                  className="cursor-pointer hover:opacity-80 max-md:hover:opacity-100 transition-all"
                >
                  {e.fields.item}
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-black">HELP</h2>
          <ul className="flex flex-col gap-2 mt-4">
            {footerHelp.map((e: any, i: number) => {
              return (
                <li
                  key={i}
                  className="cursor-pointer hover:opacity-80 max-md:hover:opacity-100 transition-all"
                >
                  {e.fields.item}
                </li>
              );
            })}
          </ul>
        </div> */}
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
        <p>&copy; {copyright.copyright}</p>
      </div>
    </div>
  );
};

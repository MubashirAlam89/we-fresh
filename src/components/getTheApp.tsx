import Image from "next/image";

export const GetTheApp = () => {
  return (
    <div className="bg-[#F2F9FF] py-20  px-10 max-md:px-5">
      <div className="max-w-2xl mx-auto flex flex-col gap-5 text-center">
        <h1 className="text-5xl max-md:text-4xl text-blue-500 ">
          Ready to <b> Get the app?</b>
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel saepe
          ipsam dolorem quisquam ipsum. Ducimus asperiores quas.
        </p>
        <div className="grid grid-cols-2 grid-rows-1 w-2/4 mx-auto gap-4">
          <Image
            src={"/playstore.png"}
            alt="playstore"
            className="w-full"
            width={200}
            height={100}
          />
          <Image
            src={"/appstore.png"}
            alt="appstore"
            className="w-full"
            width={200}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

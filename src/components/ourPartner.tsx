import Image from "next/image";

export const OurPartner = ({ ourPartnersSection, partnerBrands }: any) => {
  return (
    <div className="relative">
      <div className="hidden max-[420px]:block absolute -top-20  w-full -z-10 ">
        <Image
          src={"/our-partners-section-images/circle-2.png"}
          alt="circle"
          width={300}
          height={300}
          className="w-full"
        />
      </div>
      <div className="max-w-[1200px] mx-auto flex max-lg:flex-col my-32 justify-between items-center gap-5 max-lg:gap-20 px-10 max-sm:mt-40 max-[420px]:mt-52 max-sm:px-5">
        <div className="w-2/4  max-lg:w-3/4 max-md:w-full relative">
          <div className="p-24 max-lg:p-20 max-[420px]:p-4 max-[420px]:pt-10 max-[375px]:pt-4 max-lg:text-center ">
            <h1 className="text-5xl max-sm:text-4xl  text-blue-500 mb-4">
              Our <b> {ourPartnersSection.title}</b>
            </h1>
            <p className="text-xl max-sm:text-lg">{ourPartnersSection.brief}</p>
          </div>
          <div className="absolute max-[420px]:hidden top-0 bottom-0 left-0 right-0 -z-10 flex justify-center items-center">
            <Image
              src={"/our-partners-section-images/circle.png"}
              alt="circle"
              width={300}
              height={300}
              className="w-full"
            />
          </div>
        </div>
        <div className="w-2/4 h-[500px] max-sm:h-[450px] relative flex items-center justify-center max-[420px]:mt-28 max-lg:w-full">
          <div className="w-40 h-40 max-md:w-32 max-md:h-32 p-6 absolute left-0 top-0 bg-white rounded-full drop-shadow-xl flex justify-center items-center">
            <Image
              // src={"/our-partners-section-images/7-Eleven.png"}
              src={`https:${partnerBrands[0].fields.partnerBrand.fields.file.url}`}
              alt={partnerBrands[0].fields.partnerBrand.fields.title}
              width={200}
              height={80}
              className="w-full"
            />
          </div>
          <div className="w-40 h-40 max-md:w-32 max-md:h-32 p-6 absolute right-0 top-10 bg-white rounded-full drop-shadow-xl flex justify-center items-center">
            <Image
              src={`https:${partnerBrands[1].fields.partnerBrand.fields.file.url}`}
              alt={partnerBrands[1].fields.partnerBrand.fields.title}
              width={200}
              height={80}
              className="w-full"
            />
          </div>
          <div className="w-40 h-40 max-md:w-32 max-md:h-32 p-6 bg-white rounded-full drop-shadow-xl flex justify-center items-center">
            <Image
              src={`https:${partnerBrands[2].fields.partnerBrand.fields.file.url}`}
              alt={partnerBrands[2].fields.partnerBrand.fields.title}
              width={200}
              height={80}
              className="w-full"
            />
          </div>
          <div className="w-40 h-40 max-md:w-32 max-md:h-32 p-6 absolute bottom-0 right-5 bg-white rounded-full drop-shadow-xl flex justify-center items-center">
            <Image
              src={`https:${partnerBrands[3].fields.partnerBrand.fields.file.url}`}
              alt={partnerBrands[3].fields.partnerBrand.fields.title}
              width={200}
              height={80}
              className="w-full"
            />
          </div>
          <div className="w-40 h-40 max-md:w-32 max-md:h-32 p-6 absolute left-0 bottom-5 bg-white rounded-full drop-shadow-xl flex justify-center items-center">
            <Image
              src={`https:${partnerBrands[4].fields.partnerBrand.fields.file.url}`}
              alt={partnerBrands[4].fields.partnerBrand.fields.title}
              width={200}
              height={80}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

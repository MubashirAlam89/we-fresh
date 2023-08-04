export const StillHaveQuestion = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-10 max-sm:px-5 py-28 max-md:py-16 ">
      <div className="w-3/4 mx-auto max-lg:w-4/5 max-md:w-full">
        <div className="text-center flex flex-col justify-center items-center gap-4">
          <h1 className="text-5xl max-md:text-4xl font-semibold text-blue-500">
            Still have questions?
          </h1>
          <p className="text-xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            sint cupiditate maiores, pariatur voluptas beatae.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-5 max-md:grid-cols-1 max-md:grid-rows-2 text-center mt-10 ">
          <div className="w-full rounded-md border-2 border-black/20 p-5 pt-28 max-sm:pt-20  flex items-end">
            <div className="w-full">
              <h2 className="text-2xl  font-semibold">+66 89595888</h2>
              <p className="text-xl text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
          <div className="w-full rounded-md border-2 border-black/20 p-5 pt-28  max-sm:pt-20  flex items-end">
            <div className="w-full">
              <h2 className="text-2xl  font-semibold">Support@service.com</h2>
              <p className="text-xl text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

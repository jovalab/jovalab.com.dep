import CommonCardProduct from "@/components/common/CardProduct";

export default function PageHomeServices() {
  return (
    <>
      <div className="flex px-14 h-[120vh] bg-white w-full justify-center items-center flex-col">
        <div className="flex justify-center text-center items-center flex-col w-[55%]">
          <span className="text-[40px] font-semibold text-black">
            Lorem Ipsum is simply 
          </span>
          <span className="text-base mt-4 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. er you want to do it yourself or get help
            from the experts.
          </span>
          <button className="mt-4 text-[#F5A8BC] bg-white border-[#F5A8BC] hover:bg-[#F5A8BC] hover:text-white border border-solid outline-none cursor-pointer w-[180px] py-2 flex justify-center items-center flex-row">
            <span className="font-medium text-sm">See all products</span>
            <i className="ri-arrow-right-line ml-1 text-base"></i>
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6 mt-16">
          <CommonCardProduct />
          <CommonCardProduct />
          <CommonCardProduct />
          <CommonCardProduct />
          <CommonCardProduct />
          <CommonCardProduct />
        </div>
      </div>
    </>
  );
}

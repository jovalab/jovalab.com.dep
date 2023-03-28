export default function PageHomeIntroduction() {
  return (
    <div className="flex bg-[#F5A8BC] w-full justify-center px-14 h-[88vh] items-center flex-col">
      <div className="w-full grid-cols-2 grid">
        <span className="text-[#1e2124] font-medium text-[45px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </span>
      </div>
      <div className="w-full mt-[8vh] grid-cols-5 grid">
        <div className="col-span-3 flex justify-center justify-start items-start">
          <div className="grid grid-cols-4">
            <span className="col-span-3 text-[#1e2124] leading-[33px] font-medium text-[18px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </span>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-start items-start text-start text-[black] leading-[33px] text-[17px]">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </p>
          <p>
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.
          </p>
        </div>
      </div>
    </div>
  );
}

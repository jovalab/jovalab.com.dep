import Image from "next/image";
import AppIcon from "@/assets/media/images/jovaLab.png"
export default function LayourAppbar() {
  return (
    <div className="bg-white fixed z-[1] px-7 w-full top-0 flex justify-between items-center h-[12vh]">
      <Image className="cursor-pointer" alt="jovalab icon" src={AppIcon} height={55} width={55}></Image>
    </div>
  );
}

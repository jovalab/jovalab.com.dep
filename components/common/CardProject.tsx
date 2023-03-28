import Image from "next/image";
import Project0Image from "@/assets/media/images/project0.jpg";

export default function CommonCardProject(props: {
  title: string;
  date: string;
  image?: string;
}) {
  return (
    <div className="cursor-pointer flex justify-start items-start flex-col">
      <Image
        src={props.image ? props.image : Project0Image}
        alt="image"
        className="w-full h-[40vh]"
      ></Image>
      <span className="font-semibold mt-4 text-white text-lg">{props.title}</span>
      <span className="mt-1 text-white">{props.date}</span>
    </div>
  );
}

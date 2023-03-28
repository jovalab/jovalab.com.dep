import CommonCardProject from "@/components/common/CardProject";
import { useState } from "react";

export default function PageHomeProjects() {
  const [projectData, setProjectData] = useState([
    {
      name: "Project 1.",
      date: "Mar 1, 2023",
      image: null,
    },
    {
      name: "Project 2.",
      date: "Jan 1, 2023",
      image: null,
    },
    {
      name: "Project 3.",
      date: "Des 1, 2023",
      image: null,
    },
    {
      name: "Project 4.",
      date: "Apr 1, 2023",
      image: null,
    },
  ]);
  return (
    <div className="flex px-14 h-[88vh] bg-black w-full justify-center items-center flex-col">
      <div className="flex justify-between w-full items-center flex-row">
        <span className="text-white text-[35px]">Latest projects</span>
        <span className="text-white text-sm underline underline-offset-4 cursor-pointer">
          View all projects
        </span>
      </div>
      <div className="w-full grid grid-cols-4 gap-6 mt-10">
        {projectData.map((item) => {
          return <CommonCardProject title={item.name} date={item.date} />;
        })}
      </div>
    </div>
  );
}

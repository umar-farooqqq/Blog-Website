import React from "react";
import { workData } from "@/assets/assets";
import Link from "next/link";
import { Send } from "lucide-react";

export default function Home({ textColor, bgColor }) {
  return (
    <div className={`w-full min-h-screen pt-24 mt-16 p-2 ${textColor}`}>
      <div id="" className="w-full px-4 py-10">
        <p className="text-center text-5xl font-semibold">Featureds Blogs</p>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">
          Explore insightful stories, ideas, and perspectives from passionate
          writers. Stay updated with the latest blogs handpicked just for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5">
          {workData.map((project, index) => (
            <Link key={index} href={`/blogdetail/${project.id}`}>
              <div
                key={index}
                style={{ backgroundImage: `url(${project.bgImage})` }}
                className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              >
                <div
                  className={`${bgColor} w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7`}
                >
                  <div>
                    <h2 className="font-semibold">{project.title}</h2>
                    <p className="text-xs text-justify mr-4 line-clamp-3 lg:line-clamp-4 ">
                      {project.description}
                    </p>
                  </div>
                  <div className="border rounded-full w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-lime-300 transition">
                    <button href="">{<Send className="w-6 m-1" />}</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

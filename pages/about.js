import { assets } from "@/assets/assets";
import Image from "next/image";
import { Download } from "lucide-react";

export default function Home({textColor, bgColor}) {
  return (
    <>
      <div className={`${bgColor} w-full min-h-screen pb-24`}>
        <div className={`${textColor} w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-32`}>
          <div>
            <Image
              src={assets.profile_pic}
              alt=""
              className="rounded-full w-32"
            />
          </div>
          <h3 className="flex items-center gap-2 text-xl md:text-2xl mb-3">
            {"Hi! I'm Umar Farooq"}
            <Image src={assets.hand_icon} alt="" className="w-6" />
          </h3>
          <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-serif font-semibold">
            Front-End Web Developer
          </h1>
          <p className="max-w-2xl mx-auto text-justify">
            {
              "I'm a passionate Front End developer who loves turning ideas into clean, responsive interfaces. I enjoy building modern websites with React, Next.js, and Tailwind CSS. Always learning, always improving my skills to create better user experiences."
            }
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a
              href="/UmarFarooq(CE).pdf"
              download
              className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
            >
              My Resume{" "}
              <Download className={`w-4 ${textColor}`} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

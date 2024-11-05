import React from "react";
import StudyBg from "../../../../public/images/webp/study-bg.webp";
import Image from "next/image";
import RoadMap from "../../../../public/images/svg/road-map.svg";
import Courses from "../../components/courses/coursesSection";

function Page() {
  return (
    <section className="pb-[50px] bg-white">
      <div className="w-full h-auto relative font-lexend">
        <Image
          src={StudyBg}
          fill="true"
          alt="Background"
          className="object-cover absolute z-0"
        />
        <div className="bg-gradient-to-br from-PURPLE-400/90  to-BLUE-700/90 w-[100%]  h-[100%] absolute  z-10 "></div>

        <div className="w-full h-[20px] bg-white absolute bottom-[20px] z-20" />
        <div className="w-full h-[10px] bg-white absolute bottom-[50px] z-20" />
        <div className="z-30 relative pt-[110px] md:pb-[100px] pb-[80px] md:px-[100px] px-[25px] md:mb-14 mb-7 ">
          <h1 className=" font-bold text-white  md:text-6xl text-4xl text-center md:mb-10 mb-5">
            Cursos{" "}
          </h1>
          <h2 className=" md:text-4xl text-2xl text-center text-white font-bold">
            Sembrando las semillas del éxito <br className="md:block hidden" />{" "}
            financiero desde la infancia.
          </h2>
        </div>
      </div>
      <div className="w-full flex justify-center  ">
        <Image
          src={RoadMap}
          alt="road map crefinex"
          className=" md:h-[700px] h-auto aspect-square"
        />
      </div>
      <Courses />
    </section>
  );
}

export default Page;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { MdOutlineClass } from "react-icons/md";

function CoursesCard({ cursosFiltrados, modulo }) {
  return (
    <div className="lg:px-20 md:px-10 px-0 md:py-10 pt-10 flex flex-col gap-6 lg:gap-6 border-x-2 border-b-2 rounded-b-3xl">
      <h3
        className={` font-bold lg:text-4xl md:text-3xl text-2xl text-BLUE-700 text-center md:text-left ${
          modulo === "todos" ? " hidden" : ""
        }`}
      >
        {modulo}
      </h3>
      {cursosFiltrados.map((curso) => (
        <div
          key={curso.id}
          className=" border-2  rounded-3xl w-full  flex lg:flex-row flex-col items-center px-[20px] py-[20px] md:gap-[30px] gap-5 shadow-lg shadow-slate-600"
        >
          <div className="aspect-video lg:w-[500px] outline outline-4  outline-BLUE-700 overflow-hidden rounded-2xl">
            <Image
              src={curso.cover}
              alt="miniatura del curso"
              width={1920}
              height={1080}
              priority={true}
            />
          </div>
          <div className=" text-BLUE-700 text-left w-full flex flex-col gap-[15px]">
            <h4 className=" lg:text-3xl md:text-2xl text-xl font-bold">
              {curso.title}
            </h4>
            <p
              className=" lg:text-base text-sm line-clamp-2"
              dangerouslySetInnerHTML={{ __html: curso.description }}
            />

            <div className=" flex md:w-[60%] justify-between md:text-base text-sm">
              <div
                className={`flex items-center gap-[5px] ${
                  curso.buyLink === "Proximamente" ? ` hidden` : "  "
                } `}
              >
                <FaRegClock />
                <p className="font-medium lg:text-base text-sm">
                  {curso.hours}
                </p>
              </div>
              <div
                className={`flex items-center gap-[5px] ${
                  curso.buyLink === "Proximamente" ? ` hidden` : "  "
                } `}
              >
                <MdOutlineClass />
                <p className={`font-medium md:text-base text-sm`}>
                  {curso.classesCantity}
                </p>
              </div>
              <p
                className={`font-semibold text-lg  ${
                  curso.buyLink !== "Proximamente" ? ` hidden` : "  "
                } `}
              >
                PROXIMAMENTE
              </p>
            </div>
            <div className=" flex w-full justify-end ${curso.cardColor}">
              <Link
                href={`/pages/courses/${curso.id}`}
                className={`text-center md:w-auto w-full bg-gradient-to-br from-PRIMARY-400 to-BLUE-700 px-10 text-white font-semibold 
                rounded-full py-[4px] outline outline-2 outline-BLUE-700 hover:scale-105 transition-all ease-in-out`}
              >
                {curso.card}
                Ver Mas
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoursesCard;

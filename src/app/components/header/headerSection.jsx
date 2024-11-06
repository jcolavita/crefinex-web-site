import React from "react";
import BlurryItem from "../decorations/blurryItem";
import Link from "next/link";

export default function Header() {
  return (
    <header
      id=""
      className="h-[600px] md:px-[100px] px-[25px] md:flex pt-[70px] bg-white font-lexend"
    >
      <div className="h-auto flex flex-co md:w-[55%] w-auto md:pr-10 text-center md:text-left items-center relative ">
        <BlurryItem className="bg-[#ffff58] right-14 bottom-5 " />
        <BlurryItem className="bg-MAGENTA-200 top-0 left-16 hidden md:block " />
        <BlurryItem className="bg-PURPLE-300 bottom-10 left-5 " />
        <div className=" h-auto relative z-10">
          <h1 className="text-BLUE-700 md:text-6xl text-4xl  font-bold md:pb-[25px] pb-[15px]">
            Un futuro <br /> Financiero Sólido Para tus Hijos
          </h1>
          <h6 className=" font-semibold md:text-xl text-lg md:pb-[25px] pb-[15px] text-BLUE-700">
            ¡Aprender finanzas nunca fue tan divertido!
          </h6>
          <button className=" md:w-[350px] w-full h-[55px] bg-gradient-to-br from-PURPLE-400 to-BLUE-700 rounded-lg md:hover:scale-105 transition-all ease-in-out duration-200 ">
            <Link
              className=" text-white text-lg font-medium"
              href={"/pages/courses"}
            >
              No te pierdas Nuestros cursos
            </Link>
          </button>
        </div>
      </div>
      <div className="  md:h-full  md:w-[45%] w-auto relative ">
        <div className=" hidden md:block w-[150px] h-[150px] animate-blob animation-delay-4000 rounded-3xl absolute left-0 top-5 bg-BLUE-100  shadow-slate-800 shadow-md"></div>
        <div className=" hidden md:block w-[170px] h-[170px] animate-blob animation-delay-3000 rounded-3xl absolute -right-4 -top-0 bg-PURPLE-200 shadow-slate-800 shadow-md "></div>
        <div className=" hidden md:block w-[150px] h-[150px] animate-blob animation-delay-2000 rounded-3xl absolute left-0 bottom-10 bg-MAGENTA-200 shadow-slate-800 shadow-md"></div>
        <div className=" hidden md:block w-[160px] h-[160px] animate-blob animation-delay-1000 rounded-3xl absolute right-0 bottom-5 bg-BLUE-200 shadow-slate-800 shadow-md"></div>
        <div
          className={`w-[320px] h-[350px] md:animate-blob rounded-3xl absolute right-0 left-0 md:top-0 md:bottom-0 top-5 m-auto
            bg-gradient-to-br from-PURPLE-400 to-BLUE-700 shadow-slate-800 shadow-md`}
        >
          <div className="bg-white text-BLUE-700 text-3xl w-[280px] h-[50px] rounded-xl  flex items-center absolute -bottom-5 right-0 left-0 m-auto shadow-md shadow-slate-800">
            <p className="w-full text-center">Yismary Arias</p>
          </div>
        </div>
      </div>
    </header>
  );
}

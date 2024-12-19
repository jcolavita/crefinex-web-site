"use client";
import React, { useEffect, useState } from "react";
import BlurryItem from "../decorations/blurryItem";
import Link from "next/link";
import Carousel from "../aboutUs/carousel";
import Image from "next/image";
import headerCarouselJson from "@/app/json/headerCarousel";

export default function Header() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(headerCarouselJson);
  }, []);

  return (
    <header
      id=""
      className="h-[600px] lg:px-[100px] md:px-[50px] px-[25px] md:flex lg:pt-[70px] pt-[70px] md:pt-0 bg-white font-lexend"
    >
      <div className="h-auto flex flex-co md:w-[55%] w-auto md:pr-10 text-center md:text-left items-center relative ">
        <BlurryItem className="bg-[#ffff58] lg:right-14 lg:bottom-5 md:-right-80 md:bottom-10 right-14 bottom-5 " />
        <BlurryItem className="bg-MAGENTA-200 lg:top-0 lg:left-16 hidden md:block md:left-60 md:top-8" />
        <BlurryItem className="bg-PURPLE-300 lg:bottom-10 lg:left-5 bottom-10 left-5 md:-left-10 md:bottom-32   " />
        <div className=" h-auto relative z-10">
          <h1 className="text-BLUE-700 lg:text-6xl md:text-5xl text-4xl font-bold md:pb-[25px] pb-[15px]">
            Un futuro <br /> Financiero Sólido Para tus Hijos
          </h1>
          <h6 className=" font-semibold lg:text-xl text-lg md:pb-[25px] pb-[15px] text-BLUE-700">
            ¡Aprender finanzas nunca fue tan divertido!
          </h6>
          <button className=" md:w-auto px-5 w-full py-3 bg-gradient-to-br from-PURPLE-400 to-BLUE-700 rounded-lg lg:hover:scale-105 transition-all ease-in-out duration-200 ">
            <Link
              className=" text-white text-lg font-medium"
              href={"/pages/courses"}
            >
              Adquiere nuestros cursos
            </Link>
          </button>
        </div>
      </div>
      <div className="  md:h-full  md:w-[45%] w-auto relative ">
        <div className=" hidden  lg:block w-[150px] h-[150px] animate-blob animation-delay-4000 rounded-3xl absolute left-0 top-5 bg-[#ffff58]  shadow-slate-800 shadow-md"></div>
        <div className=" hidden  lg:block w-[170px] h-[170px] animate-blob animation-delay-3000 rounded-3xl absolute -right-4 -top-0 bg-[#F58635] shadow-slate-800 shadow-md "></div>
        <div className=" hidden  lg:block w-[150px] h-[150px] animate-blob animation-delay-2000 rounded-3xl absolute left-0 bottom-10 bg-[#19B2EB] shadow-slate-800 shadow-md"></div>
        <div className=" hidden lg:block w-[160px] h-[160px] animate-blob animation-delay-1000 rounded-3xl absolute right-0 bottom-5 bg-[#94D30A] shadow-slate-800 shadow-md"></div>
        <div
          className={`lg:w-[320px] lg:h-[350px] w-[280px] h-[300px] lg:animate-blob rounded-3xl absolute right-0 left-0 md:top-0 md:bottom-0 top-5 m-auto
            bg-gradient-to-br from-PURPLE-100 to-BLUE-600 shadow-slate-800 shadow-md`}
        >
          <div className="w-full absolute bottom-0 ">
            {data && (
              <Carousel
                slidesToShow={1}
                dots={true}
                arrows={false}
                autoplay={true}
              >
                {data.map((item) => (
                  <Image
                    src={item.image}
                    key={item.id}
                    width={1319}
                    height={1500}
                    alt="Yismary Arias junto con esudiante de la acedemia"
                  />
                ))}
              </Carousel>
            )}
          </div>
          <div className="bg-white  text-BLUE-700 w-[80%]  h-[50px] rounded-xl  flex items-center absolute -bottom-5 right-0 left-0 m-auto shadow-md shadow-slate-800">
            <p className="w-full lg:text-2xl text-xl text-center z-50 font-bold">
              ¡SOY EXITOSO!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

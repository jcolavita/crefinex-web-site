"use client";
import Image from "next/image";
import React, { useState } from "react";
import ChevronDown from "../../../../public/images/svg/chevron.svg";
import MetodosPago from "../../../../public/images/webp/metodos-Pago.webp";

function CourseInfo({ ...props }) {
  const [collapse, setCollapse] = useState(false);

  return (
    <section className="font-lexend bg-white ">
      <div className="w-full h-auto relative shadow-lg shadow-slate-600">
        <Image
          src={props.background}
          fill="true"
          alt="Background"
          className="object-cover  absolute z-0"
        />
        <div className="bg-gradient-to-br   from-PURPLE-700/80 from-[45%] to-white/0 w-[100%]  h-[100%] absolute  z-10 "></div>
        <div className="flex ">
          <div className=" w-full pt-20 md:pb-10 pb-7 md:pt-32 z-30 relative  lg:px-[100px] md:px-[50px] px-[25px] flex flex-col items-center md:items-start">
            <h1
              dangerouslySetInnerHTML={{ __html: props.title }}
              className=" md:w-[55%] font-bold text-white  lg:text-6xl md:text-5xl text-4xl md:text-left text-center md:mb-5 mb-2 "
            />
            <p className="lg:w-[60%] text-white font-semibold lg:text-xl text-base md:text-left text-center md:mb-5 mb-2">
              {props.puv}
            </p>

            <div className=" flex md:w-[40%] w-full md:justify-between justify-center gap-x-4  md:mb-3 mb-3">
              <p className="lg:text-xl text-base font-semibold">
                {props.hours}
              </p>
              <p className="lg:text-xl text-base font-semibold">
                {props.classes}
              </p>
            </div>
            <h2 className=" md:text-4xl text-2xl md:text-left text-center text-white font-bold md:mb-5 mb-3">
              {props.price} $
            </h2>
            <a href={props.buyLink}>
              <button className=" lg:hover:scale-105 w-full md:w-auto transition-all ease-in-out  text-lg font-semibold bg-amber-400 px-6 md:py-3 py-2 rounded-xl text-black">
                Comprar Ahora
              </button>
            </a>
          </div>
          {/* <div className="w-[40%]  z-30 relative overflow-hidden hidden md:block">
            <Image
              src={props.yismary}
              alt="Yismary arias curso para leer"
              height={10}
              width={250}
              className=" absolute left-5 m-auto"
            />
          </div> */}
        </div>
      </div>
      <div className="px-[25px]  lg:px-[100px] md:px-[50px] lg:py-[50px] py-[25px] w-full text-BLUE-700">
        <p
          className=" w-full lg:text-base text-sm text-center mb-4"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
        <h3 className="text-center w-full font-bold lg:text-3xl md:text-2xl text-xl">
          Si identificas en tu hijo alguna de estas situaciones, este curso es
          para él:
        </h3>
        <div className=" w-full h-auto lg:my-[50px] my-[30px] flex lg:flex-row justify-center flex-col items-center gap-5">
          <div className="md:w-[50%] outline outline-4  outline-BLUE-700 rounded-md w-full">
            <Image
              src={props.cover}
              width={1920}
              height={1080}
              alt="kid reading"
              className=" w-full "
              priority={true}
            />
          </div>
          <div className="md:w-[50%] md:text-base text-sm  ">
            {props.target.map((item, index) => (
              <li className="pl-10 -indent-5 md:-inset-7" key={index}>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center mb-2">
          <a href={props.buyLink} target="blank">
            <button className="w-full md:w-auto lg:hover:scale-105 transition-all ease-in-out  text-lg font-semibold bg-amber-400 px-6 py-3 rounded-xl text-black">
              Comprar Ahora
            </button>
          </a>
        </div>
        <div className="w-full flex justify-center gap-2 text-BLUE-700  ">
          <Image
            src={MetodosPago}
            alt="metodos de pago"
            className=" w-56 rounded-sm"
          />
        </div>
      </div>
      {/* <div className="w-full ">
          <span
            className={`collapse-transition transition-all ease-in-out text-center w-full text-BLUE-700 mb-5 ${
              collapse ? " expanded" : " "
            }`}
          >
            <p className="text-center w-full text-BLUE-700 font-bold md:text-3xl px-[100px]">
              Lo que tu hijo lograra con este curso:
            </p>
            {props.moreInfo.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </span>{" "}
          <div className="w-full flex justify-center">
            <button
              onClick={() => setCollapse((prev) => !prev)}
              className="text-BLUE-700 mb-5 font-semibold flex  "
            >
              Mas informacion{" "}
              <Image
                src={ChevronDown}
                alt="icono"
                className={` transition-all ease-in-out duration-300${
                  collapse ? " rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div> */}
    </section>
  );
}

export default CourseInfo;

"use client";
import Image from "next/image";
import React, { useState } from "react";
import ChevronDown from "../../../../public/images/svg/chevron.svg";
import MetodosPago from "../../../../public/images/webp/metodos-Pago.webp";
import graduationkid from "../../../../public/images/graduation-kid.png";

function CourseInfo({ ...props }) {
  const [collapse, setCollapse] = useState(false);

  return (
    <section className="font-lexend bg-white tracking-wider ">
      <div className="w-full h-auto relative shadow-lg shadow-slate-600">
        <Image
          src={props.background}
          fill="true"
          alt="Background"
          className="object-cover  absolute z-0"
        />
        <div className="bg-gradient-to-r   from-black/65 from-[35%] to-white/0 w-[100%]  h-[100%] absolute  z-10 "></div>
        <div className="flex ">
          <div className=" w-full pt-20 md:pb-10 pb-7 md:pt-32 z-30 relative  lg:px-[100px] md:px-[50px] px-[25px] flex flex-col items-center md:items-start">
            <h1
              dangerouslySetInnerHTML={{ __html: props.title }}
              className="   md:w-[55%] font-bold text-white  lg:text-6xl md:text-5xl text-4xl md:text-left text-center md:mb-5 mb-2 "
            />
            <p className="lg:w-[60%] text-white font-semibold lg:text-xl text-base md:text-left text-center md:mb-5 mb-2">
              {props.puv}
            </p>

            <div className=" flex md:w-[40%] w-full md:justify-between justify-center gap-x-4  md:mb-3 mb-3">
              <p
                className={`lg:text-xl text-base font-semibold ${
                  props.buyLink === "Proximamente" ? ` hidden` : "  "
                } `}
              >
                {props.hours}
              </p>
              <p
                className={` lg:text-xl text-base font-semibold ${
                  props.buyLink === "Proximamente" ? ` hidden` : "  "
                } `}
              >
                {props.classes}
              </p>
            </div>
            <h2
              className={`md:text-4xl text-2xl md:text-left text-center text-white font-bold md:mb-5 mb-3${
                props.buyLink === "Proximamente" ? ` hidden` : "  "
              } `}
            >
              {props.price} $
            </h2>
            <a
              href={props.buyLink}
              className={`${
                props.buyLink === "Proximamente" ? ` hidden` : "  "
              } `}
            >
              <button className=" lg:hover:scale-105 w-full md:w-auto transition-all ease-in-out  text-lg font-semibold bg-amber-400 px-6 md:py-3 py-2 rounded-xl text-black">
                Comprar Ahora
              </button>
            </a>
            <h3
              className={`text-white text-left w-full font-bold lg:text-3xl md:text-2xl text-xl ${
                props.buyLink === "Proximamente" ? ` ` : " hidden "
              } `}
            >
              {props.buyLink}
            </h3>
          </div>
        </div>
      </div>
      <div className="px-[25px]  lg:px-[100px] md:px-[50px] lg:py-[50px] py-[25px] w-full text-BLUE-700">
        <p
          className=" w-full lg:text-lg text-sm text-center mb-4"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
        <h3 className="text-center w-full font-bold lg:text-3xl md:text-2xl text-xl">
          Si identificas en tu hijo alguna de estas situaciones, este curso es
          para él:
        </h3>
        <div className=" w-full h-auto lg:my-[50px] my-[30px] flex lg:flex-row justify-center flex-col items-center gap-5">
          <div className="md:w-[45%]  flex flex-col items-center gap-5  w-full">
            <Image
              src={props.cover}
              width={1920}
              height={1080}
              alt="kid reading"
              className=" w-full outline outline-4 outline-BLUE-700 rounded-md"
              priority={true}
            />
            <div className="flex flex-col gap-2 items-center">
              <a href={props.buyLink}>
                <button className=" lg:hover:scale-105 w-full md:w-auto transition-all ease-in-out  text-lg font-semibold bg-amber-400 px-6 md:py-3 py-2 rounded-xl text-black">
                  Comprar Ahora
                </button>
              </a>
              <Image
                src={MetodosPago}
                alt="metodos de pago"
                className=" w-56 rounded-sm"
              />
            </div>
          </div>
          <div className="md:w-[50%] md:text-base text-sm  ">
            {props.target.map((item, index) => (
              <li
                className="pl-10 -indent-5 text-lg md:-inset-7 tracking-wider"
                key={index}
              >
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </div>
        </div>
        <p className="text-center w-full text-BLUE-700 font-bold md:text-3xl px-[100px]">
          Lo que tu hijo lograra con este curso:
        </p>
        <br></br>
        <div className="w-full mx-20 flex items-center mb-10">
          <div>
            {props.moreInfo.map((item, index) => (
              <li key={index} className="text-lg">
                {item}
              </li>
            ))}
          </div>
          <Image
            src={graduationkid}
            alt="niño exitoso"
            className="w-[35%]"
          ></Image>
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
    </section>
  );
}

export default CourseInfo;

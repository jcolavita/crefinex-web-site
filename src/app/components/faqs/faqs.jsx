import Image from "next/image";
import React from "react";
import QuestionBg from "../../../../public/images/question-bg.png";
import Accordion from "./accordion";

function Faqs() {
  return (
    <section className="w-full h-auto relative font-lexend  ">
      <Image
        src={QuestionBg}
        alt="question background"
        fill={true}
        className=" object-cover absolute z-0"
      />

      <div className="bg-gradient-to-br   from-PURPLE-400/90  to-BLUE-700/90 w-[100%]  h-[100%] absolute  z-10 "></div>
      <div className="w-full h-[20px]  bg-white absolute bottom-[20px]  z-20" />
      <div className="w-full h-[10px]  bg-white absolute bottom-[50px]  z-20" />
      <div className="z-30 relative pt-[50px] md:pb-[100px] pb-[80px] md:px-[100px] px-[25px]">
        <h2 className=" font-bold text-white  md:text-5xl text-3xl text-center mb-10">
          Preguntas Frecuentes
        </h2>
        <Accordion />
      </div>
    </section>
  );
}

export default Faqs;

import React from "react";
import TestimonialCard from "./testimonialCard";
import Quotation from "../../../../../public/images/svg/quotation.svg";
import Image from "next/image";
import Student2 from "../../../../../public/images/webp/student2.webp";
import Student1 from "../../../../../public/images/webp/student1.webp";
import Representative1 from "../../../../../public/images/webp/representative1.webp";

export default function Testimonial() {
  return (
    <div className="  w-full md:h-[600x] h-auto bg-gradient-to-br from-PURPLE-400 to-BLUE-700   py-[30px]">
      <div className="md:flex md:px-[100px] px-[25px]">
        <div className=" md:w-[315px] w-full md:pr-[30px] pr-0 pt-5">
          <div className="h-[120px] w-[120px] bg-white  rounded-full hidden md:flex  items-center justify-center">
            <Image src={Quotation} alt="Quotatio icon" className="w-[80%] " />
          </div>
          <h4 className="md:text-3xl text-xl font-medium text-white md:w-[285px] text-center md:text-left md:mb-0 mb-10">
            Ellos son la prueba de nuestro esfuerzo
          </h4>
        </div>
        <div className="md:flex-row flex flex-col justify-between w-full items-center gap-y-8 SliderComponent">
          <TestimonialCard
            className="bg-BLUE-200 "
            name="Mayra Aguilaar"
            imagen={Representative1}
            testimonials="Ha sido un gran aprendizaje, ya no piensa de forma inmadura en cuanto a las finanzas."
          />
          <TestimonialCard
            className="bg-BLUE-200 "
            name="Ivian duran "
            testimonials=" Gracias en a los conocimientos que obtuve Crefinex pude desarrollar mi idea de emprendimiento."
            imagen={Student1}
          />
          <TestimonialCard
            className="bg-BLUE-200 "
            imagen={Student2}
            name="Guillermo Puente"
            testimonials=" He avanzado mucho, leo y hablo mejor y he aprendido mucho sobre finanzas, como gastos e inversiones."
          />
        </div>
      </div>
      <div className="w-full h-[10px] mt-[30px] bg-white" />
    </div>
  );
}

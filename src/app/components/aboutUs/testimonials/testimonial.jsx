import React from "react";
import Image from "next/image";
import Carousel from "../carousel";
import Quotation from "../../../../../public/images/svg/quotation.svg";
import TestimonialCard from "./testimonialCard";
import Student2 from "../../../../../public/images/webp/student2.webp";
import Student1 from "../../../../../public/images/webp/student1.webp";
import Representative1 from "../../../../../public/images/webp/representative1.webp";

export default function Testimonial() {
  return (
    <div className="  w-full md:h-[600x] h-auto bg-gradient-to-br from-PURPLE-400 to-BLUE-700   py-[30px]">
      <div className="md:flex md:px-[50px] lg:px-[100px] px-[25px]">
        <div className=" md:w-[55%] w-full  pt-5">
          <div className="lg:h-[120px] lg:w-[120px] h-[100px] w-[100px] bg-white  rounded-full hidden md:flex  items-center justify-center">
            <Image src={Quotation} alt="Quotatio icon" className="w-[80%] " />
          </div>
          <h4 className="lg:text-3xl md:text-2xl text-xl font-medium text-white md:w-80  text-center md:text-left md:mb-0 mb-10">
            Ellos son la prueba de nuestro esfuerzo
          </h4>
        </div>
        <div className="md:w-[50%] mx-[25px] md:mx-0  ">
          <Carousel slidesToShow={2} dots={true} arrows={true} autoplay={true}>
            <TestimonialCard
              className="bg-BLUE-200 contentContainer"
              name="Ivian duran "
              testimonials=" Gracias en a los conocimientos que obtuve Crefinex pude desarrollar mi idea de emprendimiento."
              imagen={Student1}
            />
            <TestimonialCard
              className="bg-BLUE-200 "
              name="Mayra Aguilaar"
              imagen={Representative1}
              testimonials="Ha sido un gran aprendizaje, ya no piensa de forma inmadura en cuanto a las finanzas."
            />
            <TestimonialCard
              className="bg-BLUE-200 "
              imagen={Student2}
              name="Guillermo Puente"
              testimonials=" He avanzado mucho, leo y hablo mejor y he aprendido mucho sobre finanzas, como gastos e inversiones."
            />
            <TestimonialCard
              className="bg-BLUE-200 "
              name="Mayra Aguilaar"
              imagen={Representative1}
              testimonials="Ha sido un gran aprendizaje, ya no piensa de forma inmadura en cuanto a las finanzas."
            />
          </Carousel>
        </div>
      </div>
      <div className="w-full h-[10px] mt-[30px] bg-white" />
    </div>
  );
}

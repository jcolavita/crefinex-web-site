"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Carousel from "../carousel";
import Quotation from "../../../../../public/images/svg/quotation.svg";
import TestimonialCard from "./testimonialCard";
import testimonialsJSON from "@/app/json/testimonials.json";

export default function Testimonial() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(testimonialsJSON);
  }, []);

  return (
    <div className="  w-full md:h-[600x] h-auto bg-gradient-to-br from-PRIMARY-400 to-BLUE-700   py-[30px]">
      <div className="md:flex md:px-[50px] lg:px-[100px] px-[25px]">
        <div className=" md:w-[40%] w-full  pt-5">
          <div className="lg:h-[120px] lg:w-[120px] h-[100px] w-[100px] bg-white  rounded-full hidden md:flex  items-center justify-center animate-wiggle animate-infinite animate-duration-[4000ms] animate-delay-200">
            <Image src={Quotation} alt="Quotatio icon" className="w-[80%] " />
          </div>
          <h4 className="lg:text-3xl md:text-2xl text-xl font-medium text-white md:w-80  text-center md:text-left md:mb-0 mb-10">
            Ellos son la prueba de nuestro esfuerzo
          </h4>
        </div>
        <div className="md:w-[60%] mx-[25px] md:mx-0  ">
          {data && (
            <Carousel
              slidesToShow={2}
              dots={true}
              arrows={true}
              autoplay={true}
            >
              {data.map((item) => (
                <TestimonialCard
                  name={item.name}
                  testimonials={item.testimonial}
                  imagen={item.image}
                  key={item.id}
                  bgColor={item.bgColor}
                />
              ))}
            </Carousel>
          )}
        </div>
      </div>
      <div className="w-full h-[10px] mt-[30px] bg-white" />
    </div>
  );
}

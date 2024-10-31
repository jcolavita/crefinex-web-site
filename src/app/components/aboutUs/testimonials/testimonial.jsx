import React from "react";
import TestimonialCard from "./testimonialCard";

export default function Testimonial() {
  return (
    <div className="  w-full md:h-[600x] h-auto bg-gradient-to-br from-PURPLE-400 to-BLUE-700 mt-[50px]  py-[30px]">
      <div className="md:flex md:px-[100px] px-[25px]">
        <div className=" md:w-[315px] w-full md:pr-[30px] pr-0 pt-5">
          <div className="h-[120px] w-[120px] bg-white  rounded-full"></div>
          <h4 className="md:text-3xl text-xl font-bold md:w-[285px] text-center md:text-left">
            Ellos son la prueba de nuestro esfuerzo
          </h4>
        </div>
        <div className="md:flex-row flex flex-col justify-between w-full items-center gap-y-10">
          <TestimonialCard
            className="bg-BLUE-200 "
            name="Abigail prescot"
            testimonials="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae vulputate libero. Maecenas tempor nisi."
          />
          <TestimonialCard
            className="bg-BLUE-200 "
            name="Abigail prescot"
            testimonials="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae vulputate libero. Maecenas tempor nisi."
          />
          <TestimonialCard
            className="bg-BLUE-200 "
            name="Abigail prescot"
            testimonials="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae vulputate libero. Maecenas tempor nisi."
          />
        </div>
      </div>
      <div className="w-full h-[10px] mt-[30px] bg-white" />
    </div>
  );
}

import Image from "next/image";
import React from "react";

function TestimonialCard({ ...props }) {
  return (
    <div className="md:w-[250px] md:h-[270px] w-[250px] h-[240px] rounded-3xl bg-white relative">
      <div className="h-[50%]">
        <div
          className={
            props.className +
            " w-[90%] h-[40%]  absolute rounded-t-2xl top-3 left-0 right-0 m-auto overflow-hidden"
          }
        >
          <p className="text-black md:text-xl font-medium text-base absolute top-10 left-2 w-5 ">
            {props.name}
          </p>
          <Image
            src={props.imagen}
            alt="persona del testimonio"
            className=" w-32 absolute right-0"
          />
        </div>
      </div>

      <div className="flex h-[50%] items-center">
        <p className="w-auto px-[6%] text-BLUE-700 md:text-base text-sm ">
          {props.testimonials}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;

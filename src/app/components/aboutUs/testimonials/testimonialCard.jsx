import Image from "next/image";
import React from "react";

function TestimonialCard({ ...props }) {
  return (
    <div
      className={
        "bg-" +
        props.bgColor +
        " lg:h-[270px]  lg:mx-8 md:mx-10 mx-5 h-[240px] rounded-3xl  relative outline outline-black outline-1 my-2  "
      }
    >
      <div className="h-[50%]">
        <div
          className={
            " bg-white w-[90%] h-[40%]  absolute rounded-t-2xl top-3 left-0 right-0 m-auto overflow-hidden"
          }
        >
          <p
            className={
              "text-" +
              props.bgColor +
              " lg:text-xl font-medium  text-base absolute top-10 left-2 w-5 text-black"
            }
          >
            {props.name}
          </p>
          <Image
            src={props.imagen}
            alt="persona del testimonio"
            className=" w-32 absolute right-0"
            width={1000}
            height={1500}
          />
        </div>
      </div>

      <div className="flex h-[50%] items-center">
        <p className="w-auto px-[6%] text-black lg:text-base text-sm ">
          {props.testimonials}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;

import React from "react";

function TestimonialCard({ ...props }) {
  return (
    <div className="w-[250px] h-[290px] rounded-3xl bg-white relative">
      <div className="h-[50%]">
        <div
          className={
            props.className +
            " w-[90%] h-[40%]  absolute rounded-t-2xl top-3 left-0 right-0 m-auto"
          }
        >
          <p className="text-black md:text-xl text-base absolute top-10 left-4 ">
            {props.name}
          </p>
        </div>
      </div>

      <p className="w-auto px-[5%] text-BLUE-700 md:text-base text-sm ">
        {props.testimonials}
      </p>
    </div>
  );
}

export default TestimonialCard;

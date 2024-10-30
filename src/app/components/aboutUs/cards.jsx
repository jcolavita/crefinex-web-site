import React from "react";

export default function Cards({ children, ...props }) {
  return (
    <div
      className={
        props.className +
        " md:h-[420px] md:w-[350px] h-[340px] w-[270px]  bg-white md:rounded-3xl rounded-xl relative shadow-md shadow-slate-700 mb-3 md:mb-0"
      }
    >
      <div
        className={
          props.bgColor +
          " relative w-full h-[40%] md:rounded-t-3xl rounded-t-xl"
        }
      >
        <div className="absolute w-[80%] h-[80%] outline-[4px] outline bottom-0 left-0 right-0 m-auto outline-white  rounded-t-lg">
          <div className="w-[48%] h-[100%] outline absolute top-16  left-0 right-0 m-auto outline-white rounded-full ">
            <div className=" w-[88%] h-[87%] bg-white rounded-full  absolute shadow-md shadow-slate-800 top-0 left-0 bottom-0 right-0 m-auto">
              <div
                className={
                  props.circleOutline +
                  " w-[80%] h-[80%] outline rounded-full absolute top-0 left-0 bottom-0 right-0 m-auto"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-[24px] px-[12px] md:pt-[100px] pt-[70px] text-center">
        {children}
      </div>
    </div>
  );
}

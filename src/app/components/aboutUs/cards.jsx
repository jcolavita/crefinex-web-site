import Image from "next/image";
import React from "react";

export default function Cards({ children, ...props }) {
  return (
    <div className=" lg:h-[390px] lg:max-w-[310px] lg:mx-11 md:mx-56 mx-12 my-[1px] h-[340px] max-w-[270px] text-BLUE-700 bg-white md:rounded-3xl rounded-xl relative shadow-sm ourline outline-slate-600 shadow-slate-700 ">
      <div
        className={
          props.bgColor +
          " relative w-full h-[40%] md:rounded-t-3xl rounded-t-xl "
        }
      >
        <div className="absolute w-[80%] h-[80%] outline-[4px] outline bottom-0 left-0 right-0 m-auto outline-white  rounded-t-lg">
          <div className="w-[48%] h-[100%] outline absolute top-16  left-0 right-0 m-auto outline-white rounded-full ">
            <div className=" w-[88%] h-[87%] bg-white rounded-full  absolute shadow-md shadow-slate-800 top-0 left-0 bottom-0 right-0 m-auto">
              <div
                className={
                  props.circleOutline +
                  " w-[80%] h-[80%] outline rounded-full absolute top-0 left-0 bottom-0 right-0 m-auto flex justify-center"
                }
              >
                <Image src={props.icon} alt="Icon" className=" w-[80%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-[15px] px-[10px] md:pt-[70px] pt-[70px] text-center ">
        <h6 className=" lg:text-xl text-lg pb-[10px] font-semibold">
          {props.title}
        </h6>
        <p className="text-sm lg:text-base">{props.text}</p>
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";
import BlurryItem from "../../decorations/blurryItem";
import Pilar from "../../../../../public/images/svg/pilar.svg";

function Pilars({ ...props }) {
  return (
    <div className=" text-black text-center mt-10 flex flex-col items-center max-w-[350px]">
      <BlurryItem className={props.className + " z-0 "} />

      <div className="z-10 flex flex-col items-center">
        <Image src={props.number} alt="icono con el numero 1" width={100} />
        <div className=" flex w-full h-24  items-center justify-center">
          <h4 className="font-medium lg:text-3xl md:text-xl text-xl my-4 ">
            {props.title}
          </h4>
        </div>

        <p className=" lg:text-base text-sm mb-2">{props.description}</p>
        <Image src={Pilar} alt="icono con el numero 1" width={150} />
      </div>
    </div>
  );
}

export default Pilars;

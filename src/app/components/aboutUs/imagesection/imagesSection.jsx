import React from "react";
import Class1 from "../../../../../public/images/class.png";
import Class2 from "../../../../../public/images/class2.png";
import Class3 from "../../../../../public/images/class3.png";
import Class4 from "../../../../../public/images/class4.png";
import Image from "next/image";

function ImagesSection() {
  return (
    <div className="pt-10 pb-4 mt-[50px] bg-gradient-to-br from-PURPLE-400 to-BLUE-700">
      <div className="flex flex-col gap-y-2">
        <div className="flex gap-5 justify-between">
          <Image
            src={Class1}
            alt="Crefinex en clases"
            className=" rounded-md"
            width={100}
          />
          <Image
            src={Class1}
            alt="Crefinex en clases"
            className=" rounded-md"
          />
          <Image
            src={Class1}
            alt="Crefinex en clases"
            className=" rounded-md"
          />
          <Image
            src={Class1}
            alt="Crefinex en clases"
            className=" rounded-md"
          />
        </div>
        <div className="bg-white h-[10px] w-full"></div>
        <div className="bg-white h-[15px] w-full"></div>
      </div>
    </div>
  );
}

export default ImagesSection;

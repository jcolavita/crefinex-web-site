import React from "react";
import Number1 from "../../../../../public/images/1.png";
import Number2 from "../../../../../public/images/2.png";
import Number3 from "../../../../../public/images/3.png";
import Pilars from "./pilars";

export default function PilarSection() {
  return (
    <div className="w-full  mt-[25px]  font-lexend bg-white">
      <div className="flex flex-col gap-2">
        <div className="w-full h-5 bg-gradient-to-br from-PRIMARY-500 to-BLUE-700"></div>
        <div className="w-full h-2 bg-gradient-to-br from-PRIMARY-500 to-BLUE-700"></div>
      </div>
      <div className="lg:px-[100px] md:px-[50px] px-[25px] pt-5  w-full  ">
        <h3 className="text-2xl lg:text-4xl md:text-3xl font-medium text-center text-BLUE-700">
          Nuestros pilares
        </h3>
        <div className="flex md:gap-10 lg:gap-5 md:flex-row flex-col items-center  w-full md:justify-between">
          <Pilars
            number={Number1}
            title={"Mentalidad y bienestar"}
            description="No solo enseñamos a los jóvenes a manejar su dinero, sino que
              también les ayudamos a desarrollar una relación sana con él."
            className=" bg-PRIMARY-300/40"
          />

          <Pilars
            number={Number2}
            title={"Liderazgo"}
            description=" Nuestro enfoque en el liderazgo desarrolla habilidades esenciales
              para alcanzar el éxito financiero y personal a largo plazo."
            className=" bg-YELLOW-500/60"
          />
          <Pilars
            number={Number3}
            title={"Finanzas personales e inversión."}
            description="Domina tu dinero, construye tu futuro. Descubre los secretos de
              las finanzas personales e inversión en nuestra academia."
            className=" bg-MAGENTA-200/60"
          />
        </div>
      </div>
    </div>
  );
}

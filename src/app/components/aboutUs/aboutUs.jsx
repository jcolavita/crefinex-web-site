import Image from "next/image";
import React from "react";
import Grupo from "../../../../public/images/crefinex-grupo.JPG";
import Cards from "./cards";

function AboutUs() {
  return (
    <section className=" bg-gradient-to-b from-white to-BLUE-100 w-full font-lexend px-[25px] md:px-[100px] pt-[150px] md:pt-[50px]">
      <h2 className=" text-center text-BLUE-700  text-3xl md:text-5xl font-bold mb-[15px] md:mb-[30px]">
        ?Quienes Somos?
      </h2>
      <h3 className="text-xl md:text-3xl font-medium text-BLUE-700 text-center mb-[15px] md:mb-[30px]">
        Comprometidos con la construcción de un futuro mejor
      </h3>
      <div className="w-full flex justify-center mb-[15px] md:mb-[30px]">
        <Image
          src={Grupo}
          alt="Grupo de clases Crefinex"
          className="h-[716px w-[1160px] aspect-video rounded-3xl"
        />
      </div>

      <p className="text-center text-base md:text-lg md:pb-[60px] pb-[30px] text-BLUE-700">
        En Crefinex creemos en la educación financiera como un pilar fundamental
        para el desarrollo personal y profesional, con el objetivo de Empoderar
        a los jovenes con los conocimientos necesarios para desenvolverse en el
        mundo actual.
      </p>
      <div className=" md:w-full flex justify-center  md:justify-between  text-BLUE-700">
        <div className="md:w-full md:flex md:justify-between">
          <Cards bgColor=" bg-PURPLE-400" circleOutline="outline-PURPLE-400">
            <p className=" md:text-2xl text-lg pb-[10px]">
              Aprender Divirtiendose
            </p>
            <p className="text-sm md:text-base">
              Convierte el dinero en un juego. Desde niños, fomentamos hábitos
              financieros saludables para un futuro brillante
            </p>
          </Cards>
          <Cards bgColor=" bg-PURPLE-400" circleOutline="outline-PURPLE-400">
            <p className=" md:text-2xl text-lg pb-[10px]">
              Aprender Divirtiendose
            </p>
            <p className="text-sm md:text-base">
              Convierte el dinero en un juego. Desde niños, fomentamos hábitos
              financieros saludables para un futuro brillante
            </p>
          </Cards>
          <Cards bgColor=" bg-PURPLE-400" circleOutline="outline-PURPLE-400">
            <p className=" md:text-2xl text-lg pb-[10px]">
              Aprender Divirtiendose
            </p>
            <p className="text-sm md:text-base">
              Convierte el dinero en un juego. Desde niños, fomentamos hábitos
              financieros saludables para un futuro brillante
            </p>
          </Cards>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

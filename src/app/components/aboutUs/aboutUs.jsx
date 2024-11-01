import Image from "next/image";
import React from "react";
import Grupo from "../../../../public/images/crefinex-grupo.JPG";
import Cards from "./cards";
import Testimonials from "./testimonials/testimonial";
import Calculator from "../../../../public/images/calculator.svg";
import Global from "../../../../public/images/global.svg";
import Mind from "../../../../public/images/mind.svg";

function AboutUs() {
  return (
    <section className=" bg-gradient-to-b from-white to-BLUE-100 w-full font-lexend  pt-[150px] md:pt-[50px]">
      <div className="px-[25px] md:px-[100px]">
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
            className=" w-[1160px] aspect-video rounded-3xl"
          />
        </div>
        <p className="text-center text-base md:text-lg md:pb-[60px] pb-[30px] text-BLUE-700">
          En Crefinex creemos en la educación financiera como un pilar
          fundamental para el desarrollo personal y profesional, con el objetivo
          de Empoderar a los jovenes con los conocimientos necesarios para
          desenvolverse en el mundo actual.
        </p>
        <div className=" md:w-full flex justify-center  md:justify-between  text-BLUE-700">
          <div className="md:w-full md:flex-row flex flex-col md:justify-between gap-y-10">
            <Cards
              bgColor=" bg-PURPLE-400"
              circleOutline="outline-PURPLE-400"
              title="Aprender Divirtiendose"
              text="Convierte el dinero en un juego. Desde niños, fomentamos hábitos
                financieros saludables para un futuro brillante"
              icon={Global}
            ></Cards>
            <Cards
              bgColor=" bg-PURPLE-400"
              circleOutline="outline-PURPLE-400"
              title="Aprender Divirtiendose"
              text="Convierte el dinero en un juego. Desde niños, fomentamos hábitos
                financieros saludables para un futuro brillante"
              icon={Calculator}
            ></Cards>
            <Cards
              bgColor=" bg-PURPLE-400"
              circleOutline="outline-PURPLE-400"
              title="Aprender Divirtiendose"
              text="Convierte el dinero en un juego. Desde niños, fomentamos hábitos
                financieros saludables para un futuro brillante"
              icon={Mind}
            ></Cards>
          </div>
        </div>
      </div>

      <Testimonials />
      <div className="md:h-[130px] py-5 md:py-5 w-full md:flex-row flex flex-col-reverse justify-between md:px-[100px] px-[25px] bg-white items-center">
        <div className=" md:w-[300px] w-full">
          <p className="md:text-5xl text-3xl font-bold text-BLUE-700 mb-[10px] text-center">
            +1000
          </p>
          <p className=" text-BLUE-700 text-center md:text-base text-sm">
            Estudiantes inscritos
          </p>
        </div>
        <div className="md:w-1 w-full h-1 md:h-[75%] rounded-full bg-gradient-to-r from-white from-10% via-BLUE-700 via-50% to-white to-90% my-5" />
        <div className=" md:w-[300px] w-full">
          <p className="md:text-5xl text-3xl font-bold text-BLUE-700 mb-[10px] text-center">
            +500
          </p>
          <p className=" text-BLUE-700 text-center md:text-base text-sm">
            Futuros lideres preparados
          </p>
        </div>
        <div className="md:w-1 w-full h-1 md:h-[75%] rounded-full bg-gradient-to-r from-white from-10% via-BLUE-700 via-50% to-white to-90% my-5" />
        <div className=" md:w-[300px] w-full">
          <p className="md:text-5xl text-3xl font-bold text-BLUE-700 mb-[10px] text-center">
            Desde 2020
          </p>
          <p className=" text-BLUE-700 text-center md:text-base text-sm">
            Impulsando el cambio
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

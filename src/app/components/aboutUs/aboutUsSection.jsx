import Image from "next/image";
import React from "react";
import Grupo from "../../../../public/images/webp/crefinex-grupo.webp";
import Cards from "./cards";
import Testimonials from "./testimonials/testimonial";
import Calculator from "../../../../public/images/svg/calculator.svg";
import Global from "../../../../public/images/svg/global.svg";
import Mind from "../../../../public/images/svg/mind.svg";
import Pilars from "./pilars/pilarsSection";
import Carousel from "./carousel";

function AboutUs() {
  return (
    <section
      id="about-us"
      className=" bg-gradient-to-b from-white to-BLUE-100 w-full font-lexend  pt-[150px] lg:pt-[50px] md:pt-[0px]"
    >
      <div className="px-[25px] md:px-[50px] lg:px-[100px] pb-5">
        <h2 className=" text-center text-BLUE-700  text-3xl lg:text-5xl md:text-4xl font-bold mb-[15px] md:mb-[30px]">
          ¿Quiénes Somos?
        </h2>
        <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-BLUE-700 text-center mb-[15px] md:mb-[30px]">
          Comprometidos con la construcción de un futuro mejor
        </h3>
        <div className="w-full flex justify-center mb-[15px] lg:mb-[30px]">
          <Image
            src={Grupo}
            alt="Grupo de clases Crefinex"
            className=" w-[1160px] aspect-video rounded-3xl"
          />
        </div>
        <p className="text-center text-sm lg:text-lg lg:pb-[60px] pb-[30px] text-BLUE-700">
          En Crefinex creemos en la educación financiera como un pilar
          fundamental para el desarrollo personal y profesional, con el objetivo
          de Empoderar a los jóvenes con los conocimientos necesarios para
          desenvolverse en el mundo actual.
        </p>

        <div className="">
          <Carousel
            slidesToShow={3}
            dots={false}
            arrows={false}
            autoplay={false}
          >
            <Cards
              bgColor=" bg-[#94D30A] "
              circleOutline="outline-PURPLE-400"
              title="Empoderando  líderes"
              text="Empoderamos a jóvenes para un futuro financiero sólido, enseñándoles a gestionar su dinero desde niños."
              icon={Global}
            ></Cards>
            <Cards
              bgColor=" bg-[#F58635]"
              circleOutline="outline-PURPLE-400"
              title="Herramientas para el éxito"
              text="Ofrecemos herramientas prácticas para que los jóvenes dominen las finanzas y alcancen sus metas."
              icon={Calculator}
            ></Cards>
            <Cards
              bgColor=" bg-[#19B2EB] "
              circleOutline="outline-PURPLE-400"
              title="Aprender Divirtiéndose"
              text="Convierte el dinero en un juego. Desde niños, fomentamos hábitos
                      financieros saludables para un futuro brillante"
              icon={Mind}
            ></Cards>
          </Carousel>
        </div>
      </div>
      <Pilars />

      <Testimonials />
      <div className="md:h-[130px] py-5 md:py-5 w-full md:flex-row flex flex-col-reverse justify-between lg:px-[100px] md:px-[50px] px-[25px] bg-white items-center">
        <div className=" md:w-[300px] w-full">
          <p className="md:text-4xl lg:text-5xl text-3xl font-bold text-BLUE-700 mb-[10px] text-center">
            +1000
          </p>
          <p className=" text-BLUE-700 text-center lg:text-base text-sm">
            Estudiantes inscritos
          </p>
        </div>
        <div className="md:w-1 w-full h-1 md:h-[75%] rounded-full bg-gradient-to-r from-white from-10% via-BLUE-700 via-50% to-white to-90% my-5" />
        <div className=" md:w-[300px] w-full">
          <p className="md:text-4xl lg:text-5xl text-3xl font-bold text-BLUE-700 mb-[10px] text-center">
            +500
          </p>
          <p className=" text-BLUE-700 text-center lg:text-base text-sm">
            Futuros líderes reparados
          </p>
        </div>
        <div className="md:w-1 w-full h-1 md:h-[75%] rounded-full bg-gradient-to-r from-white from-10% via-BLUE-700 via-50% to-white to-90% my-5" />
        <div className=" md:w-[300px] w-full">
          <p className="md:text-4xl lg:text-5xl text-3xl font-bold text-BLUE-700 mb-[10px] text-center">
            Desde 2020
          </p>
          <p className=" text-BLUE-700 text-center lg:text-base text-sm">
            Impulsando el cambio
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;

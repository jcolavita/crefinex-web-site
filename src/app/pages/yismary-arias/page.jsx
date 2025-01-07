import React from "react";
import Facebook from "../../../../public/images/webp/facebook.webp";
import Tiktok from "../../../../public/images/webp/tiktok.webp";
import Instagram from "../../../../public/images/webp/instagram.webp";
import Image from "next/image";
import Yismary from "../../../../public/images/webp/Yismary.webp";

function Page() {
  return (
    <section className="bg-white md:flex lg:gap-x-14 gap-x-5 pb-[50px] pt-[120px] w-full lg:px-[100px] md:px-[50px] px-[25px] font-lexend">
      <div className=" flex  justify-center pb-[50px] md:pb-0">
        <div
          className={`w-[320px] h-[350px] relative rounded-3xl  
            bg-gradient-to-br from-PRIMARY-400 to-BLUE-700 shadow-slate-800 shadow-md`}
        >
          <Image
            src={Yismary}
            alt="Yismary Arias"
            className="absolute bottom-0 left-0 right-0 m-auto h-[500px] w-auto"
          />
          <div className="bg-white shadow-md shadow-slate-600 w-[280px] h-[50px] rounded-xl gap-x-10  flex items-center justify-center absolute -bottom-5 right-0 left-0 m-auto ">
            <a
              href="https://www.facebook.com/crefinex?mibextid=LQQJ4d"
              target="blank"
            >
              <Image
                src={Facebook}
                alt="facebook icon"
                className="w-10 hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer"
              />
            </a>
            <a
              href="https://www.tiktok.com/@yismary_arias?_t=8r9KsqiKsjd&_r=1"
              target="blank"
            >
              <Image
                src={Tiktok}
                alt="tiktok icon"
                className="w-10 hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer"
              />
            </a>
            <a
              href="https://www.instagram.com/yismary_arias?igsh=MW53YWh1MjY0OTNzOQ%3D%3D&utm_source=qr"
              target="blank"
            >
              <Image
                src={Instagram}
                alt="tiktok icon"
                className="w-10 hover:scale-110 transition-all ease-in-out duration-200 cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <div className=" text-BLUE-700 flex flex-col gap-y-5 md:gap-y-10">
        <div className="flex flex-col md:gap-y-5 gap-y-2 items-center  md:items-start ">
          <h1 className="lg:text-6xl md:text-5xl text-4xl font-semibold md:text-left text-center">
            Yismary Arias
          </h1>
          <div className="ml-2 outline outline-2 outline-BLUE-200 shadow-md shadow-slate-600 w-[250px] rounded-sm ">
            <p className="lg:text-lg text-base font-light text-center">
              Fundadora de CREFINEX
            </p>
          </div>
        </div>
        <div className="flex flex-col md:gap-y-5 gap-y-2 text-center md:text-left ">
          <p className="indent-5 text-sm lg:text-base">
            Lidera la educación financiera de más de 1000 niños y jóvenes
            venezolanos, empoderaos con herramientas para gestionar sus
            emociones y finanzas.
          </p>
          <p className="indent-5 text-sm lg:text-base">
            Su experiencia la ha llevado a compartir sus conocimientos en
            instituciones internacionales como la Universidad Tecnológica de
            Panamá. Convencida de que la educación financiera desde la infancia
            es clave para el éxito futuro, Arias prioriza la fe, la familia y
            los valores como pilares fundamentales en su labor.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Page;

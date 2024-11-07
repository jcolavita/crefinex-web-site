import React from "react";
import CrefinexLogo from "../app/components/logo/crefinexLogo";
import Link from "next/link";

function Error() {
  return (
    <div className="bg-white  lg:px-[200px] md:px-[50px] px-[25px] w-full  font-lexend lg:pb-28 pb-14 lg:pt-28 pt-24">
      <div className="md:flex w-full items-center gap-x-20  justify-center">
        <div className="   flex flex-col items-center">
          <CrefinexLogo fill={"#14093E"} className=" md:w-[60%] w-full" />
          <h2 className="text-BLUE-700 lg:text-5xl md:text-4xl text-3xl font-semibold text-center">
            ERROR 404
          </h2>
        </div>
        <div className="md:block hidden w-[6px] h-[300px] bg-gradient-to-b from-white from-15% via-BLUE-200 via-45% to-white to-85% "></div>
        <div className=" md:w-[50%] text-BLUE-700  md:text-left text-center pt-8 md:pt-0">
          <h2 className=" font-semibold lg:text-5xl md:text-4xl text-3xl mb-5">
            ¡Vaya! Parece que te has perdido
          </h2>
          <p className="lg:text-base text-sm font-medium">
            No te preocupes, vuelve a la página principal y continuar navegando.
          </p>
        </div>
      </div>
      <div className=" w-full justify-center flex ">
        <Link
          href={"/"}
          className="text-center bg-BLUE-700 px-5 py-3 rounded-lg hover:scale-110 transition-all ease-in-out duration-200"
        >
          Volver a la pagina principal
        </Link>
      </div>
    </div>
  );
}

export default Error;

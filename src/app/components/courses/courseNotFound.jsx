import React from "react";
import CrefinexLogo from "../../components/logo/crefinexLogo";
import Link from "next/link";

function Error() {
  return (
    <div className="bg-white  md:px-[200px] px-[25px] w-full  font-lexend md:pb-28 pb-14 md:pt-28 pt-24">
      <div className="md:flex w-full items-center">
        <div className="md:w-[50%] w-full flex flex-col items-center">
          <CrefinexLogo fill={"#14093E"} className=" md:w-[60%] w-full" />
          <p className="text-BLUE-700 md:text-3xl text-xl  font-semibold text-center">
            ERROR 404
          </p>
        </div>
        <div className="md:block hidden w-[6px] h-[300px] bg-gradient-to-b from-white from-15% via-BLUE-200 via-45% to-white to-85% "></div>
        <div className="md:w-[50%] w-full mt-[10px] text-BLUE-700 md:pl-20 pl-0 md:text-left text-center pt-8 md:pt-0">
          <h2 className=" font-semibold md:text-3xl text-xl mb-5">
            ¡Vaya! el curso al que intentas acceder parece que ya no esta.
          </h2>
          <p className=" font-medium text-sm">
            Puedes volver a la seccion de cursos y continuar navegando
          </p>
        </div>
      </div>
      <div className=" w-full justify-center flex md:mt-14 mt-7">
        <Link
          href={"/pages/courses"}
          className="text-center bg-BLUE-700 px-5 w-full md:w-auto py-3 rounded-lg hover:scale-110 transition-all ease-in-out duration-200"
        >
          Cursos
        </Link>
      </div>
    </div>
  );
}

export default Error;

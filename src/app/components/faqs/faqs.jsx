import Image from "next/image";
import React from "react";
import QuestionBg from "../../../../public/images/question-bg.png";

function Faqs() {
  return (
    <section className="w-full h-96 relative font-lexend ">
      <Image
        src={QuestionBg}
        alt="question background"
        fill={true}
        className=" object-cover"
      />
      <div className="bg-gradient-to-br px-[100px] py-[50px] from-PURPLE-400  to-BLUE-700 w-[100%] h-[100%] absolute opacity-90">
        <h2 className=" font-bold text-white  text-5xl text-center">
          Preguntas Frecuentes
        </h2>
      </div>
    </section>
  );
}

export default Faqs;

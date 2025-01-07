import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappStickyButton() {
  return (
    <div
      className={`fixed md:bottom-14 md:right-10 bottom-10 right-5 shadow-lg shadow-slate-700 transition-all ease-in-out 
          cursor-pointer lg:hover:scale-125 duration-400 m-auto bg-green-500 z-50 w-[50px] h-[50px] rounded-full 
          flex justify-center items-center`}
    >
      <a href="https://wa.me/584243793717" target="blank">
        <FaWhatsapp className="w-10 h-10" fill={`#ffffff`} />
      </a>
    </div>
  );
}

export default WhatsappStickyButton;

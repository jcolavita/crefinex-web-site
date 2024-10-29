import CrefinexLogo from "../logo/crefinexLogo";
import FooterItem from "./footerItem";
import { FaBookBookmark, FaCircleInfo } from "react-icons/fa6";
import {
  RiInstagramFill,
  RiTiktokFill,
  RiFacebookCircleFill,
  RiYoutubeFill,
} from "react-icons/ri";

import {
  FaQuestionCircle,
  FaUser,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-BLUE-100 px-[25px] md:px-[100px] py-[30px]">
      <div className="md:flex justify-between">
        <div className="flex flex-col items-center md:w-[333px]  ">
          <CrefinexLogo fill={"#14093E"} className=" w-[305px] h-[130px] " />
          <p className="text-BLUE-700 font-bold w-full text-center text-lg ">
            Creciendo Financiera-Mente Exitoso
          </p>
        </div>
        <div className="   md:w-[291px] w-auto  px-[24px] pt-[24px] ">
          <ul>
            <FooterItem className="cursor-pointer">
              <FaBookBookmark color={"#14093E"} size={24} />
              <p className="pl-[10px]">Cursos</p>
            </FooterItem>
            <FooterItem className="cursor-pointer">
              <FaCircleInfo color={"#14093E"} size={24} />
              <p className="pl-[10px]">¿Quienes Somos?</p>
            </FooterItem>
            <FooterItem className="cursor-pointer">
              <FaQuestionCircle color={"#14093E"} size={24} />
              <p className="pl-[10px]">Preguntas frecuentes</p>
            </FooterItem>
            <FooterItem className="cursor-pointer">
              <FaUser color={"#14093E"} size={24} />
              <p className="pl-[10px]">Yismary Arias</p>
            </FooterItem>
          </ul>
        </div>
        <div className=" md:w-[291px] w-auto px-[24px] md:pt-[24px] pb-[35px] md:pb-0">
          <ul className="">
            <div className="pb-[20px]">
              <FooterItem className=" md:hover:scale-100">
                <FaMapMarkerAlt color={"#14093E"} size={24} />
                <p className="pl-[10px]">Ubicación</p>
              </FooterItem>
              <p className="pl-[34px] -mt-[30px] text-BLUE-700 text-lg">
                Centro comercial parque aragua nivel 1 oficina - 31
              </p>
            </div>
            <div>
              <FooterItem className=" md:hover:scale-100 ">
                <FaPhoneAlt color={"#14093E"} size={24} />
                <p className="pl-[10px]">Contacto</p>
              </FooterItem>
              <p className="pl-[34px] -mt-[30px] text-BLUE-700 text-lg">
                contacto@crefinex.com
              </p>
              <p className="pl-[34px]  text-BLUE-700 text-lg">
                +58424-379 37 17
              </p>
            </div>
          </ul>
        </div>
      </div>
      <hr className=" h-1 w-full bg-BLUE-700" />
      <div className="md:flex justify-between pt-[15px]">
        <div className="w-full md:w-auto">
          <p className=" text-BLUE-700 font-light text-center md:text-left ">
            Crefinex 2024 All right reserved.
          </p>
          <p className=" text-BLUE-700 font-light text-center md:text-left pb-[10px] md:pb-0 ">
            Developed and Designed by Jose Colavita.
          </p>
        </div>
        <div className=" flex md:w-[125px] w-auto  md:justify-between justify-center">
          <a href="https://www.instagram.com/crefinex/" target="_blank">
            <RiInstagramFill
              fill={"#14093E"}
              size={24}
              className=" md:hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer"
            />
          </a>
          <a href="https://www.tiktok.com/@academiacrefinex" target="_blank">
            <RiTiktokFill
              fill={"#14093E"}
              size={24}
              className=" md:hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer"
            />
          </a>
          <a
            href="https://www.facebook.com/blockchain.educacion/"
            target="_blank"
          >
            <RiFacebookCircleFill
              fill={"#14093E"}
              size={24}
              className=" md:hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer"
              target="_blank"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCjo_nLbwWx63oDbAvv2Q2sw/videos"
            target="_blank"
          >
            <RiYoutubeFill
              fill={"#14093E"}
              size={24}
              className=" md:hover:scale-125 transition-all ease-in-out duration-200 cursor-pointer"
              target="_blank"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

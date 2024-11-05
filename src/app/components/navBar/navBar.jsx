"use client";
import React, { useState } from "react";
import CrefinexLogo from "../logo/crefinexLogo";
import NavBarItem from "./navBarItem";
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed z-50 top-0 font-lexend md:flex items-center bg-gradient-to-b md:bg-gradient-to-br from-PURPLE-400 to-BLUE-700  w-full h-[60px] px-[25px] md:px-[100px] py-[10px] justify-between`}
    >
      <div className=" justify-between flex items-center  ">
        <NavBarItem link="/">
          <CrefinexLogo fill={"#ffffff"} className="h-[40px] w-[95px]" />
        </NavBarItem>
        <IoMenu
          fill={"#ffffff"}
          className="md:hidden"
          onClick={toggleMenu}
          size={24}
        />
      </div>

      <ul
        className={`flex flex-col md:flex-row justify-between gap-y-4 py-4 gap-x-10 md:py-0 px-[25px] bg-BLUE-700 
          z-50 md:bg-transparent   md:static absolute md:w-auto w-full left-0 transition-all ease-in-out 
          duration-500 md:opacity-100${
            isOpen ? ` top-[60px] opacity-100 ` : " top-[-400px] opacity-0 "
          } `}
      >
        <NavBarItem link="/#">Inicio</NavBarItem>
        <NavBarItem link="/pages/courses">Cursos</NavBarItem>
        <NavBarItem link="/#about-us">¿Quienes Somos?</NavBarItem>
        <NavBarItem link="/#faqs">Preguntas frecuentes</NavBarItem>
      </ul>
    </nav>
  );
}

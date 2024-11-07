"use client";
import React, { useState } from "react";
import CoursesCard from "./coursescard";
import data from "@/app/courses.json";

function Courses() {
  const [cursosFiltrados, setCursosFiltrados] = useState(data);
  const [selectedModulo, setSelectedModulo] = useState("todos");
  const handleModuloChange = (modulo) => {
    setSelectedModulo(modulo);
    setCursosFiltrados(
      data.filter((curso) => modulo === "todos" || curso.module === modulo)
    );
  };

  const nombresModulosUnicos = [...new Set(data.map((curso) => curso.module))];

  return (
    <div className="lg:px-[100px] md:px-[50px] px-[25px] lg:mt-14 mt-7">
      <div className="flex w-full justify-between font-medium items-end">
        <button
          onClick={() => handleModuloChange("todos")}
          className={`
            bg-slate-200 w-full rounded-t-xl h-[40px]  hover:h-[50px] font-semibold transition-all ease-in-out truncate
            ${
              selectedModulo === "todos"
                ? "bg-gradient-to-br from-PURPLE-500 to-BLUE-700 h-[50px] text-white shadow-lg shadow-slate-500"
                : " bg-slate-200 text-BLUE-700"
            }
          `}
        >
          Todos los Cursos
        </button>
        {nombresModulosUnicos.map((moduloUnico) => (
          <button
            key={moduloUnico}
            onClick={() => handleModuloChange(moduloUnico)}
            className={`
               w-full rounded-t-xl h-[40px] lg:hover:h-[50px] transition-all ease-in-out text-sm md:text-base  
              ${
                selectedModulo === moduloUnico
                  ? "bg-gradient-to-br from-PURPLE-500 to-BLUE-700 h-[50px] font-semibold text-white shadow-lg shadow-slate-500"
                  : " bg-slate-200 text-BLUE-700 "
              }
            `}
          >
            {moduloUnico}
          </button>
        ))}
      </div>
      <CoursesCard cursosFiltrados={cursosFiltrados} modulo={selectedModulo} />
    </div>
  );
}

export default Courses;

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
    <div className="md:px-[100px] px-[25px] mt-14">
      <div className="flex w-full justify-between font-semibold items-end">
        <button
          onClick={() => handleModuloChange("todos")}
          className={`
            bg-slate-200 w-full rounded-t-xl h-[40px] hover:h-[55px] transition-all ease-in-out truncate
            ${
              selectedModulo === "todos"
                ? "bg-gradient-to-br from-PURPLE-500 to-BLUE-700 h-[55px] text-white shadow-lg shadow-slate-500"
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
               w-full rounded-t-xl h-[40px] hover:h-[55px] transition-all ease-in-out  
              ${
                selectedModulo === moduloUnico
                  ? "bg-gradient-to-br from-PURPLE-500 to-BLUE-700 h-[55px] text-white shadow-lg shadow-slate-500"
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

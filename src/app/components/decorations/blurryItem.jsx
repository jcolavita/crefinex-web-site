"use client";
import React from "react";

export default function BlurryItem({ ...props }) {
  return (
    <div
      className={
        props.className +
        " md:h-[300px] md:w-[300px] w-[150px] h-[150px] absolute rounded-full mix-blend-multiply filter  blur-3xl opacity-60 "
      }
    ></div>
  );
}

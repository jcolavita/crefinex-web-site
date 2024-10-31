import React from "react";
import Link from "next/link";

export default function NavBarItem({ children, ...props }) {
  return (
    <li
      className={
        props.className +
        " md:hover:scale-110 cursor-pointer transition-all ease-in-out duration-200 px-[20px] py-4 md:py-0 text-white "
      }
    >
      <Link
        href={`${props.link}`}
        className=" font-medium md:text-base text-sm  "
      >
        {children}
      </Link>
    </li>
  );
}

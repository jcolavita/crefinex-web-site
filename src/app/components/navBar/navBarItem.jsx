import React from "react";

export default function NavBarItem({ children, ...props }) {
  return (
    <li
      className={
        props.className +
        " md:hover:scale-110 cursor-pointer transition-all ease-in-out duration-200 px-[20px] py-4 md:py-0 text-white "
      }
    >
      <a link={props.Link} className=" font-semibold md:text-lg text-base ">
        {children}
      </a>
    </li>
  );
}

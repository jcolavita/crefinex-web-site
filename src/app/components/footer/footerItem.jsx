import React from "react";

function FooterItem({ children, ...props }) {
  return (
    <li
      className={
        props.className +
        " mb-[35px] md:hover:scale-110 transition-all ease-in-out duration-200 "
      }
    >
      <a
        href={props.link}
        target={props.target}
        className="flex text-BLUE-700 items-center md:text-base text-sm font-bold"
      >
        {props.leftIcon} {children}
      </a>
    </li>
  );
}

export default FooterItem;

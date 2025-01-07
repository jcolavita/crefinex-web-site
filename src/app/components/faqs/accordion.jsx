"use client";
import React from "react";
import chevronDown from "../../../../public/images/svg/chevron.svg";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Image from "next/image";
import faqsJSON from "@/app/json/faqs.json";
import { useEffect, useState } from "react";

function Accordionlist() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(faqsJSON);
  }, []);

  const AccordionItem = ({ header, ...rest }) => (
    <Item
      {...rest}
      header={
        <>
          {header}
          <Image
            className={`ml-auto mr-0 place-self-end chevron`}
            src={chevronDown}
            alt="Chevron Down"
          />
        </>
      }
      className="  mb-[8px] "
      buttonProps={{
        className: ({ isEnter }) =>
          `bg-white lg:hover:bg-PRIMARY-100 cursor-pointer flex items-center  w-full font-semibold text-BLUE-700 py-2 px-4 transition-all ease-in-out  ${
            isEnter && "bg-PRIMARY-100 itemBtnExpanded  "
          }`,
      }}
      contentProps={{ className: "itemContent text-BLUE-700 bg-white" }}
      panelProps={{ className: ` p-4` }}
    />
  );

  return (
    <div className=" md:px-14 px-0  text-sm lg:text-base">
      {data && (
        <Accordion transition transitionTimeout={250} className="  ">
          {data.map((item) => (
            <AccordionItem header={item.question} key={item.id}>
              {item.answer}
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </div>
  );
}

export default Accordionlist;

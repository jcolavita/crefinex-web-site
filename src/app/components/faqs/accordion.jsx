"use client";
import React from "react";
import chevronDown from "../../../../public/images/svg/chevron.svg";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import Image from "next/image";
import faqsJSON from "@/app/faqs.json";
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
            className="ml-auto chevronAnimation "
            src={chevronDown}
            alt="Chevron Down"
          />
        </>
      }
      className="  mb-[8px]"
      buttonProps={{
        className: ({ isEnter }) =>
          `cursor-pointer flex items-center w-full font-semibold  text-BLUE-700 py-2 px-4 s  ${
            isEnter ? "bg-PURPLE-100" : "bg-white md:hover:bg-PURPLE-100"
          }`,
      }}
      contentProps={{ className: "itemContent text-BLUE-700 bg-white" }}
      panelProps={{ className: ` p-4` }}
    />
  );

  return (
    <div className=" md:px-14 px-0 ">
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

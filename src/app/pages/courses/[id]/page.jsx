import React from "react";
import data from "@/app/courses.json";
import CourseNotFound from "../../../components/courses/courseNotFound";
import CourseInfo from "../../../components/courses/courseInfoSection";

export default async function Page({ params }) {
  const { id } = await params;
  const course = data.find((item) => item.id === id);

  if (!course) {
    return (
      <div>
        <CourseNotFound />
      </div>
    );
  }

  const {
    title,
    description,
    price,
    hours,
    classesCantity,
    buyLink,
    moreInfo,
    target,
    background,
    yismary,
    cover,
    puv,
  } = course;

  return (
    <div>
      <CourseInfo
        title={title}
        description={description}
        price={price}
        hours={hours}
        classes={classesCantity}
        buyLink={buyLink}
        moreInfo={moreInfo}
        target={target}
        background={background}
        yismary={yismary}
        cover={cover}
        puv={puv}
      />
    </div>
  );
}

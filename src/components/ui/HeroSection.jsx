"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";

const HeroSection = ({ title, description, bgImage, bgColor, bgGradient }) => {
  const { id } = useParams();
  const { data: courses } = useSelector((state) => state.courses);
  const course = id ? courses.find((course) => course._id === id) : null;

  const backgroundStyle = bgImage
    ? { backgroundImage: `url(${bgImage})` }
    : bgGradient
    ? { background: bgGradient }
    : bgColor
    ? { backgroundColor: bgColor }
    : {
        backgroundImage:
          "url(https://educrat-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbg.86c9aca0.png&w=1920&q=75)",
      };
  const courseTitle = course
    ? course.name.split(" - ")[1] || course.name
    : title || "Hello there";
  return (
    <div
      className="hero bg-cover bg-center min-h-[50vh] pt-28"
      style={backgroundStyle}
    >
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <div className="mb-5 text-5xl font-bold">{courseTitle}</div>
          <p className="mb-5 w-full">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

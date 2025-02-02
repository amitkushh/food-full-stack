import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { GiFullPizza } from "react-icons/gi";

function About() {
  const about = [
    {
      image: <FaPizzaSlice size={50} />,
      title: "order your food",
      para: "Order your food and wait.",
    },
    {
      image: <IoBagHandle size={50} />,
      title: "delivery $ pickup",
      para: "Order will be delivered as soon as possible.",
    },
    {
      image: <GiFullPizza size={50} />,
      title: "delicous recipe",
      para: "Best food, eat and enjoy",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center px-6 py-14 md:px-20 md:py-20 lg:px-20 lg:py-20">
      <h2 className="text-3xl font-semibold mb-10">About</h2>
      <div className="grid grid-cols-1 justify-center items-center gap-5 md:grid-cols-3 ">
        {about.map((steps, index) => (
          <div
            className="flex flex-col justify-center items-center bg-white rounded-md p-16 md:h-80"
            key={index}
          >
            <span>{steps.image}</span>
            <span className="capitalize text-lg font-semibold text-center my-3">
              {steps.title}
            </span>
            <p className="text-center">{steps.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;

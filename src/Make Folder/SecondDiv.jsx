import React from "react";
import "./Make Css/SecondDiv.css";
import { IoMdTrendingUp } from "react-icons/io";
import { SlGraph } from "react-icons/sl";
import { TbTax } from "react-icons/tb";

function SecondDiv() {
  const icons = [
    {
      icon: <IoMdTrendingUp />,
      text: "Growing Business",
      Desc: "Finance helps you to convert into a strategic asset get.",
    },
    {
      icon: <SlGraph />,
      text: "Finance Investment",
      Desc: "Finance helps you to convert into a strategic asset get.",
    },
    {
      icon: <TbTax />,
      text: "Tax Advisory",
      Desc: "Finance helps you to convert into a strategic asset get.",
    },
  ];

  return (
    <>
    <div className="d-flex mico justify-content-center">
      {
        icons.map((icon, index) => {
          return <div className="d-flex mt-4 gap-2 icod">
          <div className="ico">
           {icon.icon}
          </div>
          <div className="icod-text">
            <h4>{icon.text}</h4>
            <p>{icon.Desc}</p>
          </div>
        </div>
        })
      }
    </div>
    <hr /></>
  );
}

export default SecondDiv;

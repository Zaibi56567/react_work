import React from "react";
import "./Make Css/ThirdDiv.scss";
import { FaArrowCircleRight } from "react-icons/fa";
import img1 from "../Media/experience-icon-from-teamwork-collection-simple-line-element-experience-symbol-for-templates-web-design-and-infographics-2B7G3FY.jpg";

function ThirdDiv() {
  const icos = [
    {
      icon: <FaArrowCircleRight />,
      text: "100% Better results",
    },
    {
      icon: <FaArrowCircleRight />,
      text: "Suspe ndisse suscipit sagittis",
    },
    {
      icon: <FaArrowCircleRight />,
      text: "Promis Specific TimelineI Guarantee",
    },
    {
      icon: <FaArrowCircleRight />,
      text: "Review Credit Reports",
    },
  ];

  const line = {
    width: "1px",
    height: "76px",
    backgroundColor: "white",
  };
  return (
    <div className="col-12 thirdDiv mt-5 d-flex justify-content-evenly flex-wrap">
      <div className="col-md-4 td1">
        <img src="https://gerow-react.vercel.app/static/media/h2_about_img01.b69a86607d4b8ab28fd6.jpg" alt="" />
        <img
          src="https://gerow-react.vercel.app/static/media/h2_about_img02.ba323a188d6d3f2df8ae.jpg"
          alt=""
          className="img1"
        />

        <div className="TwentyFive">
          <h2 className="text-center">
            25 <br /> Years
          </h2>
          <div className="line" style={line}></div>
          <p>
            Of Experince in <br />
            Finance Advisory Company..
          </p>
        </div>
      </div>
      <div className="col-md-5 td2">
        <h5>Get To know US</h5>
        <h1 className="mt-3">
          Innovative Business Solutions <br />
          for Financial Company...
        </h1>
        <p>
          Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum
          dolor sit amet, consecteture.Borem ipsum dolor sit amet, consectetur
          adipiscing elita florai psum.
        </p>
        {icos.map((item, index) => {
          return (
            <div className="icos">
              <FaArrowCircleRight className="FaArrowCircleRight" />
              <p>{item.text}</p>
            </div>
          );
        })}
        <div className="ceo d-flex gap-3 mt-2">
          <img
            src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
          <p>
            <mark>Mark Stranger</mark> <br /> CEO, ABC Company
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThirdDiv;

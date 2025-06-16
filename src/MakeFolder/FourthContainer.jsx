import React from "react";
import "../Make Css/FourthCon.css";

function FourthContainer() {
  let skillsarray = [
    {
      percent: 100 + "%",
      name: "shahzaib",
      skill: "front end developer",
      Dates: "20-12-2025"
    },
    {
      percent: 90 + "%",
      name: "ali",
      skill: "front end developer",
      Dates: "20-12-2025"

    },
    {
      percent: 40 + "%",
      name: "shahzaib",
      skill: "front end developer",
      Dates: "20-12-2025"

    },
    {
      percent: 20 + "%",
      name: "shahzaib",
      skill: "front end developer",
      Dates: "20-12-2025"

    },
  ];
  return (
    <div className="">
      <div className="allbtn">Skills</div>
      <div className="skillscont">
        {skillsarray.map((skarelm, skarind) => {
          return (
            <div className="skillscon1">
              <div className="skpcov d-flex gap-3">
                <div className="skprc">{skarelm.percent}</div>
                <div className="skp">
                  <p>
                    <b>Lorem ipsum dolor sit.</b> <br />
                    Lorem ipsum dolor sit. <br />
                    {skarelm.Dates}
                  </p>
                </div>
              </div>
              <div className="sklsinfoo">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellendus, iste debitis a ut reprehenderit nobis recusandae omnis, amet quisquam ab animi sunt exercitationem optio neque, dolores eaque. Exercitationem, nihil.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellendus, iste debitis a ut reprehenderit nobis recusandae omnis, amet quisquam ab animi sunt exercitationem optio neque, dolores eaque. Exercitationem, nihil.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum repellendus, iste debitis a ut reprehenderit nobis recusandae omnis, amet quisquam ab animi sunt exercitationem optio neque, dolores eaque. Exercitationem, nihil.
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FourthContainer;

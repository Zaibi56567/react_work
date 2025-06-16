import React from "react";
import "./Css Folder/ratesm.css";
import { CiWallet } from "react-icons/ci";

function Rate() {
  let rates = [
    {
      title: "Today money",
      price: "$53000",
      upper: "+55%",
      icons: <CiWallet />,
    },
    
    {
      title: "Today User",
      price: "2300",
      upper: "+5%",
      icons: <CiWallet />,
    },
    {
      title: "New Clients",
      price: "3052",
      upper: "-14%",
      icons: <CiWallet />,
    },
    {
      title: "Total Sales",
      price: "$17300",
      upper: "+8%",
      icons: <CiWallet />,
    },
  ];
  return (
    <div className="container d-flex ratesm">
      {rates.map((rate, index) => {
        return (
          <div className="col-md-3 rcard">
            <span>{rate.title}</span>
            <section>
              {rate.price}{" "}
              <span style={{ fontSize: "12px", color: "green" & "red" }}>{rate.upper}</span>
              
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default Rate;

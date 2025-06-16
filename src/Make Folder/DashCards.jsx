import React from "react";
import "./Make Css/DashCards.css";
import { FaWallet, FaGlobe, FaFileAlt, FaShoppingCart } from "react-icons/fa";

const cards = [
  {
    title: "Today's Money",
    value: "$53,000",
    change: "+55%",
    changeColor: "green",
    icon: <FaWallet />, 
    iconBg: "#2563eb"
  },
  {
    title: "Today's Users",
    value: "2,300",
    change: "+5%",
    changeColor: "green",
    icon: <FaGlobe />, 
    iconBg: "#0ea5e9"
  },
  {
    title: "New Clients",
    value: "+3,052",
    change: "-14%",
    changeColor: "red",
    icon: <FaFileAlt />, 
    iconBg: "#f43f5e"
  },
  {
    title: "Total Sales",
    value: "$173,000",
    change: "+8%",
    changeColor: "green",
    icon: <FaShoppingCart />, 
    iconBg: "#22d3ee"
  },
];

function DashCards() {
  return (
    <div className="dashcards-row">
      {cards.map((card) => (
        <div className="dashcard" key={card.title}>
          <div className="dashcard-info">
            <div className="dashcard-title">{card.title}</div>
            <div className="dashcard-value-row">
              <span className="dashcard-value">{card.value}</span>
              <span className="dashcard-change" style={{ color: card.changeColor }}>{card.change}</span>
            </div>
          </div>
          <div className="dashcard-icon" style={{ background: card.iconBg }}>
            {card.icon}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashCards;

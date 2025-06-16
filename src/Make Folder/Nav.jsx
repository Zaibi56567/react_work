import React from "react";
import "./Make Css/Nav.css";
import { CiPhone } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import FirstDiv from "./FirstDiv";

function Nav() {
  const li = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Team", link: "#team" },
    { name: "Blog", link: "#blog" },
    { name: "Contact", link: "#contact" }
  ];

  const handleScroll = (e, link) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://i.ibb.co/Rp5WLXsP/media-1c66507b68db7c7927c0f978345701fe0b2200583-removebg-preview-1.png"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <CiMenuFries />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav gap-2">
              {li.map((item, index) => (
                <li key={index} className="nav-item">
                  <a
                    className="nav-link"
                    href={item.link}
                    onClick={(e) => handleScroll(e, item.link)}
                    style={{
                      color: index === 0 ? "#0f5fff" : "black",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#0f5fff")}
                    onMouseLeave={(e) =>
                      (e.target.style.color = index === 0 ? "#0f5fff" : "black")
                    }
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="num">
            <div className="icon">
              <CiPhone className="CiPhone" />
            </div>
            <p>
              Hot Number  <br />
              0334-7611-391
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;

import React, { Fragment, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Nav() {
  let navli = ["Home", "About", "Skills", "Contact"];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);
  const styles = {
    ul: {
      gap: "50px",
      margin: "-70px",
    },
    li: {
      listStyleType: "none",
      transition: "all ease 1s",
      fontWeight:'100',

    },
    liHover: {
      transform: "scale(1.3)",
    },
    label: {
      transition: "all ease 1s",
    },
  };

  return (
    <Fragment>
      <nav>
        <label
          htmlFor=""
          data-aos="fade-up"
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.3)";
            e.target.style.marginTop = "-10px";
            e.target.style.textShadow = "10px 10px 5px white";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.marginTop = "-0px";
            e.target.style.textShadow = "none";
          }}
          style={styles.label}
        >
          Zaibi R.
        </label>
        <ul style={styles.ul}>
          {navli.map((navlielm, navliind) => (
            <li
              key={navliind}
              style={styles.li}
              data-aos="fade-up"
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.3)";
                e.target.style.marginTop = "-10px";
                e.target.style.textShadow = "10px 10px 5px white";
                e.target.style.fontWeight = "300";

              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.marginTop = "-0px";
                e.target.style.textShadow = "none";
                e.target.style.fontWeight = "100";
              }}>
              {navlielm}
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
}

export default Nav;

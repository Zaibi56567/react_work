import React, { useState, useEffect } from 'react';
import { CiMenuFries } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Css Folder/Nav2.css';

const MENU_ITEMS = ['Home', 'Pages', 'Portfolio', 'Contact', 'About', 'Blog'];

function Nav2() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => { AOS.init({ duration: 3000 }); }, []);

  const toggleDropdown = () => {
    if (showDropdown) {
      setIsClosing(true);
      setTimeout(() => {
        setShowDropdown(false);
        setIsClosing(false);
      }, 500);
    } else {
      setShowDropdown(true);
    }
    setActiveMenu(null);
  };

  const toggleSubmenu = (menu) => setActiveMenu(activeMenu === menu ? null : menu);

  return (
    <>
      <div className='col-md-12 nav-2'>
        <span>Lensa</span>
        <CiMenuFries onClick={toggleDropdown} className="menu-icon" />
        <section className='s1'>Need A PhotoGrapher.?</section>
      </div>

      {(showDropdown || isClosing) && (
        <div className={`full-div col-md-12 ${isClosing ? 'closing' : ''}`}>
          <button className="close-btn" onClick={toggleDropdown}>✕</button>
          <div className="contact-sec col-md-4" data-aos="fade-down">
            <h1 data-aos="fade-right">Lesna</h1>
            <h2 data-aos="fade-left">Let's Connect</h2>
            <p data-aos="fade-right">+123 445 566</p>
            <p data-aos="fade-left">hello@lensaphoto.com</p>
            <div className="icons">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-pinterest"></i>
            </div>
          </div>
          <div className="drop-sec col-md-8" data-aos="fade-up">
            <ul>
              {MENU_ITEMS.map(item => (
                <li key={item} className='li-animation'>
                  <div onClick={() => toggleSubmenu(item)} className="menu-item">{item}</div>
                  {activeMenu === item && (
                    <ul className="submenu">
                      {[1, 2, 3].map(opt => (
                        <li key={opt} style={{ fontSize: '30px' }}>{item} Option {opt}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav2;
import React from 'react'
import "../Make Css/FourthDiv.css"
import { MdKeyboardArrowRight } from "react-icons/md";

import { FaPiggyBank, FaCalculator, FaWallet, FaLayerGroup } from 'react-icons/fa'

function FourthDiv() {

  const serviceData = [
    {
      icon: <FaPiggyBank />,
      title: 'Finance Planning',
      description: 'Lorem ipsum dolor sit amet.',
      bgimg:"https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
    },
    {
      icon: <FaCalculator />,
      title: 'Tax File Audit',
      description: 'Lorem ipsum dolor sit amet.',
      bgimg:"https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
    },
    {
      icon: <FaWallet />,
      title: 'Investment Idea',
      description: 'Lorem ipsum dolor sit amet.',
      bgimg:"https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
    },
    {
      icon: <FaLayerGroup />,
      title: 'Risk Management',
      description: 'Lorem ipsum dolor sit amet.',
      bgimg:"https://images.unsplash.com/photo-1590523278191-995cbcda646b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
    },
    
  ]
  return (
    <div className="fourth-div-container">
      <div className="fourth-div-header">
        <span className="what-we-do">WHAT WE DO FOR YOU</span>
        <div className="header-content">
          <h2>We can inspire and Offer Different Services</h2>
          <button className="see-all-btn">SEE ALL SERVICE <MdKeyboardArrowRight /></button>
        </div>
      </div>

      <div className="service-cov d-flex justify-content-evenly flex-wrap">
        {
          serviceData.map((service, index) => (
            <div className="service-card mt-3" style={{backgroundImage: `url(${service.bgimg})`}}>
          <div className="service-icon">
            {service.icon}
          </div>
          <h3>{service.title}</h3>
          <p className='hide-p'>{service.description}</p>
          <div className="service-overlay"></div>
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default FourthDiv

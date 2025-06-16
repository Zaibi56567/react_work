import React from 'react'
import { MdNotifications, MdPerson, MdSettings, MdSearch } from 'react-icons/md'
import "./Css Folder/NavBar.css"
import "./Css Folder/SecondFile.css"
import Rates from './Rates'
import Rate from './Rates'

const menuItems = [
  { icon: <MdPerson />, label: 'Sign In' },
  { icon: <MdSettings />, },
  { icon: <MdNotifications />, },

]

function Navbar() {
  return (
    <>
    <div className="covernav">
    <nav className='navbar'>
      <div className="nav-left">
        <p className='p1'>Pages/Dashboard</p>
      </div>
      <div className="nav-center">
        <div className="search-container">
          <MdSearch className="search-icon" />
          <input type="text" placeholder='Search...' />
        </div>
      </div>
      <div className="nav-right">
        {menuItems.map((item, index) => (
          <div key={index} className="nav-item">
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    

    </nav>
    <Rate/> 
    </div>
    
    </>
    
    
  )
}

export default Navbar

import React from 'react'
import { MdNotifications, MdPerson, MdSettings,  } from 'react-icons/md'
import "./Css Folder/NavBar.css"
import "./Css Folder/SecondFile.css"
import Rates from './Rates'
import Navbar from './Nav'
import Rate from './Rates'

const menuItems = [
  { icon: <MdPerson />, label: 'Sign In' },
  { icon: <MdSettings />, },
  { icon: <MdNotifications />, },

]

function SecondFile() {
  return (
  <>
   <Navbar/>
   </>
   
    
    
  )
}

export default SecondFile

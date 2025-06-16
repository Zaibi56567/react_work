import React from 'react'
import FirstDiv from './FirstDiv'
import SecondDiv from './SecondDiv'
import ThirdDiv from './ThirdDiv'
import FourthDiv from './FourthDiv'
import FivethDiv from './FivethDiv'
import SixthDiv from './SixthDiv'
import SeventhDiv from './SeventhDiv'
import EighthDiv from './EighthDiv'
import NinethDiv from './NinethDiv'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contact from './Contact'

// Home component to contain all the main content
function Home() {
  return (
    <>
      <FirstDiv/>
      <SecondDiv/>
      <ThirdDiv/>
      <FourthDiv/>
      <FivethDiv/>
      <SixthDiv/>
      <SeventhDiv/>
      <EighthDiv/>
      <NinethDiv/>
    </>
  )
}

function Main() {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default Main

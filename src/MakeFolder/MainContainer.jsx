import React from 'react'
import Container1 from './Container'
import Button1 from './Button'
import SecondCon from './SecondCon'
import ThirdContainer from './ThirdContainer'
import FourthContainer from './FourthContainer'
import FiveContainer from './FiveContainer'


function MainContainer() {
  return (
    <div className='container'>
      <Container1/>
      <Button1/>
      <SecondCon/>
      <ThirdContainer/>
      <FourthContainer/>
      <FiveContainer/>
    </div>
  )
}

export default MainContainer
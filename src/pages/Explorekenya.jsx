import React from 'react'
import Bannerone from '../Components/Bannerone/Bannerone'
import Explore from '../Components/Explorekenya/Explore'
import Gallery from '../Components/Gallery/Gallery'

function Explorekenya() {
  return (
    <div className='explorekenya'>
      <Bannerone/>

      <Explore/>

      <Gallery/>
    </div>
  )
}

export default Explorekenya
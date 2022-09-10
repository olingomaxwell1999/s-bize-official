import React from 'react'
import Card from '../Card/Card'
import './whyus.scss'

function Whyus() {
  return (
    <div className='why'>
        <div className="text">
            <h1>Why Choose S-Bize</h1>

            <p>Since 2018, Nairobits has been hosting students from the london School of economics in Kenya to undertake their research as part of their masters program. This research involves structuring social business models for organizations.</p>
        </div>

        <div className="cards">
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Whyus
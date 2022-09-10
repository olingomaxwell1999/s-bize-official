import Card from '../Card/Card'
import React from 'react'
import './cohorts.scss'

function Cohorts() {
  return (
    <div className='cohorts'>
        <div className="text">
            <h1>Explore Centers</h1>

            <p>
            Since 2018, Nairobits has been hosting students from the london School of economics in Kenya to undertake their research as part of their masters program. This research involves structuring social business models for organizations.  
            </p>
        </div>
        <div className="horts">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Cohorts
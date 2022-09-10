import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import Card from '../Components/Card/Card'

function Meetthecohorts() {
  return (
    <div>
      <Bannertwo/>

      <div className="cohortsall">
        <div className="text">
          <h2>Meet our Cohorts</h2>
          <p>Since 2018, Nairobits has been hosting students from the london School of economics in Kenya to undertake their research as part of their masters program. This research involves structuring social business models for organizations.</p>
        </div>

        <div className="orts">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  )
}

export default Meetthecohorts
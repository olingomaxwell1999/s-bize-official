import React from 'react'
import back2 from '../assets/banner2.JPG'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import Twentyvid from '../Components/Twentyvid/Twentyvid'
import Cohorts from '../Components/Cohorts/Cohorts'

function Twenty() {
  return (
    <div className='twenty'>
      <Bannertwo bg={back2} title="2020 Cohort" />

      <Twentyvid title="get to know the 2020 cohort" text='We have identified organizations that are interested in scaling up the impact they have on the lives of the people living in low-income areas. It is clear that these entrepreneurs are committed to benefit from your expertise. This year we gave those who wanted this opportunity enough time to apply for the program. Once the application window was closed, the members who had applied for the program were interviewed and the program begun' />

      <Cohorts/>
    </div>
  )
}

export default Twenty
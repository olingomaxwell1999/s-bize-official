import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back3 from '../assets/banner2.JPG'
import Twentyonevid from '../Components/Twentyonevid/Twentyonevid'
import Cohortstwo from '../Components/Cohortstwo/Cohortstwo'

function Twentyone() {
  return (
    <div className='twenty'>
      <Bannertwo bg={back3} title="2021 Cohort" />

      <Twentyonevid text='We are excited to host you this year! In the coming months you will be immersed in the social enterprise landscape in the slums of Nairobi and the realities of a social entrepreneur maneuvering to change the world in Kenya. The program will challenge you to unlearn what you are used to and practice your business genius to real life organizations. Once the application window was closed, the members who had applied for the program were interviewed and the program begun' />

      <Cohortstwo/>
    </div>
  )
}

export default Twentyone
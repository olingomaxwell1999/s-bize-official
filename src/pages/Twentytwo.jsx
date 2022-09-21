import React from 'react'
import back2 from '../assets/banner3.avif'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import Cohortsthree from "../Components/Cohortsthree/Cohortsthree";
import Twentytwovid from '../Components/Twentytwovid/Twentytwovid'

function Twentytwo() {
  return (
    <div className='twenty'>
      <Bannertwo bg={back2} title="2022 Cohort" />

      <Twentytwovid text='NairoBits is pleased to welcome you to the 2022/23 research phase of your Masters program. We believe that this phase will help you put evidence & innovation based techniques to support Kenyan organizations 
in internal planning and lead to growth & expansion of their impact in the communities they operate in.
' />

      <Cohortsthree/>
    </div>
  )
}

export default Twentytwo
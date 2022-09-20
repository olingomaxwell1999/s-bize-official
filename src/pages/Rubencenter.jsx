import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/ruben.jpg'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'
import Displayfive from '../Components/Displayfive/Displayfive'

function Rubencenter() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="Ruben Centre"/>

      <Displayfive title="About Ruben Center" desc="As the only Community Centre, and “one-stop-shop”  in Kwa Ruben, our diversity of projects enables choice and change for people who are caught in the “poverty penalty”, and, whose vulnerability is more pronounced because of the lack of government/donor-funded investment in this particular slum.  In fact, over the past two years, the slums of Mukuru have been highlighted in a number of international studies, and these indicated the negative impacts experienced by this community, because of the minimal attention or support received from the Kenya National and County Governments."/>

      <Displaysix id='IvxD56sb9Ik'/>

      <Displayseven title='suggested projects & Deliverable' desc="Due to the diversity of the centre and the programs, the organization has many target groups across the Kwa Ruben Slum. These include school going children, children with disabilities, youth and teenage mothers." link="https://www.rubencentre.org/"/>
    </div>
  )
}

export default Rubencenter
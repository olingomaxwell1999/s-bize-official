import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/ruben.jpg'
import target from '../assets/target.jpg'
import sustainability from '../assets/sustainability.jpg'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'
import Displayten from '../Components/Displayten/Displayten'

function Rubencenter() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="Ruben Centre"/>

      <Displayten title="Social Problem" desc="As the only Community Centre, and “one-stop-shop”  in Kwa Ruben, our diversity of projects enables choice and change for people who are caught in the “poverty penalty”, and, whose vulnerability is more pronounced because of the lack of government/donor-funded investment in this particular slum.  In fact, over the past two years, the slums of Mukuru have been highlighted in a number of international studies, and these indicated the negative impacts experienced by this community, because of the minimal attention or support received from the Kenya National and County Governments."/>

      <Displaysix title='Sustainability' desc="Ruben Centre is a non-profit, faith-based organization striving for an empowered and just Mukuru community by providing quality education, health, financial and social services to children and families in the area. Run by the Christian Brothers African Province, it is one of eight Christian Brothers project sites across Africa, and offers a vital source of community development programmes to the residents of one of the largest slums in Nairobi. " img={sustainability}/>

      <Displayseven title='Target Group' desc="Due to the diversity of the centre and the programs, the organization has many target groups across the Kwa Ruben Slum. These include school going children, children with disabilities, youth and teenage mothers." link="https://www.rubencentre.org/" img={target}/>
    </div>
  )
}

export default Rubencenter
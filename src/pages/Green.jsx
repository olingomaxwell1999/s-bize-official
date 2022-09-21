import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/greenkenya.jpg'
import Displayfive from '../Components/Displayfive/Displayfive'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'

function Green() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="Green Kenya"/>

      <Displayfive title="about Green kenya" desc="Green Kenya develops life skills among local youth through Sports for Development programmes. This project lies at the intersection of sports, life skills development, gender and environment. The organization has a wide array of active programs: Community Impact Project is a sport for social change concept that addresses United Nations Sustainable development goal UNSDGs every month through soccer themed sessions. The program runs for seven months in primary schools during physical education lessons. The sessions are conducted by professionals called Community Impact Coaches. Green-Kenya’s target is to ensure women’s full and effective participation and equal opportunities for leadership at all levels of decision-making in political, economic and public life. The program promotes health, safety, education and leadership of girls at the grassroots level, and builds a community of passionate advocates who talk freely about challenges and issues facing the girl child. Youth league takes place in the heart of the community where our sport for development program takes place. The league engages young people who have nothing to do especially during weekends and when the schools are closed. The league has been in place to engage young people who are idle during the weekends and when schools close. Kick and Conserve concept is a tournament geared to teach young people how to be environmental stewards. We are targeting to improve education, awareness-raising and human and institutional capacity on climate change mitigation, adaptation, impact reduction and early warning. Green-Kenya’s Consultancy Strengthen the means of implementation and revitalize the global partnership for sustainable development, we do this through capacity building of Sport for development organizations in Africa."/>

      <Displaysix id='O9bSA_i_ENU'/>

      <Displayseven title='suggested project & deliverable' desc="The suggested deliverable for this project is developing an environmental literacy programme and/or life skills programme for adolescent girls in the local community.." link="https://www.green-kenya.org/"/>
    </div>
  )
}

export default Green
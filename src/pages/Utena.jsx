import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/utenabanner.jpg'
import Displayfive from '../Components/Displayfive/Displayfive'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'

function Utena() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="U-Tena Youth Organization"/>

      <Displayfive title="about U-Tena Youth Organization" desc="U-TENA Youth organization is a Non profit  organization that was established in 2006 in Mukuru,Nairobi Kenya. U-Tena’s intervention focuses on health, education, and livelihoods areas within the informal settlements of Nairobi Kenya. Vision: Empowering and developing youths to realize their potential. Mission: To provide development opportunities by promoting healthy living, education, livelihood, and social responsibility . U-Tena 4 key strategic objectives include: Youth Mentorship and Development; Organizational Development and Strengthening Marketing and Publicity; and  Resource Mobilization for Sustainability. "/>

      <Displaysix id='A3ljbxaK6e8'/>

      <Displayseven title='suggested project & deliverable' desc="To enhance digital literacy among the youth towards quality education, U-Tena proposes to build an ICT center at Youth friendly resource center. This will mark up the digital literacy level among youths. The center is a strategic location serving on average 300 youths per month seeking ASRHR. The hall with a capacity of 120 people serves as a training center for U-Tena & Youths in Mukuru. Youths will be exposed to a platform to gain income through online platforms; High School students and form 4 leavers will be exposed to responsive use of technology for subsidized affordable prices towards sustainability.
 
The organization is looking for a way to make this program a reality and self-sustaining.
" link="https://www.u-tena.org
"/>
    </div>
  )
}

export default Utena
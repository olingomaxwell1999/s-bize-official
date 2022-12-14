import React from 'react'
import Bannertwo from '../Components/Bannertwo/Bannertwo'
import back2 from '../assets/relinked.jpg'
import target from '../assets/target.jpg'
import Displaysix from '../Components/Displaysix/Displaysix'
// import Displaytwo from '../Components/Displaytwo/Displaytwo'
import Displayseven from '../Components/Displayseven/Displayseven'
import Displayfive from '../Components/Displayfive/Displayfive'

function Relinkedgroup() {
  return (
    <div className='nairobits'>
      <Bannertwo bg={back2} title="Relinked Group"/>

      <Displayfive title="About Relinked Group" desc="Generally in Kenya, the rate of youth unemployment is high and this is especially worse for the youth in slums. This is because of these youth lack access to equitable services such as education and opportunities such as jobs as compared to their counterparts.

Relinked Group is a growing network of young people who are using their gifts, skills, and expertise to create compelling opportunities that contribute to sustainable development."/>

      <Displaysix id="ANdkYtgDaJw"/>

      <Displayseven title='suggested project & deliverable' desc="The Relinked Group currently works with young people from low income areas, particularly the Eastland’s areas of Nairobi, including the Mathare slums. Specifically, the group deals with youth from high school, TVETs and universities to offer them a transition period before they can start accessing jobs.

The organization engages its members through social events, training, offering networking opportunities, peer to peer learning and monthly meetings. Further, they offer financial support through loans as low interest rates for members to start businesses.

Relinked is looking to develop a resource hub for the Mathare slum that shall include  a library, computer centre, co-working space, innovation centres etc." link="https://www.relinkedgroup.org/" img={target}/>
    </div>
  )
}

export default Relinkedgroup